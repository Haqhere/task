 import {createSlice} from '@reduxjs/toolkit'


 const initialState = {
    todos:[]
 }

 const TodoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        Add:(state,action) => {state.todos.push({id:Date.now(),Task:action.payload.task, desc:action.payload.desc })},

        Delete:(state,action) =>{
            return state.todos.filter(todo => todo.id !== action.payload)
        }
    }
 })

   export const {Add,Delete} = TodoSlice.actions;

   export default TodoSlice.reducer;