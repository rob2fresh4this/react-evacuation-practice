import React, { useEffect, useState } from 'react'

const Problem8 = () => {
  // Conditional Effect: Trigger a console log only when the counter hits 5.
  const [count, setCount] = useState(0);
  const [reachedFive, setReachedFive] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (count === 5) {
      console.log('Counter has reached 5');
      setReachedFive(true);
    }
  }
  , [count]);

  useEffect(() => {
    if (reachedFive) {
      setMessage('Counter has reached 5');
    }
  }, [reachedFive]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className='flex flex-col gap-4'>
        <div>Problem8</div>
        <div className=''>{count} and {message}</div>
        <div className='flex gap-4'>
          <button onClick={() => setCount(0)} className='bg-gray-500 text-white px-4 py-2 rounded'>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Problem8