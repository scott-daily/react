import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'


const App = () => {

    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position.coords.latitude),
        (error) => console.log(error)
    );

    return (
        <div>
            
            <SeasonDisplay/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
