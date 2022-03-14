import React from 'react';
import Button from '@mui/material/Button';

function NavBar() {
    return (
        <header>
            <nav>
                <div className="brandNav">
                    <img src="img/nav-icon.png" />
                    <h1>Sappia store</h1>
                </div>
                <div className='menu'>

                    <ul>
                        <li><Button variant="contained" className='customButton' href="#">Home</Button></li>
                        <li><Button variant="contained" className='customButton' href="#">Productos</Button></li>
                        <li><Button variant="contained" className='customButton' href="#">Nosotros</Button></li>
                        <li><Button variant="contained" className='customButton' href="#">Contacto</Button></li>
                    </ul>
                </div>
            </nav>
            <div className='clear-both'></div>
        </header>
    );
}

export default NavBar;