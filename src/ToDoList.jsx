import { Listtems } from "./listItems"

export function TodoList({todos,toggleTodo,removeTodo}){

    return(
        <>
        <div className="listContainer">
        {todos.length===0 && "No ToDos"}
        {todos.map(todo=>{
          return(
            
            <Listtems id={todo.id} completed={todo.completed} title={todo.title} toggleTodo={toggleTodo} removeTodo={removeTodo} key={todo.id}/>
            
          )
        })}
        </div>
        </>
    )
}