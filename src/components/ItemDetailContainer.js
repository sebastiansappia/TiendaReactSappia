import Grid from '@mui/material/Grid';
import ItemDetail from './ItemDetail';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import mockProductos from '../mockproductos/mockProductos';

export default function ItemDetailContainer(props) {

    const params = useParams();

    console.log(params.id);

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
                if (id == params.id) {
                    return (
                        <Grid item xs={12} key={id}>
                            <ItemDetail data={item} />
                        </Grid>
                    )
                }
            })}
        </Grid>
    )
}