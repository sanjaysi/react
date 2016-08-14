import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBWKQmo2izp7Hy3FqOjNg9SPq5MRKyoDgA';

// Create a new component. This component should produce some HTML
// const is ES16
// Following is a JS function that returns JSX
// JSX is not understood by browser
// Hence it is transpiled to JS
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
