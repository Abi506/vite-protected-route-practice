import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLogout } from '../../slices/slices'

const Navbar = () => {

    const isLogged=useSelector((state)=>state.userLogInfo.isLogged)
    const dispatch=useDispatch()

    const handleLogout=()=>{
        dispatch(setLogout())
    }

  return (
    <div>
      <Link to="/">Home</Link>
      <br/>
      {isLogged ? <Link to="#" onClick={handleLogout}>logout</Link> : <Link to="/login">login</Link> }
      
      <br/>
      <Link to="/about">about</Link>
    </div>
  )
}

export default Navbar
