import { useEffect, useRef, useState } from 'react'
import TrafficLight from './TrafficLight';
import './App.css'

function App() {
  const [status, setStatus] = useState('stop');
  const [run, setRun] = useState(false);
  const timerRef = useRef(null);

  const advanceStatus = () => {
    if (status === 'stop') {
      setStatus('caution');
    } else if (status === 'caution') {
      setStatus('go');
    } else {
      setStatus('stop');
    }
  }

  // Closure issue
  // const start = () => {
  //   setInterval(() => {
  //     console.log(status);
  //     advanceStatus();
  //   }, 2000);
  // };

  useEffect(() => {
    if (run) {
      timerRef.current = setTimeout(() => {
        advanceStatus();
      }, 2000);
    } else {
      console.log('cleanup timer');
      clearTimeout(timerRef.current);
    }

    return () => {
      // cleanup
      console.log('cleanup');
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [run, status]);

  return (
    <>
      <div className="mb-20">
        <TrafficLight color="red" on={status === 'stop'} />
        <TrafficLight color="amber" on={status === 'caution'} />
        <TrafficLight color="green" on={status === 'go'} />
      </div>
      <button onClick={() => { advanceStatus() }}>Advance</button>
      <button onClick={() => setRun(!run) }>{run ? 'Stop' : 'Auto'}</button>
    </>
  )
}

export default App
