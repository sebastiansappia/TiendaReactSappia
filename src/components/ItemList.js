import ItemCount from './ItemCount';
import Item from './Item';

export default function ItemList({ data }, key) {
    const { id, img, alt, title, description, price, stock, initial } = data;
    
    return (
        <div className="itemCard" id={id}>
            <div className="imgContainer"><img src={img} alt={alt} /></div>
            <div className="productData"><p className="title">{title}</p>
                <p className="description">{description}</p>
                <p className="price">${price}</p>
                <ItemCount stock={stock} initial={initial}/>
                <Item id={id}/>
                <p className="stockDisponible">Stock disponible: {stock}</p>
            </div>
        </div>
    )
}