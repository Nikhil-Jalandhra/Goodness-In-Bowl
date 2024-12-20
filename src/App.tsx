import './App.css';
import Blog from './Pages/Blog';
import Recipes from './Pages/Recipes';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogSummary from './Pages/BlogSummary';
import RecipeSummary from './Pages/RecipeSummary';
import RecipeSummary1 from './Pages/RecipeSummary1';

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/about'/>
        <Route element={<Blog/>} path='/blog'/>
        <Route element={<BlogSummary/>} path='/blog/:id/:title'/>
        <Route element={<Recipes/>} path='/recipes'/>
        <Route element={<RecipeSummary/>} path='/recipes/:id/:title'/>
        <Route element={<RecipeSummary1/>} path='/recipes1/:id/:title'/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
