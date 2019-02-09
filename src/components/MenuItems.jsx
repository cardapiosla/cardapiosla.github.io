import React, { Component } from 'react';
import headers from '../data/MenuHeaders';

export default class Cardapio extends Component {

    render() {
        const { menu } = this.props;
        const listItems = headers.map((p, i) => (
            <React.Fragment key={i}>
                <div style={styles.menuHeader}> {p.header}</div>
                {
                    menu[p.property]
                        ? menu[p.property].map((m, j) => <div style={styles.menuValue} key={j}>- {m}</div>)
                        : null
                }
            </React.Fragment>
        ))
        return (
            <div style={styles.container}>
                {listItems}
            </div>
        )
    }
}

const styles = {
    container: {
        'width': '100%',
        marginBottom: '6%'
    },
    menuHeader: {
        marginLeft: '5%',
        fontSize: '1.7vh',
        marginTop: '2%',
        marginBottom: '1%',
        fontWeight: 'bold',
        color: '#D6001C'
    },
    menuValue: {
        marginLeft: '7.5%',
        marginTop: '0.5%',
        color: '#041E42',
        fontSize: '2vh'
    }
}
