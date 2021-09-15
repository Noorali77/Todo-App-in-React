import React,{useState} from 'react';
import './App.css';

function App(){
const [value,setValue] = useState('');
const [todos,setTodos] = useState([])


let allowChange = (event)=>{
 setValue(event.target.value)
}

let addTodo = ()=>{
let arr = [...todos];
arr.push(value);
setTodos(arr)
setValue('')
}

let deleteTodos = ()=>{
  setTodos([])
}

const deleteTodo = (index)=>{
 let arr  = [...todos]
 arr.splice(index,1)
 setTodos(arr)
}

let editTodo = (index)=>{
  let arr = [...todos]
  let update = prompt('Enter');
  arr[index] = update;
  setTodos(arr)
}

  return(

    <>
    <div className="row">
    <div className="col-md-12">
        <div className="main-todo-input-wrap">

            <div className="main-todo-input fl-wrap">
                <div className="main-todo-input-item"> <input type="text" value={value} onChange={allowChange} id="todo-list-item" placeholder="TODO?"/>
                </div> 
               
                <button className="add-items main-search-button mx-5 mt-4" onClick={addTodo}>ADD</button>
                <button className="add-items main-search-button mx-sm-5" onClick={deleteTodos}>DELETE ALL</button>


            
                         
                 
            </div>
        </div>
    </div>
</div>
<div className="row">
    <div className="col-md-12">
        <div className="main-todo-input-wrap">
            <div className="main-todo-input fl-wrap todo-listing">
                <ul id="list-items">
                  {todos.map((value,index)=>{
                  return  <li key={index} className='my-3'> {value} <button onClick={()=>deleteTodo(index)} className='add-items main-search-button mx-3'>DELETE</button>
                     <button onClick={()=>editTodo(index)} className='add-items main-search-button mx-3'>EDIT</button>
                   </li>
                  })}
                </ul>
            </div>
        </div>
    </div>
</div>
</>
  )}

export default App;