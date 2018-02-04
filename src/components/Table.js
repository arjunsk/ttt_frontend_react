import React, { Component } from 'react';
import TableRow from './TableRow';
import PropTypes from 'prop-types';
import {connect} from "react-redux"

class Table extends Component {
  
  componentWillReceiveProps(nextProps) {
    if(this.props.words !== nextProps.words) {
         return true;
     }else{
         return false;// no re-rendering is required
     }
  }

  render() {
    return (
      <ul className="list-group">
        {this.props.words.map((word, rowid)=> {
          return <TableRow key={rowid} word={word}/>
        })}
      </ul>
    );
  }

}

Table.propTypes = {
  words: PropTypes.array
};


function mapStateToProps(store){
  return {
    words : store.wordsReducer.words
  }
}

export default connect( mapStateToProps)(Table);