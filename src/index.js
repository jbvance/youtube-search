import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyD8fLlRTTpQ45vLCNBFa_ENk7c-XUOmbmA';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      videos : [],
      selectedVideo: null
    };
    this.videoSearch('React.js')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // Call lodash debounce in order to only allow the search to execute once
    // every 300 milliseconds
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                   videos={this.state.videos} />
      </div>);
  }
  
}

ReactDOM.render(<App />, document.querySelector('.container'));
