import Grid from '@mui/material/Grid';
import CardProducto from './CardProduct';


export default function ItemListContainer(props) {
    const { title } = props;
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <h1 className="tituloPrincipal">{title}</h1>
            </Grid>
            <Grid item xs={3}>
                <CardProducto
                    title="Musculosa CBGB"
                    img="img/products/musculosa1.jpeg"
                    alt=""
                    description=""
                    price={1400}
                    stock={5}
                    initial={1}
                    onAdd={1} />
            </Grid>
            <Grid item xs={3}>
                <CardProducto
                    title="Musculosa Foo Fighters"
                    img="img/products/musculosa2.jpeg"
                    alt=""
                    description=""
                    price={1400}
                    stock={3}
                    initial={1}
                    onAdd={1} />
            </Grid>
            <Grid item xs={3}>
                <CardProducto
                    title="Remera Space Invader"
                    img="img/products/remera-1.jpg"
                    alt=""
                    description=""
                    price={2300}
                    stock={2}
                    initial={1}
                    onAdd={1} />
            </Grid>
            <Grid item xs={3}>
                <CardProducto
                    title="Remera Jhon Lennon"
                    img="img/products/remera3.jpeg"
                    alt=""
                    description=""
                    price={2300}
                    stock={10}
                    initial={1}
                    onAdd={1} />
            </Grid>
        </Grid>
    )
}