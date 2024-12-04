import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route,Routes}from "react-router-dom";
import './App.css';
import AOS from 'aos';
import './assets/style/aos/aos.css';
import Home from './pages/home';
import Products from './pages/products';
import Service from './pages/service';
import Catagories from './pages/catagories';
import Contact from './pages/contact';
import '../src/assets/style/boostrap/bootstrap.css'
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 10,
  });
}, []);
  return (
    <>
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/service' element={<Service/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/catagories' element={<Catagories/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
