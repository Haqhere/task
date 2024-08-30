import React, { useState } from 'react'

import {useDispatch} from 'react-redux'

import {use}

import { Add,Delete } from './slice';


const Add = () => {

    const[task,setTask] = useState('');

    const[desc,setDesc] = useState('');

    const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch(Add([...to]))
    }

  return (
    <div>

<input 
type="text"
value={task}
onChange={(e) => setTask(e.target.value)}
placeholder='task...'
/>

<button onClick={handleAdd}>Add</button>

    </div>
  )
}

export default Add