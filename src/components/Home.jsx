import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
        <div className="home-title">ROUTES</div>    
        <div className="home-form">  
        <Link to = '/createPost'><button className="home-button">Create Post</button></Link>
        <br/>
        <br/>
        <Link to = '/editPost'><button className="home-button">Edit Post</button></Link>
      </div>

    </div>
  )
}

export default Home