import {makeStyles} from "@material-ui/core";
export const sidebarCartStyles = makeStyles(()=> ({
    icon: {
        right: '15px',
        position: 'absolute',
        top: '15px',
        fontSize: '32px',
        background: 'white',
        padding: '4px',
        color: '#3f51b5',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    paperAnchorRight: {
        width: '270px',
        padding: '15px',
        backgroundColor: '#f7f7f7 !important'
    }
}))