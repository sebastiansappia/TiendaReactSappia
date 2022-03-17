import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

export default function CartWidget(props) {
    return (
        <li className="relative">
            <span className="itemsCart">{props.items}</span>
            <ShoppingCartOutlinedIcon />
        </li>
    )
}