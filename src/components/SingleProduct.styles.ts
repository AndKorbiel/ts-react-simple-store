import { makeStyles } from '@material-ui/core/styles';
export const singleProductStyles = makeStyles(()=> ({
    image: {
        width: 'auto',
        maxHeight: '190px',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
    },
    paper: {
        padding: '15px',
        justifyContent: 'space-between',
        flexDirection: 'column',
        display: 'flex',
    },
    item: {
        width: '100%',
        display: 'grid',
    },
    h3: {
        fontSize: '16px'
    },
    desc: {
        justifyContent: 'flex-end',
    },
    bold: {
        fontWeight: 'bold'
    }
}))