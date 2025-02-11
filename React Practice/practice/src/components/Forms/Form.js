
import './Form.css'
import {useState} from 'react';

export default function Form(){

    const [input, setInput] = useState('');

    return(
        <>
        <div className="formBody">
            <h1 className='formHead'>Form Capture</h1>
            <input onChange={(e) => { setInput(e.target.value)}} />
            <h2>Live typing</h2>
            <p>{input}</p>
        </div>
        </>
    )
}