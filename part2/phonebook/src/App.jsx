import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{
     name: "Arto Hellas" ,
     number: '054-564762',
     id: 1
    }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPersons = (event) => {
    event.preventDefault();
    const existName = persons.find((person) => person.name === newName);
    if (exist) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const add = {
        name: newName,
        number: newNumber,
        id: String(persons.length + 1)
      };
      setPersons(persons.concat(add));
      setNewName("");
      setPersons(persons.concat(add));
      setNewNumber("")
    }
  };
  
  const handleNewPersons = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNewNumber = (event) => {
    // console.log(event.target.value);
    setNewNumber(event.target.value);
  };


  return (
    <div>
      <h2>Phonebook</h2>
      <div>debug: {newName}</div>
      <form onSubmit={addPersons}>
        <div>
          name: <input value={newName} onChange={handleNewPersons} />
        </div>
        <div>number: <input value={newNumber} onChange={handleNewNumber}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.id}>{person.name} {person.number}</p>
      ))}
    </div>
  );
};

export default App;
