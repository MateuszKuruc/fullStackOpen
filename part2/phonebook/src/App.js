import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";
import serviceNumbers from "./services/numbers";
import Notification from "./components/Notification";
import Error from "./components/Error";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [searchPerson, setSearchPerson] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    serviceNumbers.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const createNewName = (event) => {
    setNewName(event.target.value);
  };

  const addNewPerson = (event) => {
    event.preventDefault();

    if (newName.length === 0 || newNumber.length === 0) {
      alert("Please enter all details");
      return;
    } else if (persons.some((person) => person.name === newName)) {
      if (window.confirm(`Do you want to change ${newName}'s number?`)) {
        const personAlt = persons.find((person) => newName === person.name);
        const url = `api/persons/${personAlt.id}`;
        const changedPerson = { name: personAlt.name, number: newNumber };

        serviceNumbers
          .change(url, changedPerson)
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== personAlt.id ? person : updatedPerson
              )
            );
            setSuccessMessage(
              `${changedPerson.name}'s phone number has been updated!`
            );
            setTimeout(() => {
              setSuccessMessage(null);
            }, 3000);
          })
          .catch((error) => {
            setErrorMessage(
              `${changedPerson.name} has already been deleted from server!`
            );
            serviceNumbers.getAll().then((initialPersons) => {
              setPersons(initialPersons);
            });
          });
      } else return;
    } else if (persons.some((person) => person.number === newNumber)) {
      alert(`${newNumber} is already added to phonebook`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      serviceNumbers.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
      });
      setSuccessMessage(`Added ${newName}`);
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    }

    setNewName("");
    setNewNumber("");
  };

  const createNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const createSearch = (event) => {
    setSearchPerson(event.target.value);
    setShowAll(false);
  };

  const personsToShow = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(searchPerson.toLowerCase())
      );

  const deletePerson = (person) => {
    const id = person.id;
    if (window.confirm(`Do you want to delete ${person.name}?`))
      serviceNumbers
        .deletePerson(id)
        .then((response) => {
          serviceNumbers.getAll().then((initialPersons) => {
            setPersons(initialPersons);
          });
          setSuccessMessage(`Deleted ${person.name}`);
          setTimeout(() => {
            setSuccessMessage(null);
          }, 3000);
        })

        .catch((error) => {
          console.log(error);
        });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} />
      <Error error={errorMessage} />
      <Filter handleInput={createSearch} />
      <h2>Add new</h2>
      <form>
        <PersonForm
          name={newName}
          number={newNumber}
          handleNewName={createNewName}
          handleNewNumber={createNewNumber}
          type="submit"
          handleNewPerson={addNewPerson}
        />
      </form>
      <h2>Numbers</h2>
      <Persons display={personsToShow} deleteData={deletePerson} />
    </div>
  );
};

export default App;
