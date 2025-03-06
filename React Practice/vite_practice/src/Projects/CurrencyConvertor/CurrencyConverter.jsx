
import { useState } from 'react'
import InputBox from '../../components/InputBox';
import useCurrencyInfo from '../../hooks/useCurrencyInfo';

export default function CurrencyConverter () {

    let [amount, setAmount] = useState('');
    let [from, setForm] = useState('usd');
    let [to, setTo] = useState('inr');
    let [convertedAmt, setConvertedAmt] = useState('');

    let currencyInfo = useCurrencyInfo(from);

    let options = Object.keys(currencyInfo)

    const convert = () => {
        setConvertedAmt(amount * currencyInfo[to])
    }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/29611783/pexels-photo-29611783/free-photo-of-candlestick-chart-displaying-market-trends.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                        label="From"
                        amount={amount}
                        onAmountChange={(amount) => setAmount(amount)}
                        onCurrencyChange={(currency) => setForm(currency)}
                        currencyOption={options}  
                        selectCurrency={from}                
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"

                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmt}
                            onAmountChange={(amount) => setConvertedAmt(amount)}
                            onCurrencyChange={(currency) => setTo(currency)}
                            currencyOption={options}  
                            selectCurrency={to} 

                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert USD to INR
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}
