import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom"
import CartContext from '../context/cartContext';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

//Components
import CartProductModal from './CartProductModal';

export default function CartModal(props) {

    const { stock, initial, id, action, hideId, product } = props;
    //Use state
    const [cant, setCantidad] = React.useState(initial);

    //Use context
    const { cartItem, addItem, showId, removeItem, countCart, showModal } = useContext(CartContext);


    if (countCart > 0 && showModal === true) {
        return (
            <div className="cartModalContainer z-index-top">
                    <CartProductModal />
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}