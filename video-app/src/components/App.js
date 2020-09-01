import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube'


class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: {}
    };

    onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
             params: { q: term }
         });

         this.setState( {videos: response.data.items} );
 };


    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onSearchSubmit}/>
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

export default App;

