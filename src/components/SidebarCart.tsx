import Drawer from '@material-ui/core/Drawer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useState} from "react";
import {sidebarCartStyles} from './SidebarCart.styles';
import {ProductType} from "../App";
import SingleProduct from "./SingleProduct";
import Button from "@material-ui/core/Button";

type Props = {
    data: ProductType[],
    handleAdd: (product: ProductType) => void,
    handleRemove: (product: ProductType) => void,
}

const SidebarCart: React.FC<Props> = ({data, handleAdd, handleRemove}) => {
    const [isOpen, toggleOpen] = useState(false);
    const handleOpen = () => {
        toggleOpen(!isOpen)
    }
    const classes = sidebarCartStyles();

    return (
        <div>
            <ShoppingCartIcon className={classes.icon} onClick={()=> handleOpen()}/>
            <Drawer classes={{paper: classes.paperAnchorRight}} open={isOpen} anchor={"right"} onClose={()=> handleOpen()}>
                <h3>Cart</h3>
                {data.map(item => {
                    return (
                        <>
                            <SingleProduct
                                product={item}
                                handleAdd={()=> {}}
                                context="cart"
                            />
                            <Button variant="contained" color="primary" onClick={() => handleAdd(item)}>+</Button>
                            <Button variant="contained" color="primary" onClick={() => handleRemove(item)}>-</Button>
                        </>

                    )
                })}
            </Drawer>
        </div>
    )
}

export default SidebarCart;