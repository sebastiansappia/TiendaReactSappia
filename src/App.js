import { render } from 'react-dom';
import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Whatsapp from './components/Whatsapp';
//Pages
import HomePage from './pages/HomePage'
import Item from './pages/Item'
import NotFoundPage from './pages/NotFoundPage'
import Nosotros from './pages/Nosotros'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
//Context
import { CartProvider } from './context/cartContext';

function App() {
    useEffect(() => {
        document.title = "Wolf | Tienda de ropa | React JS";
    }, []);


    return (
        //Jsx
        <div className="App" >
            <CartProvider>
                <BrowserRouter>
                    <NavBar itemsCart={0} />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/category/:categoryId/" element={<HomePage />} />
                        <Route path="/item/:id/" element={<Item />} />
                        <Route path="/nosotros" element={<Nosotros />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                    <div className="marginFooter"></div>
                    <Whatsapp/>
                    <Footer />
                </BrowserRouter>
            </CartProvider>
        </div>
    );
}

export default App;