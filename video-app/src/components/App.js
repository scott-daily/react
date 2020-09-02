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

         this.setState( {videos: response.data.items, selectedVideo: response.data.items[0]} );
 };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }


    render() {
        if (window.matchMedia("(max-width: 700px)").matches) {
            return (
                <div className="ui container">
                    <SearchBar onFormSubmit={this.onSearchSubmit}/>
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                </div>
            )
        } else {
            return (
                <div className="ui container">
                    <SearchBar onFormSubmit={this.onSearchSubmit}/>
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedVideo} />
                            </div>
                            <div className="five wide column">
                                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default App;

