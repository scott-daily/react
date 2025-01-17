import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';


class App extends React.Component {

    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        console.log('About to get the users geolocation');
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log('got the location');
                this.setState({lat: position.coords.latitude});
            },
            (error) => {
                this.setState({errorMessage: error.message});
            }
        );
    };

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message='Waiting for location'/>
    }

    render() {
       return (
           <div className="border red">
                {this.renderContent()}
           </div>
       );
    };
};

ReactDOM.render(<App />, document.querySelector('#root'));
