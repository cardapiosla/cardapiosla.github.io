import React from 'react'
import { Dialog, DialogTitle, Divider, List, ListItem, ListItemText } from '@material-ui/core';

export default (props) => {
  const anchor = <a href="https://github.com/cardapiosla/cardapiosla.github.io"> https://github.com/cardapiosla/cardapiosla.github.io</a>;

  return (
    <Dialog open={props.open} onClick={props.handleClose}>
      <DialogTitle id="dialog-title">INFORMAÇÕES</DialogTitle>
      <List style={styles.list}>
        <ListItem>
          <ListItemText primary="Criado por" secondary="Hugo Peres - @SSBHPE" />
        </ListItem>
        <Divider />
        <ListItem onClick={() => window.location.href = 'mailto: hugo.freitas@scania.com?subject=Cardapio SLA'}>
          <ListItemText primary="Contato" secondary="hugo.freitas@scania.com" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Repositorio" secondary={anchor} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Data de Criação" secondary="25/08/2018" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Ultima atualização do software" secondary="16/02/2022" />
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