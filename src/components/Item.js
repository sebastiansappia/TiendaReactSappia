import React, { useState, useEffect } from 'react';

export default function Item(props) {
    const { id } = props
    const [selectId, setId] = React.useState(id)

    function llamarId() {
        console.log(selectId)
        alert('Seleccionaste el ' + selectId)
    }

    return (
        <p className="detalle" id={id} onClick={llamarId}>Ver detalle del producto</p>
    )
}