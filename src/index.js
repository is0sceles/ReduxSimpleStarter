import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API = 'AIzaSyDu1kyvI6WQ0WlKZJey_L8aM4mGpawavkg';

YTSearch({ key: API, term: 'clapton' }, data => console.log(data));

const APP = () => (
  <div>
      Learning React.jsx
      <hr />
    <SearchBar />
  </div>
  );

ReactDOM.render(<APP />, document.querySelector('.container'));

