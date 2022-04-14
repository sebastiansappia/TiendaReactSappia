import Grid from '@mui/material/Grid';
import ItemCount from './ItemCount';
import Item from './Item';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
//Firebase
import db from '../firebase'
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore'

export default function ItemList(props) {

    const { categoryId } = useParams()

    const { mockProductos } = props;

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
        const itemsCollection = query(collection(db, 'items'), orderBy('categoryId', 'asc'));
        const productsSnapshot = await getDocs(itemsCollection);
        const productList = productsSnapshot.docs.map((doc) => {
            let product = doc.data();
            product.id = doc.id;
            return product;
        }
        )
        return productList;
        /*
        return new Promise((resolve, reject) => {
            return resolve(mockProductos)
        })*/
    }

    const [count, setCount] = useState(0);
    const [hideId, setHideId] = useState([]);
    const onAdd = (e, cant, id) => {
        e.stopPropagation();
        setCount(count + cant);
        setHideId([...hideId, id]);
        console.log('Se agregaron: ' + cant + ' items del articulo ID: ' + id);
    };

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setProducts([])
            getProducts().then((products) => {
                setLoading(false);
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
                {loading ? <div className="circularProgress"><CircularProgress color="inherit"/></div> :
                    products.map((product) => {
                        const { id, img, alt, title, description, price, stock, initial } = product
                        return (
                            <Grid item xs={3} style={{ display: 'inline-block' }} key={id}>
                                <div className="itemCard" id={id} key={id}>
                                    <div className="imgContainer"><Link to={`/item/${id}/`}><img src={img} alt={alt} /></Link></div>
                                    <div className="productData"><p className="title">{title}</p>
                                        <p className="price">${price}</p>
                                        <ItemCount id={id} stock={stock} initial={initial} action={onAdd} hideId={hideId} product={product} />
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