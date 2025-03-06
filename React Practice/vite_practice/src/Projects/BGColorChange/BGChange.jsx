import { RiPaintFill } from "react-icons/ri";
import {useState} from 'react';

export default function BGChange(){

    let [bgColor, setBgColor] = useState('white');
    let [textColor, setTextColor] = useState('Paint');

    return (
        <>
        <div className="w-full h-screen "
        style={{ backgroundColor: bgColor }}>

        <div className='bg-white text-black w-20 h-auto absolute rounded-md ml-6 mt-8 border-slate-400 border-2 drop-shadow-md flex flex-wrap flex-col justify-self-start items-center gap-4 p-4'>
        <RiPaintFill size="2rem"className="" onClick={() => { setBgColor('white'); setTextColor('Paint')} } />
        <div className='bg-white w-12 h-12 rounded-md cursor-pointer border ' onClick={() => {setBgColor('white'); setTextColor('White')} }></div>
        <div className='bg-[#242424] w-12 h-12 rounded-md cursor-pointer border' onClick={() => {setBgColor('#242424'); setTextColor('Black')}}></div>
        <div className='bg-red-500 w-12 h-12 rounded-md cursor-pointer border' onClick={() => {setBgColor('#fb2c36'); setTextColor('Red')}}></div>
        <div className='bg-orange-500 w-12 h-12 rounded-md cursor-pointer border' onClick={() => {setBgColor('var(--color-orange-500)'); setTextColor('Orange')}}></div>
        <div className='bg-yellow-500 w-12 h-12 rounded-md cursor-pointer border' onClick={() => {setBgColor('var(--color-yellow-500)'); setTextColor('Yellow')}}></div>
        <div className='bg-green-500 w-12 h-12 rounded-md cursor-pointer border' onClick={() => {setBgColor('var(--color-green-500)'); setTextColor('Green')}}></div>
        <div className='bg-blue-500 w-12 h-12 rounded-md cursor-pointer border' onClick={() => {setBgColor('var(--color-blue-500)'); setTextColor('Blue')}}></div>
        <div className='bg-violet-500 w-12 h-12 rounded-md cursor-pointer border' onClick={() => {setBgColor('var(--color-violet-500)'); setTextColor('Violet')}}></div>
        
        </div>

        { bgColor === 'white' ?
        <h1 className="text-[100px] text-black w-full h-full flex flex-wrap justify-center items-center" >{textColor}</h1>
        :
        <h1 className="text-[100px] text-white w-full h-full flex flex-wrap justify-center items-center" >{textColor}</h1>
        }

        </div>
        </>
    )
}