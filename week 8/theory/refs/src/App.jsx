import { useRef, useEffect } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);

  const handleFocusClick = () => {
    inputRef.current.focus();
  };

  const handleBlurClick = () => {
    inputRef.current.blur();
  };

  return (
    <>
      <div className="mb-12">
        <input ref={inputRef} />
      </div>
      <div>
        <button className="mr-12" onClick={handleFocusClick}>Focus the input</button>
        <button onClick={handleBlurClick}>Blur the input</button>
      </div>
    </>
  )
}

export default App
