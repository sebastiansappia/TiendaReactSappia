import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../context/cartContext';
import CartProduct from '../components/CartProduct';
import { Link } from "react-router-dom"
import db from '../firebase'
import { addDoc, collection } from 'firebase/firestore';
import CircularProgress from '@mui/material/CircularProgress';

const Checkout = () => {

    const { cartItem, addItem, showId, removeItem, countCart, setShowModal, totalPrice, addCartItem } = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([])

    setShowModal(false);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    })

    const [order, setOrder] = useState(
        {
            buyer: {
                name: '',
                phone: '',
                email: '',
            },
            items: cartItem.map((CartItem) => {
                return {
                    id: CartItem.id,
                    title: CartItem.title,
                    price: CartItem.price,
                }
            }),
            total: totalPrice
        }
    )

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(cartItem)
        })
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(true);
            setProducts([])
            getProducts().then((products) => {
                setLoading(false);
                setProducts(products)
            }).finally(() => {
                /*console.log("Cargaron los items")*/
            })
        }, 200);
        return () => clearTimeout(timer);
    }, [cartItem])



    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault()
        let prevOrder = {
            ...order,
            buyer: formData
        }
        setOrder({
            ...order,
            buyer: formData
        })
        pushOrder(prevOrder)
    }

    const [successOrder, setSuccessOrder] = useState()

    const pushOrder = async (prevOrder) => {
        const orderFirebase = collection(db, 'orders')
        const orderDoc = await addDoc(orderFirebase, prevOrder);
        setSuccessOrder(orderDoc.id)
        setLoading(false);
    }

    const handleChange = (e) => {
        const { value, name } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <div>
            {
                loading ? <div className="circularProgress"><CircularProgress color="inherit" /></div> :
                    successOrder ? (
                        <div>
                            <h3>Orden generada correctamente</h3>
                            <p>Su numero de orden es: {successOrder}</p>
                            <Link to={"/"}><p className="button w-25 d-inline-block">Seguir comprando</p></Link>
                        </div >
                    ) : (
                        <>
                            <div className="checkoutContainer">
                                <div className="checkoutForm">
                                    <h5>Complet&aacute; tus datos para confirmar la compra</h5>
                                    <form onSubmit={handleSubmit}>
                                        <input className="checkOutInput" type="text" name='name' placeholder='Nombre'
                                            onChange={handleChange}
                                            value={formData.name}
                                        />
                                        <input className="checkOutInput" type="number" name='phone' placeholder='Telefono'
                                            onChange={handleChange}
                                            value={formData.phone}
                                        />
                                        <input className="checkOutInput" type="mail" name='email' placeholder='e-mail'
                                            onChange={handleChange}
                                            value={formData.email}
                                        />
                                        <Button type="submit"><p className="button d-inline-block w-300px">Enviar</p></Button>
                                        <Link to={"/cart"}><p className="fs-08em">Volver atras</p></Link>
                                    </form>
                                </div>
                                <div className="checkoutForm">
                                    {products.map((product) => {
                                        const { id, img, alt, title, price, cant } = product;
                                        const total = price * cant;
                                        if (!showId.includes(id)) {
                                            return (<div></div>)
                                        } else {
                                            return (
                                                <div className="cartItemContainerModal display-table" key={id}>
                                                    <div className="col-4 table-cell imgContainer"><img src={img} alt={alt} className="w-80" /></div>
                                                    <div className="col-4 table-cell">
                                                        <p className="title">{title}</p>
                                                        <p className="price">${price}</p>
                                                        <p className="price">Cantidad: {cant}</p>
                                                        <p className="price"><b>Total: ${total}</b></p></div>
                                                </div>
                                            )
                                        }
                                    })
                                    }
                                    <p>Total Final: ${totalPrice}</p>
                                </div>
                            </div>
                        </>
                    )
            }
        </div>
    )
}


export default Checkout