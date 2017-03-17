import React, { Component } from 'react';


class searchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(e) {
    e.preventDefault();
    this.setState({ term: e.target.value });
  }
  render() {
    return (
      <div>
        <h3> {this.state.term} </h3>
        <input onChange={this.onInputChange} />
      </div>
    );
  }
}

export default searchBar;
