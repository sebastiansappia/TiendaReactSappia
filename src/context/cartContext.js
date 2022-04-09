import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItem, addCartItem] = useState([])
    const [countCart, setCountCartItem] = useState(0)
    const [showId, setShowId] = useState([])

    const addItem = (data) => {
        if (cartItem.find(e => e.id == data.id)) {
        } else {
            setCountCartItem((countCart) => countCart + 1);
            addCartItem(cartItem => [...cartItem, data]);
            setShowId(showId => [...showId, data.id]);
        }
    }

    const removeItem = (id) => {
        const newCartItem = cartItem.filter(e => e.id != id);
        const myId = showId.indexOf(id);
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
        removeItem,
        addItem
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext