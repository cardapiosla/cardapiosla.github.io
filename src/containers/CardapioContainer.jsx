import React, { Component } from 'react';
import Moment from 'moment';
import { Select, FormControl, FormHelperText, MenuItem }
    from '@material-ui/core';

// import CardapioModel from '../models/CardapioModel';
import MenuItems from '../components/MenuItems';
import Footer from '../components/Footer';

class CardapioContainer extends Component {

    constructor() {
        super();
        this.state = { cardapio: [], menu: {}, selectedDay: '', loadingData: true, reloadTime: 0 };
    }

    componentDidMount() {
        this.renderCardapio();
    }

    renderCardapio = () => {
        getCardapio((data) => {
            data = data.sort((a, b) =>
                new Date(a.dayReference) - new Date(b.dayReference)
            );
            this.setState({
                cardapio: data,
                loadingData: false
            });
            this.getToday();
        });
    }

    getToday = () => {
        const today = Moment(new Date()).format('DD/MM/YY');
        const selected = this.state.cardapio.find(x =>
            Moment(x.dayReference).format('DD/MM/YY') === today);
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
        const lastUpdate = cardapio[0] || '0';
        const dayList = cardapio.map(c => {
            return (
                <MenuItem key={c._id} value={c.dayReference}>
                    {Moment(c.dayReference).format('DD/MM/YY')}
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
                <Footer lastUpdate={Moment(lastUpdate.uploadedIn).format('DD/MM/YY')} />
                {/* <Footer lastUpdate={Moment(cardapio[0].uploadedIn).format('DD/MM/YY')}/> */}
            </div>
        );
    }
}

function getCardapio(callback) {
    fetch('https://api.mlab.com/api/1/databases/cardapiosla/collections/cardapio?apiKey=RaMXCGwuJgzDb0wApqf8szcbN36SncAL')
        .then(res => res.json())
        .then(data => callback(data))
        .catch((err) => console.error(err));
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

const styles = {
    root: {
        width: '100%'
    },
    formControl: {
        marginTop: '2%',
        marginLeft: '30%',
        width: '50%'
    }
}


export default CardapioContainer;