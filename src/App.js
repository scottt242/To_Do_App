import './App.css';
import Card from './components/Card';
import { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState(["task1","task2","task3"]);
  const [toggle,setToggle]=useState(false)
  function del(i){
setTasks(tasks.filter((_,ind)=> ind!==i))
  }
  const [show,setShow]=useState(false)
  const [filter,setFilter]=useState("")
  function filteration(){
    return tasks.filter((e)=>e.includes(filter))
  }
  console.log(filteration())
  return (

    <div className="container">
    {toggle &&
    <div className='back'>
      <input type='text' placeholder='write anything' ></input>
      <button onClick={()=>{
        if(document.querySelector('input').value){
        setTasks([...tasks,document.querySelector('input').value])
        document.querySelector('input').value=''
        }
        setToggle(!toggle)
      }}>add</button>
    </div>
    }
     <h1 className="title">To-Do List</h1>
     <div className='options'>
     <div className='add' onClick={()=>setToggle(!toggle)}>+</div>
     <input type='text' placeholder='search' className='search' onChange={(e)=>{
      setFilter(e.target.value)
     }}></input>
     <div className='hide' onClick={()=> setShow(!show)}>-</div>
     </div>

      <Card tasks={filteration()} del={del} show={show}/>

  </div>
  )
}


export default App;