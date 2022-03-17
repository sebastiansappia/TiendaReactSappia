import Grid from '@mui/material/Grid';

export default function ItemListContainer(props) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <h1 className="tituloPrincipal">{props.title}</h1>
            </Grid>
            <Grid item xs={3}>
                <p>Item 1</p>
            </Grid>
            <Grid item xs={3}>
                <p>Item 2</p>
            </Grid>
            <Grid item xs={3}>
                <p>Item 3</p>
            </Grid>
            <Grid item xs={3}>
                <p>Item 4</p>
            </Grid>
        </Grid>
    )
}