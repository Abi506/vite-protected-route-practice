import React from 'react'
import { setLogin } from '../../slices/slices'
import { useDispatch } from 'react-redux'

const Login = () => {

    const dipatch=useDispatch()

    const handleLogin=()=>{
        dipatch(setLogin())
    }

  return (
    <div>
        <h1>Login Page</h1> 
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
