import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Info  from '@material-ui/icons/Info';

const iconUrl = "http://static.scania.com/resources/logotype/favicon/android-icon-72x72.png";

const Navbar = (props) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit" aria-label="Menu">
                    <img style={styles.img} src={iconUrl} alt="" />
                </IconButton>
                <Typography style={styles.title} variant="title" color="inherit">
                    CARDÁPIO
                    </Typography>
                <IconButton color="inherit" aria-label="Menu">
                    <Info />
                </IconButton>
            </Toolbar>
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

export default Navbar;