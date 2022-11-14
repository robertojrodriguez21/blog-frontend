import { Link } from 'react-router-dom'

const Header = () => {

  return(
    <>
    <Link className="nav-link nav-title" to={'/'}><div >BLOG</div></Link>
    <Link className="nav-link right-align" to = '/Login'><div>LOGIN</div></Link>
    <Link className="nav-link" to = '/Register'> <div>REGISTER</div></Link>
    </>
  ) 
}

export default Header