import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {singleProductStyles} from "./SingleProduct.styles";

type ProductProps = {
    title: string,
    category: string,
    price: number,
    image: string
}

const SingleProduct: React.FC<ProductProps> = ({title, category, price, image}) => {
    const classes = singleProductStyles();

    return (
            <Grid item md className={classes.item}>
                <Paper className={classes.paper}>
                    <h3 className={classes.h3}>{title}</h3>
                    <img className={classes.image} src={image} />
                    <div className={classes.desc}>
                        <hr />
                        <p>{category}</p>
                        <p className={classes.bold}>{price} zł</p>
                        <Button variant="contained" color="primary">
                            Add to cart
                        </Button>
                    </div>
                </Paper>
            </Grid>
    )
}

export default SingleProduct;