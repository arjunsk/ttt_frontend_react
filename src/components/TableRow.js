import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableRow extends Component {
  render() {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
         {this.props.word.value}
        <span className="badge badge-primary badge-pill">{this.props.word.count}</span>
      </li>
    );
  }
}
TableRow.propTypes = {
  word: PropTypes.object
};

export default TableRow;
