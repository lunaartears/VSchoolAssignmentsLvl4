import './App.css';
import React from "react"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./components/Home.js"
import About from "./components/About.js"
import Products from "./components/Products.js"
import Checkout from "./components/Checkout.js"
import ProductDetails from "./components/ProductDetails.js"


function App() {
  return (
    <Router>

      <nav style={{margin: 10}}>
        <Link to="/" style={{padding: 5}}>
          Home
        </Link>
        <Link to="/about" style={{padding: 5}}>
          About
        </Link>
        <Link to="/products" style={{padding: 5}}>
          Products
        </Link>
      </nav>

      <Routes>
        <Route path ="/" element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/checkout' element={<checkout/>}/>
        <Route path='/products/:productId' element={<ProductDetails/>}/>
      </Routes>
    </Router>
  )
}



export default App;
