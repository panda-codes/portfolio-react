import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/> {/*index just assummes that the path is the index page*/}
        <Route path={"*"} element={<NotFound/>}/> 
      </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
