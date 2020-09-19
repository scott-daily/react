import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <div>Home</div>
            <br />
            <Link to="/About">About</Link>
        </div>

    )
}

export default HomePage;