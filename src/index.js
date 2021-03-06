import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBWKQmo2izp7Hy3FqOjNg9SPq5MRKyoDgA';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
          videos: [],
          selectedVideo: null,
          searchTerm: 'Dhoni' 
        };

        this.videoSearch(this.state.searchTerm);
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
              videos: videos,
              selectedVideo: videos[0],
              searchTerm: term 
            });
        });
    }

    render() {
      //const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
      const searchTerm = this.state.searchTerm;

      return (
        <div>
          <SearchBar searchTerm={this.state.searchTerm} onSearchTermChange={_.debounce((term) => this.videoSearch(term), 300)}/>
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList 
            onVideoSelect = {
              (selectedVideo) => this.setState({selectedVideo})
              } 
            videos = {this.state.videos}
            />
        </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
