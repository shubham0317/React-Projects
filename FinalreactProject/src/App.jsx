import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/homepage'
import Collection from './Pages/collection'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';

const App = () => {


 

  return (
    <div className = " min-h-screen text-white w-full bg-gray-900">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
          
      <Route path='/collection' element={<Collection/>}/>
    </Routes>

    <ToastContainer/>
   
    </div>

    
  )
}

export default App