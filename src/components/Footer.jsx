import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core';

export default (props) => {
    return (
        <AppBar position="static">
            <Toolbar style={styles.toolbar}>
                <Typography style={styles.content} variant="subheading" color="inherit">
                    Ultima atualização: {props.lastUpdate}
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