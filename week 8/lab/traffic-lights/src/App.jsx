import { useState } from 'react'
import { useInterval } from './hooks';
import TrafficLight from './TrafficLight';
import './App.css'

function App() {
  const [status, setStatus] = useState('stop');
  const [delay, setDelay] = useState();

  const advanceStatus = () => {
    if (status === 'stop') {
      setStatus('caution');
    } else if (status === 'caution') {
      setStatus('go');
    } else {
      setStatus('stop');
    }
  }

  const toggleAutoAdvance = () => {
    if (delay) {
      setDelay(null);
      return;
    }
    setDelay(2000);
  };

  useInterval(() => {
    advanceStatus();
  }, delay);

  return (
    <>
      <div className="mb-20">
        <TrafficLight color="red" on={status === 'stop'} />
        <TrafficLight color="amber" on={status === 'caution'} />
        <TrafficLight color="green" on={status === 'go'} />
      </div>
      <button onClick={() => { advanceStatus() }}>Advance</button>
      <button onClick={() => toggleAutoAdvance() }>{delay ? 'Stop' : 'Auto'}</button>
    </>
  )
}

export default App
