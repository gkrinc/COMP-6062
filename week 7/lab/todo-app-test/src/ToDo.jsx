const ToDo = (props) => {
  return (
    <div className="todo">
      <input type="checkbox" checked={props.done} id={props.id} />
      <label htmlFor={props.id}>{props.note}</label>
    </div>
  );
};

export default ToDo;