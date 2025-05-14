import React, { useState } from 'react'

const Problem1 = () => {
    // problem 1
    // Toggle Button: Create a button that toggles between "Show" and "Hide" text when clicked.
    const [isSwitch, setIsSwitch] = useState(false)

    return (
        <div className='flex flex-col gap-4'>
            <div>Problem1</div>
            <button onClick={() => setIsSwitch(!isSwitch)} className='bg-blue-500 text-white px-4 py-2 rounded'>
                {isSwitch ? 'Hide' : 'Show'}
            </button>
        </div>
    )
}

export default Problem1