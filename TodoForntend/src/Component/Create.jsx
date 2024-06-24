import React, { useEffect, useState } from "react";
import "./create.css";
import axios from 'axios'

export default function Create() {

    const [task , setTask] = useState()

    const handleAdd=()=>{
        axios.post('https://localhost:3001/add' , {task:task})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    }
    // useEffect(()=>{
    //     console.log(task)
    // },[task])

    

  return (
    <>
      <div className="main">
        <input type="text" name="1" id=""  onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={()=>handleAdd()}>Add Todo</button>
      </div>
    </>
  );
}
