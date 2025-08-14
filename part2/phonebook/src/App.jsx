import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPersons = (event) => {
    event.preventDefault();
    const exist = persons.find((person) => person.name === newName);
    if (exist) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const add = {
        name: newName,
      };

      setPersons(persons.concat(add));
      setNewName("");
    }
  };
  const handleClick = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>debug: {newName}</div>
      <form onSubmit={addPersons}>
        <div>
          name: <input value={newName} onChange={handleClick} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((persons) => (
        <p key={persons.name}>{persons.name}</p>
      ))}
    </div>
  );
};

export default App;
