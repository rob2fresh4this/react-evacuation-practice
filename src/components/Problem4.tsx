import React, { useState } from 'react'

const Problem4 = () => {
    // Theme Switcher: Add a button that switches the background color between light and dark.
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`flex flex-col gap-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} p-4`}>
            <div>Problem4</div>
            <button onClick={toggleTheme} className='bg-blue-500 text-white px-4 py-2 rounded'>
                {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
        </div>
    )
}

export default Problem4