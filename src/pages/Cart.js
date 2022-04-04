import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';

const Cart = () => {
    return (
        <div>
            <Grid container spacing={2}>
                    <Grid item xs={6} className="marginAuto">
                        <div >
                            <h1 className="tituloPrincipal">Cart</h1>
                        </div>
                    </Grid>
            </Grid>
        </div>
    )
}

export default Cart