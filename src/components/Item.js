import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { useParams } from "react-router";

export default function Item(props) {
    const { id } = props
    //const [selectId, setId] = React.useState(id)

    return (
        <Link to={`/item/${id}/`}><p className="detalle" id={id}>Ver detalle del producto</p></Link>
    )
}