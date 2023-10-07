import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Navbar/pages/Layout";
import Home from "./Components/Navbar/pages/Home";
import Flowers from "./Components/Navbar/pages/Flowers";
import Plants from "./Components/Navbar/pages/Plants";
import ByOccasion from "./Components/Navbar/pages/ByOccasion";
import Chocolate from "./Components/Navbar/pages/Chocolate";
import Cart from "./Components/Navbar/pages/Cart";
import NoPage from "./Components/Navbar/pages/NoPage";
import OptionSelector from './Components/Navbar/pages/OptionSelector';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="Flowers" element={<Flowers/>} />
      <Route path="Plants" element={<Plants/>} />
      <Route path="Chocolate" element={<Chocolate/>} />
      <Route path="ByOccasion" element={<ByOccasion/>} />
      <Route path="Cart" element={<Cart/>} />
      <Route path='Option' element={< OptionSelector/>} />
      <Route path="*" element={<NoPage />} />
      
    </Route>
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
