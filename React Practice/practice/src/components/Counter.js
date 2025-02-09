
import {useState} from 'react';
import './Counter.css'
import { GrPowerReset } from "react-icons/gr";

export default function Counter(){

    const [count, setCount] = useState(0);

    function IncrementCount(){
        setCount(count + 1);
    }

    function DecrementCount(){
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0)
    }


    return <>
    <div className="counterBody">
    <h1 className='counterHead'>Counter: {count}</h1>
    <div className='counterButtons'>
    <button onClick={IncrementCount}>+ Increment</button>
    <button onClick={DecrementCount}>- Decrement</button>
    <button onClick={reset}><GrPowerReset /></button>
    </div>
    </div>
    </>
}