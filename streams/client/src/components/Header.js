import React from 'react';
import { Link } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamDelete from './streams/StreamDelete';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Streams
            </Link>
            <div className="right menu">
                <Link to="/" classNAme="item">
                    All Streams
                </Link>
            </div>
        </div>
    )
}

export default Header;