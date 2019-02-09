import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Info  from '@material-ui/icons/Info';
import AboutDialog from './AboutDialog';

const iconUrl = "https://static.scania.com/resources/logotype/favicon/android-icon-72x72.png";

const Navbar = (props) => {
    return (
        <AppBar position="static" style={{background: '#041E42'}}>
            <Toolbar>
                <IconButton color="inherit" aria-label="Menu">
                    <img style={styles.img} src={iconUrl} alt="" />
                </IconButton>
                <Typography style={styles.title} variant="title" color="inherit">
                    CARDÁPIO
                    </Typography>
                <IconButton color="inherit" aria-label="Menu" onClick={props.handleDialog}>
                    <Info />
                </IconButton>
            </Toolbar>
            <AboutDialog 
                handleClose={props.handleClose} 
                open={props.open} 
                handleDialog={props.handleDialog} 

                />            
        </AppBar>
    )
}

const styles = {
    root: {
        display: 'flex'
    },
    img: {
        maxWidth: 37,
        marginBottom: '5%'
    },
    title: {
        textAlign: 'center',
        marginLeft: '2%',
        flexGrow: 1
    }
}

// Scania blue HEX #041E42
// Scania White HEX #FAFAFA
// Scania Red HEX #D6001C

export default Navbar;