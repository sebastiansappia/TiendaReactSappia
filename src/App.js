import { render } from 'react-dom';
import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Pages
import HomePage from './pages/HomePage'
import Item from './pages/Item'
import NotFoundPage from './pages/NotFoundPage'
import Nosotros from './pages/Nosotros'

function App() {
    useEffect(() => {
        document.title = "Seaquest | Tienda de ropa | React JS";
    }, []);


    return (
        //Jsx
        <div className="App" >
            <BrowserRouter>
                <NavBar itemsCart={0} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/category/:categoryId/" element={<HomePage />} />
                    <Route path="/item/:id/" element={<Item />} />
                    <Route path="/Nosotros" element={<Nosotros />} />
                    <Route path="*" element={<NotFoundPage />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;