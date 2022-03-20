import React from 'react';
import Button from '@mui/material/Button';
import CartWidget from './CartWidget';


function NavBar(props) {
    return (
        <header>
            <nav>
                <div className="brandNav">
                    <img src="img/logo-blue-black-up-hi.png" />
                    <h1>Fashionista</h1>
                </div>
                <div className='menu'>
                    <ul>
                        <li><Button variant="contained" className='customButton' href="#">Home</Button></li>
                        <li><Button variant="contained" className='customButton' href="#">Productos</Button></li>
                        <li><Button variant="contained" className='customButton' href="#">Nosotros</Button></li>
                        <li><Button variant="contained" className='customButton' href="#">Contacto</Button></li>
                        <CartWidget items={props.itemsCart} />
                    </ul>
                </div>
                
            </nav>
            <div className='clear-both'></div>
        </header>
    )
}

export default NavBar;