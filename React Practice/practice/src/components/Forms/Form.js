
import './Form.css'
import {useState} from 'react';
import { IoMdCut } from "react-icons/io";
import { Tooltip } from 'react-tooltip'

export default function Form(){

    const [input, setInput] = useState('');
    let outputField = document.getElementById('outputTabs');

    let onTrim = () => {
        let newInputField = document.createElement('p');
        newInputField.innerHTML = input;
        outputField.appendChild(newInputField);
    }

    return(
        <>
        <div className="formBody">
            <h1 className='formHead'>Form Capture</h1>
            <div className='formInputField'>
            <input onChange={(e) => { setInput(e.target.value)}} />
            
            <Tooltip id="my-tooltip" 
            place="right"
            variant="info"/>

            <button 
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Save text"
            onClick={onTrim}
            >
            <IoMdCut />
            </button>

            </div>
            <h2>Live typing</h2>
            <p id='liveText'>{input}</p>
            </div>

            <div id='outputTabs'>

            </div>


        </>
    )
}