
import './ToDoList.css';
import { LuListTodo } from "react-icons/lu";
import TaskItem from './TaskItem';
import {useRef, useState, useEffect} from 'react';

export default function ToDoList(){

    let [todoList, setToDoList] = useState([])

    const inputRef = useRef();

    const add = () => {
    
        let inputText = inputRef.current.value.trim();

        if(inputText === ""){
            return null;
        }

        let newTaskNode = {
            id: Date.now(),
            text: inputText,
            isComplete: false
        }

        setToDoList((prev) => [...prev, newTaskNode])
        inputRef.current.value = ""

    }

    const deleteToDoListItem = (id) => {
        setToDoList((prev) => {
            return prev.filter((todo) => todo.id !== id)
        })
    }

    const toggleItem = (id) => {
            setToDoList((prev) => {
                return prev.map((todo) => {
                    if(todo.id === id){
                        return {...todo, isComplete: !todo.isComplete}
                    }
                    return todo
            })
            })

    }

    useEffect(() => {},[todoList])

    return (
        <>
        <div className='container'>
        <div className="todoListUi">
        
        <header className='heading'>
        <LuListTodo size="30"/>
        <h1>To-Do List</h1>
        </header>
       
        <div className='search'>
        <input ref={inputRef} placeholder='Add your task'></input>
        <button onClick={add} className='addButton'>ADD +</button>
        </div>

        <div className='taskList'>
        {
            todoList.map((item, index) => {
                return <TaskItem key={index} text={item.text} id={item.id} 
                isComplete={item.isComplete} deleteItem={deleteToDoListItem} toggle={toggleItem} />
            })
        }
        </div>
       
        </div>
        </div>
        </>
    )
}