import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Result from './pages/Result'
import Payment from './pages/Payment'
import NaveBar from './Components/NaveBar'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className=' bg-red-50' id='container'>
      <NaveBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/buy' element={<Payment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App