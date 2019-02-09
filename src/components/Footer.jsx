import React from 'react'
import Moment from 'react-moment';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import DownloadDialog from './DownloadDialog';

export default (props) => {
    
    return (
        <AppBar position="static" style={{background: '#041E42'}}>
            <Toolbar style={styles.toolbar}>
                <Typography style={styles.content} variant="subheading" color="inherit">
                    Ultima atualização:
                    <Moment parse={"YYYY-MM-DD"} format="DD/MM/YYYY"> {props.lastUpdate} </Moment>
                </Typography>
            </Toolbar>
            <Toolbar style={styles.warningBar}>
                {/* <Typography style={styles.warning}> */}
                    {/* <a onClick={props.handleDownloadDialog}>Instruções para download</a> */}
                {/* </Typography> */}
                <Typography style={styles.warning}>
                    Este não é um Aplicativo oficial
                </Typography>
            </Toolbar>
            <DownloadDialog 
                handleClose={props.handleDownloadClose}
                open={props.downloadOpen}
                handleDialog={props.handleDownloadDialog}
            />
        </AppBar>
    )
}

const styles = {
    toolbar: {
        display: 'flex',
        justifyContent: 'center',  
    },
    content: {
        textAlign: 'center',
        fontSize: '2.5vh' 
    },
    warningBar : {
        display: 'flex', 
        justifyContent: 'center'       
    },
    warning: {
        display: 'flex',
        fontSize: '1.75vh',
        color: 'white'
    }
}