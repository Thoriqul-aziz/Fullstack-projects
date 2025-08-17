const Filter = ({ handle, value }) => (
  <div>
    filter shown with{" "}
    <input placeholder="search" onChange={handle} value={value} />
  </div>
);
const Person = ({ name, number, toggleDelete }) => (
  <p>
    {name} {number}  <button onClick={toggleDelete}>delete</button>
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
const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  return (
    <div className='message'>
      {message}
    </div>
  )
}
const NotificationErr = ({ error }) => {
  if (error === null) {
    return null
  }
  return (
    <div className='error'>
      {error}
    </div>
  )
}

export default {Filter,Person,PersonForm,Notification,NotificationErr}