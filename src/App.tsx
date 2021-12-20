import React, { useState } from 'react'
import './App.css';

import { useDispatch } from 'react-redux'
import { addTodo } from './store/todo/actions'

import TodoTable from './components/TodoTable'

function App() {
  const [todoMessage, setTodoMessage] = useState("")
  const dispatch = useDispatch()

  const handlerButtonClick = () => {
    const todo = { todo: todoMessage, isCheck: false }
    dispatch(addTodo(todo))
    setTodoMessage("")
  }

  const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoMessage(event.target.value)
  }
  return (
    <div className="container">
      <h1>Todo</h1>
      <input type="text" onChange={handlerOnChange} value={todoMessage}/>
      <button onClick={handlerButtonClick}>add</button>
      <TodoTable/>
    </div>
  );
}

export default App;
