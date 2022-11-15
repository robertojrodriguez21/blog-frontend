import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import { Route, Routes } from 'react-router-dom'
import CreatePost from './components/CreatePost'
import { useEffect, useState } from 'react'
import EditPost from './components/EditPost'
import Feed from './components/Feed'
import axios from 'axios'
import { CheckSession } from './services/Auth'

const BASE_URL = 'http://localhost:3001/blog'

function App() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({ title: '', body: '', image: '' })
  const [input, setInput] = useState('')
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value })
  }
  const handlePost = () => {
    let post = input
    setPost(post)
    setPosts(...posts, post)
    setInput('')
  }
  const handleDelete = async (id, index) => {
    id.preventDefault()
    await axios.delete(`http://localhost:3001/${id}`, post)
    let post = [...posts]
    post.splice(index, 1)
    setPosts(post)
  }
  const handleEdit = async (id) => {
    let newPost = await axios.put(`http://localhost:3001/${id}`, post)
    setPosts([...posts], newPost.data)
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  useEffect(() => {
    const apiCall = async () => {
      let postResponse = await axios.get(`${BASE_URL}/post/`)
      setPosts(postResponse.data)
      console.log(posts)
    }

    apiCall()
  }, [])

  return (
    <div className="App">
      <nav>
        <Header />
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route
            path="/createPost"
            element={
              <CreatePost
                handlePostChange={handleChange}
                handlePost={handlePost}
                newPost={post}
                input={input}
              />
            }
          />
          <Route
            path="/editPost"
            element={
              <EditPost
                handleChange={handleChange}
                handleEdit={handleEdit}
                post={post}
                input={input}
              />
            }
          />
          <Route path="/feed" element={<Feed handleDelete={handleDelete} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
