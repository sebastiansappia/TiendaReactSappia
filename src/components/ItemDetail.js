import ItemCount from './ItemCount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

export default function ItemDetail({ data }, key) {
    const { id, img, alt, title, description, price, stock, talles, initial } = data;

    const [count, setCount] = useState(0);
    const [hideId, setHideId] = useState([]);
    const onAdd = (e, cant, id) => {
        e.stopPropagation();
        setCount(count + cant);
        setHideId([...hideId, id]);
        console.log('Se agregaron: ' + cant + ' items del articulo ID: ' + id);
    };

    return (
        <div className="itemDetail" id={id}>
            <div className="imgContainer"><img src={img} alt={alt} /></div>
            <div className="productData"><h1 className="title">{title}</h1>
                <h2 className="price grey">${price}</h2>
                <p className="cuotas"><FontAwesomeIcon icon={faCreditCard} /> <b>12 cuotas sin inter&eacute;s de ${(price / 12).toFixed(2)}</b></p>
                <p className="description">{description}</p>
                <p className="talles">Talles disponibles: {talles}</p>
                <ItemCount id={id} stock={stock} initial={initial} action={onAdd} hideId={hideId} />
                <p className="stockDisponible">Stock disponible: {stock}</p>
            </div>
        </div>
    )
}