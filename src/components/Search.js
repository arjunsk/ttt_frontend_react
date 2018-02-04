import React, { Component } from 'react';
import {connect} from "react-redux"

import {fetch_words} from "../actions/action_fetch"

var search_html_dom;

class Search extends Component {

  constructor(props) {
      super(props);
      this.search= this.search.bind(this);
  }

  componentDidMount() {
    search_html_dom = document.getElementById("search_dom");
  }

  search(event) {
      event.preventDefault();
      let count = search_html_dom.value;
      if(count!=""){
        this.props.fetch_words(count);
      }
  };

  render() {
    return (

    <form  className="input-group" method="POST" action="" data-toggle="validator">
            
      <input type="number" className="form-control" id="search_dom" name="count" placeholder="Enter a count" required/>

      <span className="input-group-btn">
        <button type="submit" className="btn btn-default" onClick={this.search} >
          <i className="fa fa-file-o" aria-hidden="true"></i> &nbsp; Find Words
        </button>
      </span>
    </form>

    );
  }
}


function mapDispatchToProps(dispatch) {
    return({
      fetch_words: (count) => {dispatch(fetch_words(count))}
    })
}
function mapStateToProps(store){
  return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);


