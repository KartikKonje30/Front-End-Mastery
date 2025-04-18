import React, { useState } from 'react';
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from './store';


const Todo = () => {

    const [task, setTask] = useState('');

    const tasks = useSelector((state) => state.task);
    const dispatch = useDispatch();


    const handleSubmitTask = (e) => {
        e.preventDefault();
        if(task === ''){
            window.alert('Enter Valid Task!')
            return setTask('');
        }
        dispatch(addTask(task))
        return setTask('');
    }

    const handleDeleteTask = (i) => {
        return  dispatch(deleteTask(i))
    }


  return (
    <div>
        <div className='todo-card'>

        <div className="title">

            <div className=''>
            <h1 className='font-Epilogue'>TO-DO</h1>
            <h2 className='font-Epilogue'>Keep it up!</h2>
            </div>

            <div className='tasks-display'>
            <p className='font-Epilogue tasks-count'>0/{tasks.length}</p>
            </div>

        </div>

        <form className="input-section" onSubmit={handleSubmitTask}>
        <input type="text"  placeholder="Enter your Task" className="font-Epilogue input-box" value={task} onChange={(e) => setTask(e.target.value) } />
        <button className='input-button'>+</button>
        </form>

        <div className=''>
        <ul className="font-Epilogue">
            {
                tasks.map((currTask, index) => {
                return <li className='font-Epilogue' key={index}>
                <div className='task-input'>
                <label className='input-checkbox' htmlFor=''/>
                {currTask}
                </div>
                <div className='task-input'>
                <FaEdit size={24} color='#848DFF' /> 
                <FaTrashAlt size={24} color='#f33f3f' onClick={() => handleDeleteTask(index)}/> 
                </div>
                </li>

                })
            }
            {/* <li className='font-Epilogue'>
                <div className='task-input'>
                <label className='input-checkbox' htmlFor=''/>
                Hii 
                </div>
                <div className='task-input'>
                <FaEdit size={24} color='#848DFF' /> 
                <FaTrashAlt size={24} color='#f33f3f' /> 
                </div>
            </li> */}
        </ul>
        </div>
        
        </div>
    </div>
  )
}

export default Todo