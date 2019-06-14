import React from 'react'
import moment from 'moment';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// import DownloadDialog from './DownloadDialog';

export default (props) => {   
    
    return (
        <AppBar position="static" style={{background: '#041E42'}}>
            <Toolbar style={styles.toolbar}>
                <Typography style={styles.content} variant="subheading" color="inherit">
                    Ultima atualização: { moment(props.lastUpdate).format('DD/MM/YYYY - HH:mm:ss') }                    
                </Typography>
            </Toolbar>
            <Toolbar style={styles.warningBar}>
                {/* <Typography style={styles.warning}> */}
                    {/* <a onClick={props.handleDownloadDialog}>Instruções para download</a> */}
                {/* </Typography> */}
                <Typography style={styles.warning}>
                    Este não é um Aplicativo oficial, quaisquer divergências nas informações apresentadas não é de responsabilidade do serviço de alimentação
                </Typography>
            </Toolbar>
            {/* <DownloadDialog 
                handleClose={props.handleDownloadClose}
                open={props.downloadOpen}
                handleDialog={props.handleDownloadDialog}
            /> */}
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