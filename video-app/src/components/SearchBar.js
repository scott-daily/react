import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    onSearchSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onSearchSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                            <input 
                                type="text"
                                value={this.state.term}
                                onChange={(e) => this.setState({term: e.target.value})}
                            />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;