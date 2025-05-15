import React, { useEffect } from 'react'

const Problem6 = () => {
  // Component Mount: Use useEffect to log a message when the component mounts.
  useEffect(() => {
    console.log('Component has mounted');
  }, []);

  return (
    <div className='flex flex-col gap-4'>
      <div>Problem6</div>
      <div className=''>Check the console for the mount message.</div>
    </div>
  )
}

export default Problem6