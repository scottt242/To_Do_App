import React from 'react'
import "./Card.css"
function Card  ({tasks,del,show}) {
  return tasks.map((e,i)=>(
    <div className={"card "+(show?"active":"")} key={i}>
    <p onClick={()=>del(i)}>{i+1}</p>
    <p>{e}</p>
    </div>
  )
  )
}


export default Card