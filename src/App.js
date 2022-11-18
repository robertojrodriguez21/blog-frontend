import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import MyBlog from './components/MyBlog'
import Login from './components/Login'
import Register from './components/Register'
import UserProfile from './components/UserProfile'
import { Route, Routes } from 'react-router-dom'
import CreatePost from './components/CreatePost'
import { useEffect, useState } from 'react'
import EditPost from './components/EditPost'
import Feed from './components/Feed'
import axios from 'axios'
import { CheckSession } from './services/Auth'

// Sets backend url
const HEROKU_URL = 'https://radiant-earth-48941.herokuapp.com/blog'
const LOCAL_URL = 'http://localhost:3001/blog'
const BASE_URL =
  process.env.NODE_ENV === 'blog_development' ? LOCAL_URL : HEROKU_URL

function App() {
  const [postsComments, setPostsComments] = useState([])
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  // Logout function
  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  // Checks for user using token
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  // Gets token from browser
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  // Sets all post with its associated comments
  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`${BASE_URL}/postcomment/`)
      setPostsComments(response.data)
    }

    apiCall()
  }, [])

  // Return
  return user && authenticated ? (
    // Page for logged in users
    <div className="App">
      <nav>
        <Header
          user={user}
          authenticated={authenticated}
          handleLogOut={handleLogOut}
        />
      </nav>

      <main>
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route
            path="/myBlog"
            element={
              <MyBlog
                postsComments={postsComments}
                user={user}
                authenticated={authenticated}
                BASE_URL={BASE_URL}
              />
            }
          />
          <Route
            path="/userProfile"
            element={
              <UserProfile
                user={user}
                BASE_URL={BASE_URL}
                handleLogOut={handleLogOut}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/createPost"
            element={<CreatePost BASE_URL={BASE_URL} user={user} />}
          />
          <Route
            path="/editPost/:postId"
            element={<EditPost BASE_URL={BASE_URL} />}
          />
          <Route
            path="/"
            element={
              <Feed
                postsComments={postsComments}
                authenticated={authenticated}
                user={user}
                BASE_URL={BASE_URL}
              />
            }
          />
        </Routes>
      </main>
      <footer>Blog 2022</footer>
    </div>
  ) : (
    // Page for users that aren't logged in
    <div className="App">
      <nav>
        <Header
          user={user}
          authenticated={authenticated}
          handleLogOut={handleLogOut}
        />
      </nav>

      <main>
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/createPost" element={<Home />} />
          <Route path="/myBlog" element={<Home />} />
          <Route path="/userProfile" element={<Home />} />
          <Route path="/editPost/:postId" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
