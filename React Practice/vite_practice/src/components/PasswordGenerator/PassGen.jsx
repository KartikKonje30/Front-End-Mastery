import { useCallback, useEffect, useState, useRef } from "react"

export default function PassGen(){

    let [password, setPassword] = useState('');
    let [length, setLength] = useState(8);
    let [addNumber, setAddNumber] = useState(false);
    let [addSpecial, setAddSpecial] = useState(false);

    let passwordRef = useRef(null);

    let copyTextToClipboard = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
    },[password])

    let generatePassword = useCallback(() => {

        let pass="";
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let numbers ="0123456789";
        let special = "!@#$%^&*";

        if(addNumber) str += numbers;

        if(addSpecial) str += special;

        for(let i=1; i<=length; i++){
            let randomNumber = Math.floor(Math.random() * str.length + 1);

            pass += str.charAt(randomNumber);
        }

        setPassword(pass);
    }
    ,[length, addNumber, addSpecial, setPassword ])

    useEffect(() => {
        generatePassword();
    }, [length, addNumber, addSpecial, generatePassword])


    return (
        <>
        <div className="w-full h-screen flex flex-wrap justify-center items-center">
        <div className="w-1/2 rounded-lg p-4 flex flex-wrap justify-center items-center gap-6 bg-blue-950">

        <h1 className="text-3xl mt-6">Password Generator</h1>

        <div className="flex flex-wrap justify-center items-center">
            <input ref={passwordRef} className="bg-white w-lg h-10 text-black outline-none rounded-xl rounded-r-none p-4 text-xl " type="text" placeholder="Password" value={password} readOnly />
            <button onClick={() => copyTextToClipboard()} className="cursor-pointer flex justify-center items-center bg-blue-600 rounded-l-none h-10 text-white rounded-xl p-4 text-xl">copy</button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 mb-6">

            <div className="flex justify-center items-center gap-4">
            <input type="range" min={6} max={32} value={length} onChange={(e) => setLength(e.target.value)} />
            <label className="text-lg">Length({length})</label>
            </div>

            <div className="flex justify-center items-center gap-2">
            <input className="size-4" type="checkbox" value={addNumber} onClick={() => setAddNumber((prev) => !prev)} />
            <label className="text-lg">Numbers</label>
            </div>

            <div className="flex justify-center items-center gap-2">
            <input className="size-4" type="checkbox" value={addSpecial} onClick={() => setAddSpecial((prev) => !prev)} />
            <label className="text-lg">Special Characters</label>
            </div>

        </div>

        </div>


        </div>
        </>
    )
}