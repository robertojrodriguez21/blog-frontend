import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Header = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  let navigate = useNavigate()


  if (user) {
    authenticatedOptions = (
      <>
        <Link to='/' className="nav-link nav-title"><div>BLOG</div></Link>
        <Link to="/createPost"><div className='nav-link'>Create Post</div></Link>
        <div className="nav-link right-align">Hello {user.firstName}!</div>
        <Link className='nav-link' to="/myBlog"><div>My Blog</div></Link>
        <Link className='nav-link' onClick={handleLogOut} to="/"><div>Logout</div></Link>
      </>
    )
  }

  const publicOptions = (
    <>
      <Link className="nav-link nav-title" to={'/'}><div >BLOG</div></Link>
      <Link className="nav-link right-align" to = '/Login'><div>LOGIN</div></Link>
      <Link className="nav-link" to = '/Register'> <div>REGISTER</div></Link>
    </>
  )

  return (
    <>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </>

  )
}

export default Header