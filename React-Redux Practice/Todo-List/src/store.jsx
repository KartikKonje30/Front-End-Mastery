/* eslint-disable no-case-declarations */

import { createStore } from 'redux';

const ADD_TASK = 'task/add';
const DELETE_TASK = 'task/delete';

const initialState = {
    task: [],
}

const taskReducer = (state = initialState, action) => {
    
    switch(action.type){

        case ADD_TASK: 
        return {
            ...state,
            task:[...state.task, action.payload]
        }

        case DELETE_TASK: 
        
        const updatedTask = state.task.filter((currentTask, index) => {
           return index !== action.payload
        })

        return{
            ...state,
            task: updatedTask,
        }

        default:
            return state;
    }
}

// Create a store using createStore in redux and pass the reducer function
// Also import it into the main/index.jsx to see the result in action
export const store = createStore(taskReducer);

// getState() used to get the current state of the store
// console.log("initial State: ", store.getState());

// dispatch task 
store.dispatch({ type: ADD_TASK, payload: "Learn Redux"});
// console.log("updated State: ", store.getState());

store.dispatch({ type: ADD_TASK, payload: "Learn Redux + Redux Toolkit"});
// console.log("updated State: ", store.getState());

store.dispatch({ type: DELETE_TASK, payload: 1});
// console.log("After Delete State: ", store.getState());

// Action Creators : Improves code readability

export function addTask(data) {
    return { type: ADD_TASK, payload: data}
}

export function deleteTask(id) {
    return { type: DELETE_TASK, payload: id}
}

store.dispatch(addTask("Learn Action creators"))
// console.log("Updated State: ", store.getState());

store.dispatch(deleteTask(1))
// console.log("After Delete State: ", store.getState());

store.dispatch(addTask('Created reducer function'));

store.dispatch(addTask('Created store and passed reducer function'));

store.dispatch(addTask('dispatched tasks into the store'));




