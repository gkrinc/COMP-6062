import { useState } from 'react';
import Form from './Form';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState(null);

  const submitHandler = (value) => {
    setShowForm(false);
    setTimeout(() => {
      setMessage(`${value} saved!`);
    }, 1000);
  }

  return (
    <>
      <button className="mb-20" onClick={() => {
        setShowForm(!showForm);
        setMessage(null);
      }}>{showForm ? 'Hide' : 'Show'}</button>
      {message && (
        <div>{message}</div>
      )}
      {showForm && (
        <Form onSubmit={submitHandler} />
      )}
    </>
  )
}

export default App
