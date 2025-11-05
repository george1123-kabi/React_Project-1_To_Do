import { useState } from 'react'
import './App.css'
import ToDoForm from './ToDoForm'
import { TodoList } from './ToDoList'

function App() {
  
  const[todos,setTodos]=useState([])

  function addTodos(title){
    setTodos(currentTodos=>{
      return[
      ...currentTodos,{id:crypto.randomUUID(),title,completed:false},]
    })
  }
  function toggleTodo(id,completed){
    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id===id){
          return{...todo,completed}
        }
      return todo
      }
      )
    })
  }
  function removeTodo(id){
     setTodos(currentTodos=>{
      return currentTodos.filter(todo=>todo.id !==id)
    })
  }



  return (
    
    <>

      <ToDoForm onSubmit={addTodos}/>
      <ul>
        <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
      </ul>
      <footer className='footer'>
        <h6>Copyrights &copy; -George,2025</h6>
      </footer>
    </>
  )
}

export default App
