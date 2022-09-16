import React from 'react';
import './index.css';
import Navbar from './Navbar';
import Footer from './Footer';

import About from './About';
import Services from './Services';
import Contact from './Contact';
import MainHome from './MainHome';
import {Routes, BrowserRouter , Route } from 'react-router-dom';
function App() {
  return (
    <>
    
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<MainHome/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/contact' element={<Contact/>} />
    </Routes>
    </BrowserRouter>
    

    
    <div className="extra"></div>
    <Footer/>
    </>
  );
}

export default App;
