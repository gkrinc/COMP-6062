import { useState } from 'react'
import ToDo from './ToDo'
import './App.css'

function App() {

  const todos = [{
    done: false,
    note: 'ToDo 1',
  },{
    done: true,
    note: 'ToDo 2',
  }];

  return (
    <>
      <header>
        <h1>TODO App</h1>
      </header>
      <section>
        {todos.map((todo, idx) => (
          <ToDo
            done={todo.done}
            note={todo.note}
            id={`todo-${idx}`}
            key={`todo-${idx}`}
          />
        ))}
      </section>
    </>
  )
}

export default App
