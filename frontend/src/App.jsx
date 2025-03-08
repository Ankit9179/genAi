import React, { useContext } from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Result from './pages/Result'
import Payment from './pages/Payment'
import NaveBar from './Components/NaveBar'
import Footer from './Components/Footer'
import Login from './Components/Login'
import { Mycontext } from './context/AppContext'

const App = () => {
  const { showLogin } = useContext(Mycontext)
  return (
    <div id='container'>
      <NaveBar />
      {showLogin && <Login />}
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