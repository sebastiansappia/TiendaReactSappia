
import { render } from 'react-dom';
import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
    useEffect(() => {
        document.title = "Fashionista | Tienda de remeras";
     }, []);
    return (
        //Jsx
        <div className="App" >
            <NavBar itemsCart={0} />
            <ItemListContainer title="&iexcl;Bienvenidos a nuestro carrito!" />
        </div>
    );
}

export default App;