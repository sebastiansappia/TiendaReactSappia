import Grid from '@mui/material/Grid';
import ItemDetail from './ItemDetail';
import React, { useState, useEffect } from 'react';


export default function ItemDetailContainer(props) {

    const mockProductos = [{
        id: 1,
        title: "Musculosa CBGB",
        img: "img/products/musculosa1.jpeg",
        alt: "",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        talles: "XL, L, M, S",
        price: 1400,
        stock: 5,
        initial: 1
    }]

    const [item, setItem] = useState([])

    const getItem = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProductos)
        })
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            getItem().then((item) => {
                setItem(item)
            }).finally(() => {
                console.log("Cargo el item")
            })
        }, 120);
        return () => clearTimeout(timer);
    }, [])

    return (
        <Grid container spacing={2}>
            {item.map((item) => {
                const { id } = item
                return (
                    <Grid item xs={12} key={id}>
                        <ItemDetail data={item}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}