import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { Select, FormControl, FormHelperText, InputLabel, Input, MenuItem }
    from '@material-ui/core';

// import CardapioModel from '../models/CardapioModel';
import MenuItems from '../components/MenuItems';


class CardapioContainer extends Component {

    constructor() {
        super();
        this.state = {cardapio: [], menu: {}, selectedDay: ''}
    }

    componentDidMount() {
        getCardapio((data) => {
            data = data.sort((a, b) => new Date(a.dayReference) - new Date(b.dayReference));
            this.setState({
                cardapio: data,
                loadingData: false
            });
            // this.updateDay(new Date().toISOString());
        });    
    }

    handleChange = (e) => {
        const menu = this.state.cardapio.find(x => x.dayReference == e.target.value).menu;
        console.log(menu)
        this.setState({
            selectedDay: e.target.value,       
            menu: menu
        })
    }

    render() {
        const { cardapio } = this.state;        
        const dayList = cardapio.map(c => {
            return (
                <MenuItem key={c._id} value={c.dayReference}>
                    { Moment(c.dayReference).format('DD/MM/YY') }
              </MenuItem>);
        });
        return (
            <div style={styles.root}>
            <FormControl style={styles.formControl}>                
                <Select
                    value={this.state.selectedDay}
                    onChange={this.handleChange} >
                    {dayList}
                </Select>
                <FormHelperText>Escolha um dia da Semana</FormHelperText>
            </FormControl>
            <MenuItems menu={this.state.menu} />
            </div>
        );
    }
}

function getCardapio(callback) {
    fetch('https://api.mlab.com/api/1/databases/cardapiosla/collections/cardapio?apiKey=RaMXCGwuJgzDb0wApqf8szcbN36SncAL')
        .then(res => res.json())
        .then(data => callback(data));
}

// CardapioContainer.propTypes ={
//     cardapio: PropTypes.instanceOf(CardapioModel).isRequired
// }

const styles = {
    root: {        
        width: '100%'
    },
    formControl: {
        marginTop: '1%',
        marginLeft: '30%',
        width: '50%'
    }
}


export default CardapioContainer;