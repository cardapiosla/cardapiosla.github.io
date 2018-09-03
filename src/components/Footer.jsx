import React from 'react'
import Moment from 'react-moment';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

export default (props) => {
    const {lastUpdate} = props;
    return (        
        <AppBar position="static">
            <Toolbar style={styles.toolbar}>
                <Typography style={styles.content} variant="subheading" color="inherit">
                    Ultima atualização: 
                    <Moment parse={"YYYY-MM-DD"} format="DD/MM/YYYY"> {props.lastUpdate} </Moment>
                </Typography>                
            </Toolbar>
        </AppBar>
    )
}

const styles = {
    toolbar: {
        display: 'flex'
    },
    content: {
        textAlign: 'center'
    }
}