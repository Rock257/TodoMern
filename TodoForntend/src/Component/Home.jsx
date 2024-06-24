import React from 'react'
import Create from './Create'
import { useState } from 'react'
import './home.css'

export default function Home() {

    const [todos ,setTodos] = useState([])

  return (
    <div className='home'>
        <h1>My To'Dos App</h1>
        <Create/>
        {
            todos.length === 0 ?
            <div className="" id='norecord'>
                <h1>No Record here</h1>
            </div> :
            todos.map((todoitem)=>{
                <div className="" id='showtodo'>
                    {todoitem}
                </div>
            })
        }
        
    </div>
  )
}
