import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  useEffect(() => {
    axios.get('/api/volume')
      .then((response) => {
        console.log({response});
      });
  }, []);

  return (
    <>
      
    </>
  )
}

export default App;
