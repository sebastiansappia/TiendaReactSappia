import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

//Importo context
import CartContext from '../context/cartContext';

export default function CartWidget(props) {

    const { countCart, cartItem } = useContext(CartContext);

    return (
        <Link to={`/cart/`}><li className="relative">
            <span className="itemsCart">{countCart}</span>
            <ShoppingCartOutlinedIcon />
        </li></Link>
    )
}