"use client"

import React, { useState } from 'react'

const Problem3 = () => {
    // Character Limit: Make an input that counts the number of characters as you type.
    const [inputVal, setInputVal] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputVal(e.target.value);
    };

    return (
        <div className='flex flex-col gap-4'>
            <div>Problem3</div>
            <div>
                {inputVal} and this many Characters: {inputVal.length}
            </div>
            <div>
                <input
                    type="text"
                    placeholder='input box...'
                    value={inputVal}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default Problem3