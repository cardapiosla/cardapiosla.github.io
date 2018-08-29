import React from 'react'
import { Dialog, DialogTitle, Divider, List, ListItem, ListItemText } from '@material-ui/core';

export default (props) => {
  return (
    <Dialog open={props.open} onClick={props.handleClose}>
      <DialogTitle id="dialog-title">INFORMAÇÕES</DialogTitle>
      <List style={styles.list}>
        <ListItem>
          <ListItemText primary="Criado por" secondary="Hugo Peres"/>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Contato" secondary="hugo-pdf@hotmail.com" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Repositorio" secondary="https://github.com/hugueds/cardapio-sla/" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Data de Criação" secondary="25/08/2018" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Ultima atualização" secondary="28/08/2018" />
        </ListItem>
      </List>
    </Dialog>
  )
}

const styles = {
  root: {

  },
  title: {

  },
  line: {

  }, 
  list: {
    fontSize: 5
  }
}