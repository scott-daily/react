import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
           const response = await unsplash.get('/search/photos', {
                params: { query: term }
            });

            this.setState( {images: response.data.results} );
    };

    render() {
        return (
            <div className="ui container" style={{marginTop: '15px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <div>
                <ImageList images={this.state.images}/>
                </div>
            </div>
        );
    }
}

export default App;