import React, { useEffect } from 'react'

const Problem7 = () => {
  // Cleanup Effect: Create a timer that stops when the component unmounts.

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Timer is running');
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log('Timer has stopped');
    }
  }, []);
  return (
    <div className='flex flex-col gap-4'>
      <div>Problem7</div>
      <div className=''>Check the console for the timer messages.</div>
    </div>
  )
}

export default Problem7