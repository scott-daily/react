import React from 'react';
import axios from 'axios'; 
import SearchBar from './SearchBar';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
           const response = await axios.get(`https://api.unsplash.com/search/photos`, {
                params: { query: term },
                headers: {
                    Authorization: 'Client-ID wkJitFwaHhTBl-SZnbTMRgNLyuYTny74u38pCCsDRo8'
                }
            });
            
            console.log(this);
            this.setState( {images: response.data.results});
    };

    render() {
        return (
            <div className="ui container" style={{marginTop: '15px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <div>
                    Found: {this.state.images.length} images
                </div>
            </div>
        );
    }
}

export default App;