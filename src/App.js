import React from 'react';
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SwiperComponent from './swiper-page/SwiperComponent';
import GallaryB from './components/GallaryB';
import Educationcomp from './components/Educationcomp';
import './index.css';
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="family" element={<SwiperComponent />}/>
      <Route path="family/Gallary" element={<GallaryB />}/> 
      <Route path="education" element={<Educationcomp />}/>
      </Routes>
      </BrowserRouter>    
    </>
//  <SwiperComponent/>
  );
}

export default App;


