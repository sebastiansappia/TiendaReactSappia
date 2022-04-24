import React, { useContext } from 'react';
import CartContext from '../context/cartContext';

//Components
import CartProductModal from './CartProductModal';

export default function CartModal(props) {
    //Use context
    const { countCart, showModal } = useContext(CartContext);

    if (countCart > 0 && showModal === true) {
        return (
            <div className="cartModalContainer z-index-top">
                <CartProductModal />
            </div>
        )
    }
    else if (countCart === 0 && showModal === true) {
        return (
            <div className="cartModalContainer z-index-top">
                <p>El carrito est&aacute; vac&iacute;o</p>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}