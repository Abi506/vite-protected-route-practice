import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {
    const isUserLoggedin=useSelector((state)=>state.userLogInfo.isLogged)
  if(isUserLoggedin){ //if user logged in
    return <Outlet/>
  }  
  return <Navigate to="/login"/>
}

export default PrivateRoute
