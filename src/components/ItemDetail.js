import ItemCount from './ItemCount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

export default function ItemDetail({ data }, key) {
    const { id, img, alt, title, description, price, stock, talles, initial } = data;

    return (
        <div className="itemDetail" id={id}>
            <div className="imgContainer"><img src={img} alt={alt} /></div>
            <div className="productData"><h1 className="title">{title}</h1>
                <h2 className="price grey">${price}</h2>
                <p className="cuotas"><FontAwesomeIcon icon={faCreditCard} /> <b>12 cuotas sin inter&eacute;s de ${(price / 12).toFixed(2)}</b></p>
                <p className="description">{description}</p>
                <p className="talles">Talles disponibles: {talles}</p>
                <ItemCount stock={stock} initial={initial}/>
                <p className="button center">Comprar</p>
                <p className="stockDisponible">Stock disponible: {stock}</p>
            </div>
        </div>
    )
}