import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';

const Nosotros = () => {
    return (
        <div>
            <Grid container spacing={2}>
                    <Grid item xs={6} className="marginAuto">
                        <div >
                            <h1 className="tituloPrincipal">&iquest;C&oacute;mo comprar?</h1>
                            <ul className="detalleComoComprar">
                                <li>Elegi el producto que queres comprar.</li>
                                <li>Hacé clic en el botón de "Agregar al carrito". Esto agregará el producto a tu carrito y te llevará al mismo.</li>
                                <li>Podes seguir agregando otros productos al carrito o sino haz clic en "Iniciar Compra".</li>
                                <li>Completá tus datos de contacto completos y haz clic en "Continuar".</li>
                                <li>Elegí el método de entrega.</li>
                                <li>Ingresá tu dirección y datos de facturación. Luego hacé clic en "Continuar".</li>
                                <li>Seleccioná el método de envío</li>
                                <li>Elegí el medio de pago. Una vez que elijas el medio de pago, hacé clic en "Continuar".</li>
                                <li>Finalmente en la página de Confirmación de compra podes revisar toda la información de la compra. Luego hacé clic en "Continuar".</li>
                                <li> Ahí serás redirigido/a a otra pantalla para que completes los datos sobre la forma de pago elegida.</li>
                                <li>Después de confirmar la compra vas a recibir un correo de nuestra parte. :)</li>
                            </ul>
                        </div>
                    </Grid>
            </Grid>
        </div>
    )
}

export default Nosotros