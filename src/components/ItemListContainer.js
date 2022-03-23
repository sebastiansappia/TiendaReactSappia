import Grid from '@mui/material/Grid';
import ItemList from './ItemList';
import React, { useState, useEffect } from 'react';


export default function ItemListContainer(props) {

    const { title } = props;

    const mockProductos = [{
        id: 1,
        title: "Musculosa CBGB",
        img: "img/products/musculosa1.jpeg",
        alt: "",
        description: "",
        price: 1400,
        stock: 5,
        initial: 1
    },
    {
        id: 2,
        title: "Musculosa Foo Fighters",
        img: "img/products/musculosa2.jpeg",
        alt: "",
        description: "",
        price: 1400,
        stock: 3,
        initial: 1
    },
    {
        id: 3,
        title: "Remera Space Invader",
        img: "img/products/remera-1.jpg",
        alt: "",
        description: "",
        price: 2300,
        stock: 2,
        initial: 1
    },
    {
        id: 4,
        title: "Remera Jhon Lennon",
        img: "img/products/remera3.jpeg",
        alt: "",
        description: "",
        price: 2300,
        stock: 10,
        initial: 1
    }]

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
                <h1 className="tituloPrincipal">{title}</h1>
            </Grid>
            {products.map((product) => {
                const { id } = product
                return (
                    <Grid item xs={3} key={id}>
                        <ItemList data={product}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}