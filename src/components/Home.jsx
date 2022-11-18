import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  // Return
  return (
    <div className="home">
        <div>
          <h3 className='homepage-title'>Log In or Register to see feed</h3>
          <button className='login-button' onClick={() => navigate('/login')}>Log In</button>
          <div className='home-divider'>or</div>
          <button className='register-button' onClick={() => navigate('/register')}>Register</button>
        </div>
    </div>
  )
}

export default Home 