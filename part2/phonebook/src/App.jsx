import { useState } from "react";

const Filter = ({ handle, value }) => (
  <div>
    filter shown with{" "}
    <input placeholder="search" onChange={handle} value={value} />
  </div>
);
const Person = ({ name, number }) => (
  <p>
    {name} {number}
  </p>
);
const PersonForm = ({ add, name, handleName, number, handleNumber }) => (
  <form onSubmit={add}>
    <div>
      name: <input value={name} onChange={handleName} placeholder=" New Name" />
    </div>
    <div>
      number:{" "}
      <input value={number} onChange={handleNumber} placeholder="Number" />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const addPersons = (event) => {
    event.preventDefault();
    const existName = persons.some((person) => person.name === newName);
    if (existName) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const add = {
        name: newName,
        number: newNumber,
        id: String(persons.length + 1),
      };
      setPersons(persons.concat(add));
      setNewName("");
      setPersons(persons.concat(add));
      setNewNumber("");
    }
  };

  const handleNewPersons = (event) => {
    setNewName(event.target.value);
  };
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const find = search
    ? persons.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handle={handleSearch} value={search} />
      <h3>Add a new</h3>
      <PersonForm
        add={addPersons}
        name={newName}
        number={newNumber}
        handleName={handleNewPersons}
        handleNumber={handleNewNumber}
      />
      <h3>Numbers</h3>
      {find.map((person) => (
        <Person key={person.id} name={person.name} number={person.number} />
      ))}
    </div>
  );
};

export default App;
