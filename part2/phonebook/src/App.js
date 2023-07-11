import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: 555555555, id: 1 },
    { name: "Mati Bambati", number: 123456789, id: 2 },
    { name: "Pamsi Bamsi", number: 987654321, id: 3 },
    { name: "Puszkinson Crusoe", number: 321321321, id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [searchPerson, setSearchPerson] = useState("");

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
        id: persons.length + 1,
      };
      setPersons(persons.concat(personObject));
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
