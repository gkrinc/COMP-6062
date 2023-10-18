const ToDo = ({id, done, note, changed}) => {
  console.log(`ToDo ${id} rendered`);
  return (
    <div className="todo">
      <input type="checkbox" checked={done} id={id} onChange={() => changed(id)} />
      <label htmlFor={id}>{note}</label>
    </div>
  );
};

export default ToDo;