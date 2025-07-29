import React from 'react'
import { Routes, Route } from 'react-router-dom' //from this we can create the routes
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-pink-200'>
      <Navbar/>
      <Routes> {/*instead of Link tag we use Routes in which pages are Route see the below example you can understand  */}
        <Route path='/' element={<Home/>} />
        <Route path='/result' element={<Result/>} />
        <Route path='/buy-credit' element={<BuyCredit/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
