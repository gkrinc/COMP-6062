import { useEffect, useRef, useState } from 'react';
import Indicator from './Indicator';
import './App.css';

const indicatorLevels = [
  {
    id: 'danger-low',
    status: 'danger',
    label: 'Danger - Low!',
    min: 0,
    max: 10,
  },{
    id: 'warn-low',
    status: 'warn',
    label: 'Warning - Low',
    min: 11,
    max: 30,
  },{
    id: 'safe',
    status: 'safe',
    label: 'Safe',
    min: 31,
    max: 70,
  },{
    id: 'warn-high',
    status: 'warn',
    label: 'Warning - High',
    min: 71,
    max: 90,
  },{
    id: 'danger-high',
    status: 'danger',
    label: 'Danger - High',
    min: 91,
    max: 100,
  }
];

function App() {
  const [pressure, setPressure] = useState(null);
  const dangerPressureTimer = useRef(null);

  useEffect(() => {
    if (pressure == null) return;

    const dangerLow = indicatorLevels[0];
    const dangerHigh = indicatorLevels[indicatorLevels.length - 1];

    if (pressure <= dangerLow.max) {
      dangerPressureTimer.current = setTimeout(() => alert('DANGER!!! Low pressure'), 3000);
    } else if (pressure >= dangerHigh.min) {
      dangerPressureTimer.current = setTimeout(() => alert('DANGER!!! High pressure'), 3000);
    } else {
      if (dangerPressureTimer.current) {
        clearTimeout(dangerPressureTimer.current);
      }
    }

    return () => {
      clearTimeout(dangerPressureTimer.current);
    };
  }, [pressure]);

  useEffect(() => {
    setTimeout(() => {
      setPressure(50);
    }, 1000);
  }, []);

  return (
    <>
      <header>
        <h1>Student Name</h1>
      </header>
      <div>
        {pressure != null && (
          <input
            type="range"
            min={0}
            max={100}
            value={pressure}
            onInput={(event) => {
              setPressure(Number(event.target.value));
            }}
          />
        )}
        <div className="row">Pressure: {pressure ?? 'n/a'}</div>
      </div>
      <div>
        {indicatorLevels.map((level) => (
          <Indicator
            key={level.id}
            status={level.status}
            label={level.label}
            active={pressure != null && pressure >= level.min && pressure <= level.max}
          />
        ))}
      </div>
    </>
  )
}

export default App
