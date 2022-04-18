import Grid from '@mui/material/Grid';
import React, { useState, useEffect, useContext } from 'react';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import CartContext from '../context/cartContext';

export default function CartProduct(props) {

    const { productData } = props;

    const [products, setProducts] = useState([])

    const { cartItem, addItem, showId, removeItem, countCart, totalPrice } = useContext(CartContext);

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(productData)
        })
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setProducts([])
            getProducts().then((products) => {
                setProducts(products)
            }).finally(() => {
                /*console.log("Cargaron los items")*/
            })
        }, 120);
        return () => clearTimeout(timer);
    }, [])

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <div className="cartItemContainer header" style={{ marginBottom: '20px', marginTop: '20px' }} >
                    <div className="col-2">PRODUCTO</div>
                    <div className="col-2"></div>
                    <div className="col-2">PRECIO</div>
                    <div className="col-2">CANTIDAD</div>
                    <div className="col-2">SUBTOTAL</div>
                    <div className="col-2"></div>
                </div>
                {
                    products.map((product) => {
                        const { id, img, alt, title, price, cant } = product;
                        const total = price * cant;
                        const removeToCart = (e) => {
                            e.stopPropagation();
                            removeItem(id);
                        }
                        if (!showId.includes(id)) {
                            return (<div></div>)
                        } else {
                            return (
                                <div className="cartItemContainer display-table" key={id}>
                                    <div className="col-2 table-cell"><img src={img} alt={alt} className="w-25" /></div>
                                    <div className="col-2 table-cell"><p className="title">{title}</p></div>
                                    <div className="col-2 table-cell"><p className="price">${price}</p></div>
                                    <div className="col-2 table-cell"><p className="price">{cant}</p></div>
                                    <div className="col-2 table-cell"><p className="price"><b>${total}</b></p></div>
                                    <div className="col-2 table-cell black"><DeleteForeverOutlinedIcon onClick={removeToCart} /></div>
                                </div>
                            )
                        }
                    })
                }
            </Grid>
        </Grid>
    )

}