import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardapioModel from '../models/CardapioModel';
import ItemRow from './ItemRow';

const objMap = [
    { 'header': 'ENTRADA', 'property': 'entrance' },
    { 'header': 'PRATO 1', 'property': 'plate1' },
    { 'header': 'PRATO 2', 'property': 'plate2' },
    { 'header': 'SOBREMESA', 'property': 'dessert1' },
    { 'header': 'OPÇÃO', 'property': 'option' },
    { 'header': 'GRILL', 'property': 'grill' },
    { 'header': 'GOURMET', 'property': 'gourmet' },
    { 'header': 'SOBREMESA 2', 'property': 'dessert2' },
    { 'header': 'SOBREMESA 3', 'property': 'dessert3' },

]

export default class Cardapio extends Component {

    render() {
        const { menu } = this.props;
        const listItems = objMap.map((p, i) => (            
            <React.Fragment key={i}>
                <div style={styles.menuHeader}>  {p.header}</div>
                {
                    menu[p.property] ? 
                    menu[p.property].map((m,j) => <div style={styles.menuValue} key={j}>- {m}</div>) : null
                }                
            </React.Fragment>
        ))
        return (
            <React.Fragment >
                {listItems}
            </React.Fragment>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        'flex': 1,
        'width': '100%',
        'backgroundColor': '#ffe3a0',
        marginBottom: '4%'
    },
    menuHeader: {
        marginLeft: '5%',
        fontSize: 13,
        marginTop: '2%',
        'fontWeight': 'bold',
        'color': '#873d0c'
    },
    menuValue: {
        marginLeft: '7.5%',
        marginTop: '1%',
        'color': '#0c3987'
    }
}
