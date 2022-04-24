import { Link } from "react-router-dom"

export default function Item(props) {
    const { id } = props

    return (
        <Link to={`/item/${id}/`}><p className="detalle" id={id}>Ver detalle del producto</p></Link>
    )
}