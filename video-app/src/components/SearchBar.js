import React, { useState } from 'react';

const SearchBar = ({onFormSubmit}) => {

    const [term, setTerm] = useState('');

    const onSearchSubmit = event => {
        event.preventDefault();
        onFormSubmit(term);
    }

    const onInputChange = (event) => {
        setTerm(event.target.value);
    }

    return (
        <div className="ui segment search-bar">
            <form className="ui form" onSubmit={onSearchSubmit}>
                <div className="field">
                    <label>Video Search</label>
                        <input 
                            type="text"
                            value={term}
                            onChange={onInputChange}
                        />
                </div>
            </form>
        </div>
    )
}


export default SearchBar;