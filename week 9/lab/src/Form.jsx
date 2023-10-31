import { useEffect, useRef, useState } from 'react';

const Form = ({onSubmit}) => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form action="" method="POST">
      <input
        type="text"
        ref={inputRef}
        placeholder="Name"
        value={value}
        onChange={(event) => setValue(event.target.value)} />
      <button onClick={() => onSubmit(value)} type="button">Save</button>
    </form>
  );
};

export default Form;
