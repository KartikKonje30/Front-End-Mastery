
import {useState, useEffect} from 'react';

const useCurrencyInfo = (currency) => {

    let [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((data) => setData(data[currency]))
        console.log(data);
    }, [setData]);
    
    return data;
}

export default useCurrencyInfo;