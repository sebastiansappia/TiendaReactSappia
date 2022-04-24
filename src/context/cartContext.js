import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItem, addCartItem] = useState(JSON.parse(localStorage.getItem("productos")) || []);
    const [showId, setShowId] = useState(JSON.parse(localStorage.getItem("id")) || []);
    const [totalPrice, setTotalPrice] = useState(JSON.parse(localStorage.getItem("totalprice")) || 0);
    const [countCart, setCountCartItem] = useState(cartItem.length)
    const [showModal, setShowModal] = useState(false);
    
    const addItem = (data) => {
        if (cartItem.find(e => e.id === data.id)) {
        } else {
            addCartItem(cartItem => [...cartItem, data]);
            setShowId(showId => [...showId, data.id]);
            setTotalPrice(totalPrice + (data.price * data.cant));
            setCountCartItem(cartItem.length + 1);
            localStorage.setItem("productos", JSON.stringify([...cartItem, data]));
            localStorage.setItem("id", JSON.stringify([...showId, data.id]));
            localStorage.setItem("totalprice", JSON.stringify(totalPrice + (data.price * data.cant)));    
        }
    };

    const removeItem = (id) => {
        const removeCartItem = cartItem.find(e => e.id == id);
        const newCartItem = cartItem.filter(e => e.id != id);
        const myId = showId.indexOf(id);
        addCartItem(newCartItem);
        if (myId != -1) {
            showId.splice(myId, 1);
        }
        setTotalPrice(totalPrice - (removeCartItem.price * removeCartItem.cant))
        setCountCartItem(cartItem.length - 1);
        localStorage.setItem("productos", JSON.stringify(newCartItem));
        localStorage.setItem("id", JSON.stringify([...showId, showId]));
        localStorage.setItem("totalprice", JSON.stringify(totalPrice - (removeCartItem.price * removeCartItem.cant)));   
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