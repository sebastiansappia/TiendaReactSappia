import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';



//Importo context
import CartContext from '../context/cartContext';

export default function CartWidget(props) {

    const { cartItem, setShowModal, showModal } = useContext(CartContext);

    return (
        <li className="relative cursor-pointer" onClick={() => setShowModal(!showModal)}>
            <span className="itemsCart">{cartItem.length}</span>
            <ShoppingCartOutlinedIcon />
        </li>
    )
}