/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import './App.css';
import Product from './pages/Product';
import products from './data';
import { Route, Routes } from 'react-router';
import SingleProduct from './components/product/SingleProduct';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Context from './context/Context';
import CheckOut from './pages/CheckOut';
import ThankYou from './pages/ThankYou';
import Footer from './pages/Footer';
import Contact from './pages/Contact';









function App() {
  

  return (
    <>
      <Context>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="thankYou" element={<ThankYou />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Context>
    </>
  );
}

export default App
