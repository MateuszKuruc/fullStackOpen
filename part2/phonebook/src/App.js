import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [searchPerson, setSearchPerson] = useState("");


  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      const persons = response.data;
      setPersons(persons);
    })
  }, [])

  const createNewName = (event) => {
    setNewName(event.target.value);
  };

  const addNewPerson = (event) => {
    event.preventDefault();

    if (newName.length === 0 || newNumber.length === 0) {
      alert("Please enter all details");
      return;
    } else if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else if (persons.some((person) => person.number === newNumber)) {
      alert(`${newNumber} is already added to phonebook`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };
      axios
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
      })
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

  return (
    <div>
      <h2>Phonebook</h2>
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
      <Persons display={personsToShow} />
    </div>
  );
};

export default App;
