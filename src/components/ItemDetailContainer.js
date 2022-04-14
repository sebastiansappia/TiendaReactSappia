import Grid from '@mui/material/Grid';
import ItemDetail from './ItemDetail';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import mockProductos from '../mockproductos/mockProductos';
import CircularProgress from '@mui/material/CircularProgress';
//Firebase
import db from '../firebase'
import { doc, getDoc } from 'firebase/firestore'

export default function ItemDetailContainer(props) {

    const { id } = useParams();

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const getItem = async () => {
        setLoading(true);
        const docRef = doc(db, 'items', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let product = docSnap.data();
            product.id = docSnap.id;
            console.log(product);
            setItem(product);
            setLoading(false);
        } else {
            navigate('/error');
        }
        /*
        return new Promise((resolve, reject) => {
            return resolve(mockProductos)
        })*/
    }

    useEffect(() => {
        getItem()
    }, [id])

    /*
    useEffect(() => {
        const timer = setTimeout(() => {
            getItem().then((item) => {
                setItem(item)
            }).finally(() => {
                console.log("Cargo el item")
            })
        }, 120);
        return () => clearTimeout(timer);
    }, [])*/

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} key={id}>
            {loading ? <div className="circularProgress"><CircularProgress  color="inherit"/></div> : <ItemDetail data={item} />}
            </Grid>
        </Grid>
    )
}