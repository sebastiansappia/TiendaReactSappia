import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItem, addCartItem] = useState([])
    const [countCart, setCountCartItem] = useState(0)
    const [showId, setShowId] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItem = (data) => {
        if (cartItem.find(e => e.id == data.id)) {
        } else {
            setCountCartItem((countCart) => countCart + 1);
            addCartItem(cartItem => [...cartItem, data]);
            setShowId(showId => [...showId, data.id]);
            setTotalPrice(totalPrice + (data.price * data.cant));
        }
    }

    const removeItem = (id) => {
        const removeCartItem = cartItem.find(e => e.id == id);
        const newCartItem = cartItem.filter(e => e.id != id);
        const myId = showId.indexOf(id);
        setTotalPrice(totalPrice - (removeCartItem.price * removeCartItem.cant));
        setCountCartItem((countCart) => countCart - 1);
        addCartItem(newCartItem);
        if (myId != -1) {
            showId.splice(myId, 1);
        }
        setShowId(showId);
    }

    const data = {
        cartItem,
        countCart,
        showId,
        showModal,
        totalPrice,
        setShowModal,
        removeItem,
        addItem,
        addCartItem
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext