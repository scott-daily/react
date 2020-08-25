import './SeasonDisplay.css';
import React from 'react'


const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it\'s cold',
        iconName: 'snowflake'
    }
};


const getSeason = (lat, month) => {
    if (lat > 0 ) {
        if (month >= 3 && month <= 8) {
            return 'summer';
        }
        else {
            return 'winter';
        }
    }
    else {
        if (month < 3 && month > 8) {
            return 'summer';
        }
        else {
            return 'winter';
        }
    }
}


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const {text, iconName} = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay