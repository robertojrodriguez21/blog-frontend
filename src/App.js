import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import { Route, Routes, useNavigate } from 'react-router-dom'
import CreatePost from './components/CreatePost'
import { useEffect, useState } from 'react'
import EditPost from './components/EditPost'
import Feed from './components/Feed'
import axios from 'axios'
import { CheckSession } from './services/Auth'
import Post from './components/Post'

const BASE_URL = 'http://localhost:3001/blog'

function App() {
  const [postsComments, setPostsComments] = useState([])
  const [newPost, setNewPost] = useState({ title: '', body: '', image: '' })
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleChange = (event) => {
    setNewPost({ ...newPost, [event.target.name]: event.target.value })
  }
  // const handlePost = () => {
  //   let post = input
  //   setPost(post)
  //   setPostsComments(...postsComments, post)
  //   setInput('')
  // }

  const createPost = async (e) => {
    e.preventDefault()
    const createdPost = {
      ...newPost,
      userId: user.id
    }
    await axios.post(`${BASE_URL}/post/create`, createdPost)

    setNewPost({ title: '', body: '', image: '' })
  }

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const handleDelete = async (id, index) => {
    id.preventDefault()
    await axios.delete(`http://localhost:3001/${id}`, post)
    let post = [...postsComments]
    post.splice(index, 1)
    setPostsComments(post)
  }

  const handleEdit = async (id) => {
    let newPost = await axios.put(`http://localhost:3001/${id}`, newPost)
    setPostsComments([...postsComments], newPost.data)
  }

  const checkToken = async () => {
    const user = await CheckSession()
    console.log(user, 'this is the user in the check token function')
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }

    const apiCall = async () => {
      let response = await axios.get(`${BASE_URL}/postcomment/`)
      setPostsComments(response.data)
    }
    apiCall()
  }, [])

  return user && authenticated ? (

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
          <Route
            path="/createPost"
            element={
              <CreatePost
                handlePostChange={handleChange}
                createPost={createPost}
                newPost={newPost}
              />
            }
          />
          <Route
            path="/editPost"
            element={
              <EditPost
                handleChange={handleChange}
                handleEdit={handleEdit}
                post={newPost}
              />
            }
          />
          <Route
            path="/"
            element={
              <Feed
                handleDelete={handleDelete}
                postsComments={postsComments}
                authenticated={authenticated}
                user={user}
                BASE_URL={BASE_URL}
              />
            }
          />
          <Route path="/post" element={<Post handleDelete={handleDelete} />} />
        </Routes>
      </main>
    </div>
  ) : (
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
          <Route path="/editPost" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post handleDelete={handleDelete} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
