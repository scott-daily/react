import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from '../apis/youtube'


class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    };

    onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
             params: { q: term }
         });

         this.setState( {videos: response.data.items, selectedVideo: null} );
 };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
        console.log(this.state.selectedVideo);
    }


    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onSearchSubmit}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        )
    }
}

export default App;

