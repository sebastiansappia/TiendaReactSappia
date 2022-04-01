import Grid from '@mui/material/Grid';
import ItemList from './ItemList';
import ItemDetailContainer from './ItemDetailContainer';
import React, { useState, useEffect } from 'react';
import mockProductos from '../mockproductos/mockProductos';


export default function ItemListContainer(props) {

    const { title } = props;

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1 className="tituloPrincipal">{title}</h1>
                </Grid>
            </Grid>
            <ItemList mockProductos={mockProductos} />
        </div>
    )
}