const Header = () => {
  let loggedIn = true

  return !loggedIn ? (
    <>
    <div className="nav-link nav-title">BLOG</div>
    <div className="nav-link right-align">LOGIN</div>
    <div className="nav-link">REGISTER</div>
    </>
  ) : (
    <>
    <div className="nav-link nav-title">BLOG</div>
    <div className="nav-link">FEED</div>
    <div className="nav-link">ADD POST</div>
    <div className="nav-link right-align">Welcome back USER</div>
    </>
  )
}

export default Header