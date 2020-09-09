import React, { useState } from 'react';

const SearchBar = ({onFormSubmit}) => {

    const [term, setTerm] = useState('');

    onSearchSubmit = event => {
        setTerm(event.target.value)
    }

    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onSearchSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                            <input 
                                type="text"
                                value={term}
                                onChange={onSearchSubmit}
                            />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;