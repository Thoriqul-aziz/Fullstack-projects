import { useState, useEffect } from "react";
import "./index.css";
import PhoneComp from "./component/Phone";
import PhoneService from "./services/service";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    PhoneService.getAll().then((initialPerson) => {
      setPersons(initialPerson);
    });
  }, []);
  const addPersons = async (event) => {
    event.preventDefault();
    const existName = persons.find((person) => person.name === newName);
    const changedNumber = { ...existName, number: newNumber };
    const add = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    };
    if (existName) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        try {
          await PhoneService.update(existName.id, changedNumber).then((res) => {
            setPersons(persons.map((d) => (d.id === existName.id ? res : d)));
            setNewName("");
            setNewNumber("");
          });
        } catch (error){
          setErrorMessage(`information of ${newName} has been deleted from server`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 4000)
          setPersons(persons.filter((d) => (d.id !== existName.id)))
        }
      }
    } else {
      PhoneService.create(add).then((returned) => {
        setMessage(`${newName} successfully added to phonebook`);
        setTimeout(() => {
          setMessage(null);
        }, 4000);
        setPersons(persons.concat(returned));
        setNewName("");
        setNewNumber("");
      })
    }
  };
  const toggleDelete = async (id, name) => {
    const upd = persons.splice((a) => a === id, 1);
    const del = { ...upd };

    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      await PhoneService.remove(id, del)
        .then((response) => {
          setPersons(persons.filter((n) => n.id !== id));
          setErrorMessage(`${name} has been removed from server`);
          setTimeout(() => {
            setErrorMessage(null)
          }, 4000)
        })
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
      <PhoneComp.Notification message={message}/>
      <PhoneComp.NotificationErr error={errorMessage}/>
      <PhoneComp.Filter handle={handleSearch} value={search} />
      <h3>Add a new</h3>
      <PhoneComp.PersonForm
        add={addPersons}
        name={newName}
        number={newNumber}
        handleName={handleNewPersons}
        handleNumber={handleNewNumber}
      />
      <h3>Numbers</h3>
      {find.map((person) => (
        <PhoneComp.Person
          key={person.id}
          name={person.name}
          number={person.number}
          toggleDelete={() => toggleDelete(person.id, person.name)}
        />
      ))}
    </div>
  );
};

export default App;
