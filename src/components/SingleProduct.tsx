import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {ProductType} from '../App';
// @ts-ignore
import {singleProductStyles} from "./SingleProduct.styles.ts";

type ProductProps = {
    product: ProductType,
    handleAdd: (product: ProductType)=> void,
    context: string
}

const SingleProduct: React.FC<ProductProps> = ({product, handleAdd, context}) => {
    const classes = singleProductStyles();
    console.log(context)

    return (
            <Grid md className={classes.item}>
                <Paper className={context === 'cart' ? classes.cartPaper : classes.paper}>
                    <h3 className={classes.h3}>{product.title}</h3>
                    <img className={context === 'cart' ? classes.cartImage : classes.image} src={product.image} />
                    <div className={classes.desc}>
                        <hr />
                        <p>{product.category}</p>
                        <p className={classes.bold}>{product.price} zł</p>
                        <Button variant="contained" color="primary" onClick={() => handleAdd(product)}>
                            Add to cart
                        </Button>
                    </div>
                </Paper>
            </Grid>
    )
}

export default SingleProduct;