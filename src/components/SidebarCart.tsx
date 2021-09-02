import Drawer from '@material-ui/core/Drawer';
import {useState} from "react";

type Props = {
    data?: []
}

const SidebarCart: React.FC<Props> = () => {
    const [isOpen, toggleOpen] = useState(true);

    return (
        <Drawer open={isOpen} anchor={"right"} >
            <h3>Cart</h3>
        </Drawer>
    )
}

export default SidebarCart;