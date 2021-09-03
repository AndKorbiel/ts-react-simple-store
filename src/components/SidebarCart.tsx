import Drawer from '@material-ui/core/Drawer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useState} from "react";
import {sidebarCartStyles} from './SidebarCart.styles';
import {ProductType} from "../App";
import SingleProduct from "./SingleProduct";

type Props = {
    data: ProductType[]
}

const SidebarCart: React.FC<Props> = ({data}) => {
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
                        <SingleProduct
                            product={item}
                            handleAdd={()=> {}}
                            context="cart"
                        />
                    )
                })}
            </Drawer>
        </div>
    )
}

export default SidebarCart;