import React, { Component } from 'react';
import Moment from 'react-moment';
import moment from 'moment/moment'
import 'moment/locale/pt-br'

import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';

// import CardapioModel from '../models/CardapioModel';
import MenuItems from '../components/MenuItems';
import Footer from '../components/Footer';


Moment.globalMoment = moment;
Moment.globalLocale = 'pt-BR';

class CardapioContainer extends Component {

    state = {
        cardapio: [],
        menu: {},
        selectedDay: '',
        loadingData: true,
        reloadTime: 0,
    }

    componentDidMount() {
        this.renderCardapio();
    }

    renderCardapio = () => {
        getCardapio((data) => {
            const sortedData = data.sort((a, b) =>
                new Date(a.dayReference) - new Date(b.dayReference)
            );
            this.setState({
                cardapio: sortedData,
                loadingData: false
            });
            this.getToday();
        });
    }

    getToday = () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selected = this.state.cardapio.find(x => {
            const xDate = new Date(x.dayReference)
            return xDate.getDate() === today.getDate();
        });
        this.setState({
            selectedDay: selected.dayReference,
            menu: selected.menu
        })
    }

    handleChange = (e) => {
        const menu = this.state.cardapio.find(x => x.dayReference === e.target.value).menu;
        this.setState({
            selectedDay: e.target.value,
            menu: menu
        })
    }

    render() {
        const { cardapio } = this.state;
        const lastUpdate = cardapio[0] || '';
        const dayList = cardapio.map(c => {
            return (
                <MenuItem key={c._id} value={c.dayReference}>
                    <Moment format="dddd  -  DD/MM/YY">{c.dayReference}</Moment>
                </MenuItem>);
        });
        return (
            <div style={styles.root}>

                <FormControl style={styles.formControl}>
                    <Select
                        style={{ background: '#fbffd3', fontSize: '2.75vh' }}
                        value={this.state.selectedDay}
                        onChange={this.handleChange} >
                        {dayList}
                    </Select>
                    <FormHelperText>Escolha um dia da Semana</FormHelperText>
                </FormControl>

                <MenuItems menu={this.state.menu} />

                <Footer lastUpdate={lastUpdate.uploadedIn} />

            </div>
        );
    }
}

function getCardapio(callback) {
    const api = 'https://cardapio-sla-default-rtdb.firebaseio.com/cardapio.json'
    fetch(api)
        .then(res => res.json())
        .then(data => callback(data))
        .catch((err) => console.error(err));
}

const styles = {
    root: {
        width: '100%'
    },
    formControl: {
        marginTop: '1.75%',
        marginLeft: '20%',
        width: '60%'
    }
}



// function handleError() {        
//     const interval = setInterval(() => {
//         this.state.reloadTime--;
//     }, 1000)
//     setTimeout(() => {
//         clearInterval(interval);
//         console.log('Tentando novamente');
//         this.renderCardapio();
//     }, 5000);
// }

// CardapioContainer.propTypes ={
//     cardapio: PropTypes.instanceOf(CardapioModel).isRequired
// }


export default CardapioContainer;