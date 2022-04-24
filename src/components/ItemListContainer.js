import Grid from '@mui/material/Grid';
import ItemList from './ItemList';

export default function ItemListContainer(props) {

    //const { title } = props;

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1 className="tituloPrincipal">&iexcl;Mir&aacute; nuestros productos destacados!</h1>
                </Grid>
            </Grid>
            <ItemList/>
        </div>
    )
}