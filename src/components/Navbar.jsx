import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const Navbar = (props) => {
    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        CARDÁPIO
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Navbar;