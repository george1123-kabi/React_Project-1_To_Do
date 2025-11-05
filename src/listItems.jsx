export function Listtems({id,completed,title,toggleTodo,removeTodo}){
    return(
        <>
        <ul className="list">
        <li id="listItem">
             <input type='checkbox' checked={completed} onChange={e=>toggleTodo(id,e.target.checked)}/>{title}
             <button id="btn" onClick={()=>removeTodo(id)}>Remove</button>
        </li>
        </ul>
        </>
    )
}