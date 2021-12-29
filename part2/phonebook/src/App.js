import React, { useState } from 'react';
import Filter from "./components/Filter";
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "999-778866", id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchPerson, setNewSearch] = useState('');
  const [personsFilter, setPersonsFilter] = useState(persons);

  const filterPersons = (e) => {
    const searchPerson = e.target.value;
    setNewSearch(searchPerson);
    const newPersons = persons.filter(
      (person) => person.name.toLowerCase().search(searchPerson.toLowerCase()) !== -1
    );
    setPersonsFilter(newPersons);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    setNewName("");
    setNewNumber("");

    const alreadyExists = persons.some((person) => person.name === newName);
    // some() tests if at least on element passes the test. if true finds element & true
    if (alreadyExists) {
      alert(`${newName} is already added to phonebook`)
      return;
    }
    const newPersons = persons.concat({ name: newName, number: newNumber });
    setPersons(newPersons);
    setPersonsFilter(newPersons);
  };

  const formData = {
    onFormSubmit,
    newName,
    setNewName,
    newNumber,
    setNewNumber,
  }

  return (
    <div>
    <h2>Phonebook</h2>
    {/* <p>
      filter shown  with
      <input value={searchPerson} onChange={filterPersons}/>
    </p>
    <h2>Add a New</h2>

    <form onSubmit={onFormSubmit}>
      <div>
        name:{" "}
        <input 
          value={newName} 
          onChange={(e) => setNewName(e.target.value)}
          autofocus 
        />
      </div>
      <div>
        number: {" "}
        <input
           value={newNumber}
           onChange={(e) => setNewNumber(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    <h2>Numbers</h2>
    {personsFilter.map((person) => (
        <><p key={person.name}>
        {person.name} <span>{person.number}</span>
      </p></>
      ))} */}
      <Filter value={searchPerson} onChange={filterPersons} />
      <h3>Add a new</h3>
      <PersonForm data={formData} />
      <h3>Numbers</h3>
      <Persons personsFilter={personsFilter} />
  </div>
  );  
};

export default App
