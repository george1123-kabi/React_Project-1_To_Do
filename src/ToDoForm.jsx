import { useState } from "react"
import "./App.css"
export default function ToDoForm({onSubmit}){
    const[item,setNewItem]=useState("")

    function onHandle(e){
    e.preventDefault()
    if (item ==="") return
    onSubmit(item)
    setNewItem("")
  }
    return(
        <>
        <h1>TO-DO List</h1>
        <form onSubmit={onHandle} className="hero">
        <div id="addlist">
        <input value={item} onChange={e=>setNewItem(e.target.value)} type='text' placeholder='Make a hobby'/>
        </div>
        <div>
        <button id="btn">ADD</button>
        </div>
      </form>
      </>
    )
}