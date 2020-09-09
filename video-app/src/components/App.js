import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from '../apis/youtube'


const App = () => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onSearchSubmit('react js');
    }, []);

    onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
             params: { q: term }
         });

         setVideos(response.data.items) 
         setSelectedVideo(response.data.items[0]);
    };

    onVideoSelect = (video) => {
        setSelectedVideo(video);
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

