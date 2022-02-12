import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './components/Home'

function Pathway() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Pathway
