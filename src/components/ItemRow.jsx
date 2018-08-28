import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemRow extends Component {    

  render() {
    const {items} = this.props;
    const rd = items.map(i => {
        return ({i})
    });
    return (
      {rd}
    )
  }
}

ItemRow.propTypes = {
  items: PropTypes.array.isRequired
}