import React from 'react'
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Homepage from './homepage'
import Product from './product'
import './App.css'
import Signin from './signin'
import Signup from './signup'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App