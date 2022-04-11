import Grid from '@mui/material/Grid';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../context/cartContext';
import CartProduct from '../components/CartProduct';
import { Link } from "react-router-dom"


const Cart = () => {

    const { cartItem, addItem, showId, removeItem, countCart, setShowModal } = useContext(CartContext);

    const totalCart = cartItem.map((product) => Number(product.price * product.cant)).reduce((a, b) => a + b, 0);

    setShowModal(false);

    if (countCart > 0) {
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} className="marginAuto">
                        <div>
                            <h1 className="tituloPrincipal"><ShoppingCartOutlinedIcon /> Mi carrito</h1>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <CartProduct productData={cartItem} />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h3>Total: ${totalCart}</h3>
                    </Grid>
                </Grid>
            </div>
        )
    }
    else {
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} className="marginAuto">
                        <div>
                            <h1 className="tituloPrincipal"><ShoppingCartOutlinedIcon /> No ten&eacute;s items en tu carrito</h1>
                            <Link to={"/"}><p className="button w-25 d-inline-block">Ir al comprar</p></Link>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }


}

export default Cart