import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>{/*min-h-screen:- this means mean hieght should be the screen height*/}
      {/* THEME TOOGLE */}
      <ThemeToggle/>

      {/* BACKGROUND */}
      <StarBackground/>
      {/* NAVBAR */}

      {/* MAIN CONTENT */}


      {/* FOOTER */}
    </div>
  )
}

export default Home
