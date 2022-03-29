import Grid from '@mui/material/Grid';
import ItemCount from './ItemCount';
import Item from './Item';
import React, { useState, useEffect } from 'react';

export default function ItemList(props) {

    const {mockProductos} = props;

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProductos)
        })
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            getProducts().then((productos) => {
                setProducts(productos)
            }).finally(() => {
                console.log("Cargaron los items")
            })
        }, 120);
        return () => clearTimeout(timer);
    }, [])

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                {
                    products.map((product) => {
                        const { id, img, alt, title, description, price, stock, initial } = product
                        return (
                            <Grid item xs={3} style={{ display: 'inline-block' }} key={id}>
                                <div className="itemCard" id={id} key={id}>
                                    <div className="imgContainer"><img src={img} alt={alt} /></div>
                                    <div className="productData"><p className="title">{title}</p>
                                        <p className="description">{description}</p>
                                        <p className="price">${price}</p>
                                        <ItemCount stock={stock} initial={initial} />
                                        <Item id={id} />
                                        <p className="stockDisponible">Stock disponible: {stock}</p>
                                    </div>
                                </div>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Grid>
    )
}