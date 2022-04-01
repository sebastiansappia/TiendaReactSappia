import Grid from '@mui/material/Grid';
import ItemCount from './ItemCount';
import Item from './Item';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ItemList(props) {

    const { categoryId } = useParams()

    console.log(categoryId);

    const { mockProductos } = props;

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProductos)
        })
    }

    /*
    useEffect(() => {
        const timer = setTimeout(() => {
            setProducts([])
            getProducts().then( (productos) => {
                categoryId ? filterProductByCategory(productos, categoryId) : setProducts(productos)
            }).finally(() => {
                console.log("Cargaron los items")
            })
        }, 120);
        return () => clearTimeout(timer);
    }, [categoryId])*/

    useEffect(() => {
        const timer = setTimeout(() => {
            setProducts([])
            getProducts().then((products) => {
                categoryId ? filterProductByCategory(products, categoryId) : setProducts(products)
            }).finally(() => {
                console.log("Cargaron los items")
            })
        }, 120);
        return () => clearTimeout(timer);
    }, [categoryId])

    const filterProductByCategory = (array, categoryId) => {
        return array.map((product, i) => {
            if (product.categoryId == categoryId) {
                return setProducts(products => [...products, product]);
            }
        })
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                {console.log("products: ", products)}
                {
                    products.map((product) => {
                        const { id, img, alt, title, description, price, stock, initial } = product
                        return (
                            <Grid item xs={3} style={{ display: 'inline-block' }} key={id}>
                                <div className="itemCard" id={id} key={id}>
                                    <div className="imgContainer"><Link to={`/item/${id}/`}><img src={img} alt={alt} /></Link></div>
                                    <div className="productData"><p className="title">{title}</p>
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