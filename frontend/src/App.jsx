import React, { useContext } from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Result from './pages/Result'
import Payment from './pages/Payment'
import NaveBar from './Components/NaveBar'
import Footer from './Components/Footer'
import Login from './Components/Login'
import { Mycontext } from './context/AppContext'
import { ToastContainer } from 'react-toastify';
import NotFound from './pages/Notfound'
import CodeReview from './pages/CodeReview'


const App = () => {
  const { showLogin } = useContext(Mycontext)
  return (
    <div id='container'>
      <NaveBar />
      <ToastContainer position='bottom-right' />
      {showLogin && <Login />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/buy' element={<Payment />} />
        <Route path='/codereview' element={<CodeReview />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App