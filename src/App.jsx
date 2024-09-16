import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Login from './components/login/login'
import About from './components/about/about'
import PrivateRoute from './components/protectedRoute'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route element={<PrivateRoute/>}>
      <Route exact path='/about' element={<About/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
