import { useState } from 'react';
import ToDo from './ToDo';
import './App.css';

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function App() {
  const [todoNote, setTodoNote] = useState('');
  const [todos, setTodos] = useState([{
    done: false,
    note: 'ToDo 1',
    id: `todo-${randomInt(1000, 9999)}`,
  },{
    done: false,
    note: 'ToDo 2',
    id: `todo-${randomInt(1000, 9999)}`,
  }]);

  const todoCheckedChange = (todoId) => {
    const updatedTodos = [];
    todos.forEach((todo) => {
      if (todo.id === todoId) {
        updatedTodos.push({
          ...todo,
          done: !todo.done,
        })
      } else {
        updatedTodos.push(todo);
      }
    });

    
    setTodos(updatedTodos);
  };

  const addTodo = () => {
    const newTodo = {
      done: false,
      note: todoNote,
      id: `todo-${randomInt(1000, 9999)}`,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodoNote('');
  };

  return (
    <>
      <header>
        <h1>TODO App</h1>
      </header>
      <section>
        {todos.every((todo) => todo.done) && (
          <div className="done">
            <span className="celebrate">🎉</span>
            <span className="message">All done</span>
            <span className="celebrate">🎉</span>
          </div>
        )}
        <div>
          <input
            type="text"
            placeholder="New todo note"
            onChange={(event) => {
              setTodoNote(event.target.value);
            }}
            onKeyUp={(event) => {
              if (event.key.toLowerCase() === 'enter') {
                addTodo();
              }
            }}
            value={todoNote}
          />
          <button onClick={() => {
            addTodo();
          }}>Add</button>
        </div>
        {todos.map((todo) => (
          <ToDo
            done={todo.done}
            note={todo.note}
            id={todo.id}
            key={todo.id}
            changed={() => {
              todoCheckedChange(todo.id);
            }}
          />
        ))}
      </section>
    </>
  )
}

export default App
