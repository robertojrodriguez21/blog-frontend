import { Link } from 'react-router-dom'

const Header = () => {

  return(
    <>
    <div className="nav-link nav-title">BLOG</div>
    <Link className="nav-link right-align" to = '/Login'><div>LOGIN</div></Link>
    <Link className="nav-link" to = '/Register'> <div>REGISTER</div></Link>
    </>
  ) 
}

export default Header