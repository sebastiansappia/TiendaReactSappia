import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import CartContext from '../context/cartContext';


export default function ItemCount(props) {

    const { stock, initial, id, action, product } = props;

    //Use state
    const [cant, setCantidad] = React.useState(initial);

    //Use context
    const { cartItem, addItem, showId, removeItem } = useContext(CartContext);

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

    const addToCart = (e) => {
        e.stopPropagation();
        var data = product;
        data.cant = cant;
        addItem(data);
        action(e, cant, id);
    }

    const removeToCart = (e) => {
        e.stopPropagation();
        removeItem(id);
    }


    if (showId.includes(id)) {
        const result = cartItem.find((Item) => Item.id == id);
        return (
            <div className="itemCounter">
                <div className="counter">
                    <p className="substractEmpty">-</p>
                    <p className="cant">{result.cant}</p>
                    <p className="add remove trash" onClick={removeToCart}><DeleteForeverOutlinedIcon /></p>
                </div>
                <Link to={"/cart"}><p className="button">Finalizar compra</p></Link>
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
                <p className="button" onClick={addToCart}>Agregar al carrito</p>
            </div>
        )
    }
}