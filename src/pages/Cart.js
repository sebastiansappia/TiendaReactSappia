import Grid from '@mui/material/Grid';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../context/cartContext';
import CartProduct from '../components/CartProduct';
import { Link } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';


const Cart = () => {

    const { cartItem, addItem, showId, removeItem, countCart, setShowModal, totalPrice } = useContext(CartContext);

    const [loading, setLoading] = useState(true);

    setShowModal(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 300);
        return () => clearTimeout(timer);
    }, [])

    if (cartItem.length > 0) {
        return (
            <>
                {loading ? <div className="circularProgress"><CircularProgress color="inherit" /></div> :
                    <>
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
                                <div>
                                    <div className="floatLeft">
                                        <Link to={"/"}><p>Seguir comprando</p></Link>
                                    </div>
                                    <div className="floatRight">
                                        <h3>Total   ${totalPrice}</h3>
                                        <Link to={"/checkout"}><p className="button">Finalizar compra</p></Link>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </>}
            </>
        )
    }
    else {
        return (
            <>
                {loading ? <div className="circularProgress"><CircularProgress color="inherit" /></div> :
                    <>
                        <Grid container spacing={2}>
                            <Grid item xs={12} className="marginAuto">
                                <div>
                                    <h1 className="tituloPrincipal"><ShoppingCartOutlinedIcon /> No ten&eacute;s items en tu carrito</h1>
                                    <Link to={"/"}><p className="button w-25 d-inline-block">Ir al comprar</p></Link>
                                </div>
                            </Grid>
                        </Grid>
                    </>
                }
            </>
        )
    }


}

export default Cart