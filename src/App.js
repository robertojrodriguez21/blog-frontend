import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import { Route, Routes } from 'react-router-dom'
import CreatePost from './components/CreatePost'
import { useState } from 'react'
import EditPost from './components/EditPost'
import Feed from './components/Feed'

function App() {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState({ title: '', body: '', image: '' })
  const [input, setInput] = useState('')

  const handlePostChange = (event) => {
    setNewPost({ ...newPost, [event.target.name]: event.target.value })
  }
  const handlePost = () => {
    let post = input
    setNewPost(post)
    setPosts(...posts, newPost)
    setInput('')
  }
  const handleDelete = (index) => {
    let post = [...posts]
    post.splice(index, 1)
    setPosts(post)
  }
  return (
    <div className="App">
      <nav>
        <Header />
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/createPost"
            element={
              <CreatePost
                handlePostChange={handlePostChange}
                handlePost={handlePost}
                newPost={newPost}
                input={input}
              />
            }
          />
          <Route path="/editPost" element={<EditPost />} />
          <Route path="/feed" element={<Feed handleDelete={handleDelete} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
