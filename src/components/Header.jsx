import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Header = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  let navigate = useNavigate()

  // IF Blog title clicked directs to feed and page is refreshed
  const blogTitleClick = () => {
    navigate('/')
    window.location.reload(false)
  }

  // Sets navbar depending if user is logged in or not logged in
  if (user) {
    authenticatedOptions = (
      <>
        <div onClick={blogTitleClick} className="nav-link nav-title">BLOG</div>
        <Link className="nav-link right-align" to="/userProfile"><div>Hello {user.firstName}!</div></Link>
        <Link className='nav-link' to="/myBlog"><div>My Blog</div></Link>
        <Link className='nav-link' onClick={handleLogOut} to="/"><div>Logout</div></Link>
      </>
    )
  }

  const publicOptions = (
    <>
      <div onClick={blogTitleClick} className="nav-link nav-title">BLOG</div>
      <Link className="nav-link right-align" to = '/Login'><div>LOGIN</div></Link>
      <Link className="nav-link" to = '/Register'> <div>REGISTER</div></Link>
    </>
  )

  //Return
  return (
    <>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </>
  )
}

export default Header