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
        <CardapioContainer />
      </React.Fragment>
    );
  }
}

export default App;
