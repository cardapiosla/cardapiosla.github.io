import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CardapioContainer from './containers/CardapioContainer';

class App extends Component {
  state = {
    dialogOpen: false
  }

  handleDialog = () => {
    const state = this.state.dialogOpen;
    this.setState({
      dialogOpen: !state
    })
  }

  handleDownloadDialog = () => {
    const state = this.state.dialogOpen;
    this.setState({
      dialogDownloadOpen: !state
    })
  }

  handleClose = () => {
    this.setState({
      dialogOpen: false
    })
  }

  handleDownloadClose = () => {
    this.setState({
      dialogDownloadOpen: false
    })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar
          open={this.state.dialogOpen}
          handleDialog={this.handleDialog}
          handleClose={this.handleClose}
        />
        <div style={{ width: '50%', margin: '0 auto', textAlign: 'center', fontSize: '24px' }}>

          <p>
            Obrigado pela confiança no trabalho por todos estes anos.
          </p>
          <p>Em breve o cardápio Mobile estará disponível oficialmente para acesso a todos colaboradores
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
