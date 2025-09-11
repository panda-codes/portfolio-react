import { Moon, Sun } from 'lucide-react';
import React, { useState } from 'react'

const ThemeToggle = () => {

    const[isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme=()=>{
        setIsDarkMode(!isDarkMode);
    }

  return (
    <button onClick={toggleTheme}>
       {isDarkMode?
       (<Sun className='h-6 w-6 text-yellow-300' />):
       (<Moon className='h-6 w-6 text-blue-900'/>)}
    </button>
  )
}

export default ThemeToggle
