import React, { useEffect, useState } from 'react'

const Problem5 = () => {
  // Auto Increment: Create a counter that automatically increments by 1 every second.
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className='flex flex-col gap-4'>
        <div>Problem5</div>
        <div className=''>{timer}</div>
        <div className='flex gap-4'>
          <button onClick={() => setTimer(0)} className='bg-gray-500 text-white px-4 py-2 rounded'>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Problem5