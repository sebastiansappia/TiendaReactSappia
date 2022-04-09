import Grid from '@mui/material/Grid';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../context/cartContext';
import CartProduct from '../components/CartProduct';


const Cart = () => {

    const { cartItem, addItem, showId, removeItem, countCart } = useContext(CartContext);

    const totalCart = cartItem.map((product) => Number(product.price * product.cant)).reduce((a, b) => a + b, 0);

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
            <div>No hay items</div>
        )
    }


}

export default Cart