import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  useEffect(() => {
    axios.get('/api/volume')
      .then((response) => {
        console.log({response});
      });

    console.log('Execution continuing...');
  }, []);

  return (
    <>
      
    </>
  )
}

export default App;
