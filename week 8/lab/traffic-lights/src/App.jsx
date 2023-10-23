import { useState } from 'react'
import TrafficLight from './TrafficLight';
import './App.css'

function App() {
  const [status, setStatus] = useState('stop');

  const advanceStatus = () => {
    if (status === 'stop') {
      setStatus('caution');
    } else if (status === 'caution') {
      setStatus('go');
    } else {
      setStatus('stop');
    }
  }

  return (
    <>
      <div className="mb-20">
        <TrafficLight color="red" on={status === 'stop'} />
        <TrafficLight color="amber" on={status === 'caution'} />
        <TrafficLight color="green" on={status === 'go'} />
      </div>
      <button onClick={() => { advanceStatus() }}>Advance</button>
    </>
  )
}

export default App
