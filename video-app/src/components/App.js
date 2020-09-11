import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import useVideos from '../hooks/useVideos';

const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('c++')

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    if (window.matchMedia("(max-width: 700px)").matches) {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={search}/>
                <VideoDetail video={selectedVideo} />
                <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
            </div>
        )
    } else {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={search}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;

