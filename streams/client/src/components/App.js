import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
            </div>
            </BrowserRouter>
        </div>
    )
}

export default App;