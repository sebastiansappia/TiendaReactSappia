import React, { useState } from 'react';

export default function ItemCount(props) {
    
    const { stock, initial, onAdd } = props;
    const [cant, setCantidad] = React.useState(initial);

    const sumar = () => {
        if (cant < stock) {
            setCantidad((cant) => cant + 1);
        }
    };

    const restar = () => {
        if (cant !== 1) {
            setCantidad((cant) => cant - 1);
        }
    };

    return (
        <div className="itemCounter">
            <div className="counter">
                <p className="substract" onClick={restar}>-</p>
                <p className="cant">{cant}</p>
                <p className="add" onClick={sumar}>+</p>
            </div>
            <p className="button">Agregar al carrito</p>
        </div>
    )
}