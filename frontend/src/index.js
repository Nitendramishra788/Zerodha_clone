import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing_Page/home/HomePage';
import Signup from './landing_Page/signup/Signup';
import About from './landing_Page/about/AboutPage';
import Pricing from './landing_Page/pricing/PricingPage';
import Products from './landing_Page/products/ProductPage';
import Support from './landing_Page/support/SupportPage';
import Navbar from './landing_Page/Navbar';
import Footer from './landing_Page/Footer';
import NotFound from './landing_Page/NotFound';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/Signup' element={<Signup/>}></Route>
     <Route path='/About' element={<About/>}></Route>
     <Route path='/Products' element={< Products/>}></Route>
     <Route path='/Pricing' element={<Pricing/>}></Route>
     <Route path='/Support' element={<Support/>}></Route>
     <Route path='*' element={< NotFound/>}/>
  </Routes>
 <Footer/>
  </BrowserRouter>


);


