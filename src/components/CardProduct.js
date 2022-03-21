import ItemCount from './ItemCount';

export default function CardProduct(props) {
    const { img, alt, title, description, price, stock, initial, onAdd } = props;
    return (
        <div className="itemCard">
            <div className="imgContainer"><img src={img} alt={alt} /></div>
            <div className="productData"><p className="title">{title}</p>
                <p className="description">{description}</p>
                <p className="price">${price}</p>
                <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
                <p className="stockDisponible">Stock disponible: {stock}</p>
            </div>
        </div>
    )
}