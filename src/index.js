import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyBWKQmo2izp7Hy3FqOjNg9SPq5MRKyoDgA';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'HareKrishna'}, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
      return (
        <div>
          <SearchBar />
          <VideoList videos={ this.state.videos } />
        </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
