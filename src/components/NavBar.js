import React from 'react';
import Button from '@mui/material/Button';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom"


function NavBar(props) {
    return (
        <header>
            <nav>
                <div className="brandNav">
                    <Link to={"/"}><img src="/img/logo_seaquest.png" alt=""/></Link>
                </div>
                <div className='menu'>
                    <ul>
                        <li><Link to={"/"}><Button variant="contained" className='customButton'>Home</Button></Link></li>
                        <li><Link to={`/category/${1}/`}><Button variant="contained" className='customButton'>Remeras</Button></Link></li>
                        <li><Link to={`/category/${2}/`}><Button variant="contained" className='customButton'>Musculosas</Button></Link></li>
                        <li><Link to={`/category/${3}/`}><Button variant="contained" className='customButton'>Jeans</Button></Link></li>
                        <li><Link to={`/nosotros/`}><Button variant="contained" className='customButton'>&iquest;C&oacute;mo comprar?</Button></Link></li>
                        <li><Button variant="contained" className='customButton'>Contacto</Button></li>
                        <CartWidget items={props.itemsCart} />
                    </ul>
                </div>
                
            </nav>
            <div className='clear-both'></div>
        </header>
    )
}

export default NavBar;