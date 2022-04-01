import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1 className="tituloPrincipal">Error 404 - Pagina no encontrada</h1>
                </Grid>
            </Grid>
        </div>
    )
}

export default NotFoundPage