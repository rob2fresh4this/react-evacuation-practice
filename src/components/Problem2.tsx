import React, { useState } from 'react'

const Problem2 = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='flex flex-col gap-4'>
            <div>Problem2</div>
            <div className=''>{count}</div>
            <div className='flex gap-4'>
                
                <button onClick={() => setCount(count + 1)} className='bg-blue-500 text-white px-4 py-2 rounded'>
                    Increment
                </button>
                <button onClick={() => setCount(count - 1)} className='bg-red-500 text-white px-4 py-2 rounded'>
                    Decrement
                </button>
                <button onClick={() => setCount(0)} className='bg-gray-500 text-white px-4 py-2 rounded'>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Problem2