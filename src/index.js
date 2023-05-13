import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Category from "./Category/Category";
import Bike from "./Bike/Bike";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="category" element={<Category/>}/>
      <Route path="bike" element={<Bike/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>

);
