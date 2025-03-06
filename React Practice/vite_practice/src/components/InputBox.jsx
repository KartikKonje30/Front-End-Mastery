import React, { useId } from 'react'

function InputBox(
    {
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    }
) {

    let amountId = useId();

  return (
        <div className={`bg-white  p-3 rounded-lg text-sm flex`}>
            <div className="w-1/2">
                <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountId}
                    value={amount}
                    className="outline-none text-black rounded-lg bg-gray-100 w-full py-1.5 p-2"
                    type="number"
                    placeholder="Amount"
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 text-black bg-gray-100 cursor-pointer outline-none"
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    
                        {  currencyOption.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))
                        }
                
                </select>
            </div>
        </div>
    );

}

export default InputBox