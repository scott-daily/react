import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from '../apis/youtube'
import { render } from '@testing-library/react';


const App = () => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onSearchSubmit('react js');
    }, []);

    const onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
             params: { q: term }
         });

         setVideos(response.data.items) 
         setSelectedVideo(response.data.items[0]);
    };

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    } 

     render()
        if (window.matchMedia("(max-width: 700px)").matches) {
            return (
                <div className="ui container">
                    <SearchBar onFormSubmit={onSearchSubmit}/>
                    <VideoDetail video={selectedVideo} />
                    <VideoList onVideoSelect={onVideoSelect} videos={videos} />
                </div>
            )
        } else {
            return (
                <div className="ui container">
                    <SearchBar onFormSubmit={onSearchSubmit}/>
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={selectedVideo} />
                            </div>
                            <div className="five wide column">
                                <VideoList onVideoSelect={onVideoSelect} videos={videos} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

export default App;

