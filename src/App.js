import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import { Route, Routes } from 'react-router-dom'
import CreatePost from './components/CreatePost'

function App() {
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
          <Route path="/createPost" element={<CreatePost />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
