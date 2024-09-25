import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Home/>
    </Router>
    </>
  )
}

export default App
