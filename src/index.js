import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API = 'AIzaSyDu1kyvI6WQ0WlKZJey_L8aM4mGpawavkg';


class APP extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API, term: 'clapton' }, videos => this.setState({ videos }));
  }
  render() {
    return (
      <div>
          Learning React.jsx
          <hr />
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<APP />, document.querySelector('.container'));

