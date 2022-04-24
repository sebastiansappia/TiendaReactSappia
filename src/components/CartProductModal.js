
import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom"
import Grid from '@mui/material/Grid';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import CartContext from '../context/cartContext';
import CircularProgress from '@mui/material/CircularProgress';

export default function CartProductModal(props) {

    const [products, setProducts] = useState([])

    const { cartItem, removeItem, countCart } = useContext(CartContext);
    const [loading, setLoading] = useState(true);

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(cartItem)
        })
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(true);
            setProducts([])
            getProducts().then((products) => {
                setLoading(false);
                setProducts(products)
            }).finally(() => {
            })
        }, 200);
        return () => clearTimeout(timer);
    }, [cartItem])


    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                {loading ? <CircularProgress color="inherit" /> :
                    products.map((product) => {
                        const { id, img, alt, title, price, cant } = product;
                        const total = price * cant;
                        const removeToCart = (e) => {
                            e.stopPropagation();
                            removeItem(id);
                        }
                        if (countCart === 0) {
                            return (
                                <div className="cartItemContainerModal display-table">
                                    <p>Test</p>
                                </div>
                            )
                        } else {
                            return (
                                <div className="cartItemContainerModal display-table" key={id}>
                                    <div className="col-4 table-cell imgContainer"><img src={img} alt={alt} className="w-80" /></div>
                                    <div className="col-4 table-cell">
                                        <p className="title">{title}</p>
                                        <p className="price">${price}</p>
                                        <p className="price">Cantidad: {cant}</p>
                                        <p className="price"><b>Total: ${total}</b></p></div>
                                    <div className="col-4 table-cell alignCenter black"><DeleteForeverOutlinedIcon onClick={removeToCart} /></div>
                                </div>
                            )
                        }
                    })
                }
                <Link to={"/cart"}><p className="button">Finalizar compra</p></Link>
            </Grid>
        </Grid>
    )

}