
import './QRGen.css'
import {useState, useEffect} from 'react';

export default function QRGen(){

    let [text, setText] = useState('');
    let [searchInput, setSearchInput] = useState('');
    let [qRColor, setQRColor] = useState('000000');
    let [qRSize, setQRSize] = useState('000000');
    let [qRCode, setQRCode] = useState(null);

    const getInput = () => {
        setSearchInput(text)
    }


    useEffect((
    ) => {
        setQRCode(`http://api.qrserver.com/v1/create-qr-code/?data=${searchInput}!&size=${qRSize}x${qRSize}&color=${qRColor}`);
    },[searchInput, qRColor, qRSize])

    return (
        <>
        <div className='container'>
            <h1>QR Code Generator</h1>
            <div className='search-section'>
            <input className='searchbar' onChange={(e) => setText(e.target.value)} placeholder='Add text to generate QR' />
            <button onClick={getInput} >Generate</button>
            </div>
            
            <div className='toolkit'>
            Background Color: <input type='color' onChange={(e) => setQRColor(e.target.value.substring(1))} />
            Dimension: <input type='range' min="200" max="600" value={qRSize} onChange={(e) => setQRSize(e.target.value)} />
            </div>

            <div className='output-section'>
                <img src={qRCode} alt={searchInput} />
                <a href={qRCode} download="QR Code">
                    <button type='button'>Download</button>
                </a>
            </div>
        </div>
        </>
    )


}

