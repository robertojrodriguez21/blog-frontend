import './App.css'
import Home from './components/Home'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <nav>
        <Header />
      </nav>
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
