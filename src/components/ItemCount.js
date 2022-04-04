import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

export default function ItemCount(props) {

    const { stock, initial, id, action, hideId } = props;
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

    if (hideId.includes(id)) {
        return (
            <div className="itemCounter">
                <Link to={"/cart"}><p className="button">Comprar</p></Link>
            </div>
        )
    } else {
        return (
            <div className="itemCounter">
                <div className="counter">
                    <p className="substract" onClick={restar}>-</p>
                    <p className="cant">{cant}</p>
                    <p className="add" onClick={sumar}>+</p>
                </div>
                <p className="button" onClick={(e) => action(e, cant, id)}>Agregar al carrito</p>
            </div>
        )
    }
}