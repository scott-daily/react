import React from 'react'


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
    const text = season === 'summer' ? 'Let\'s hit the beach' : 'Burr, it\'s chilly';
    const icon = season === 'winter' ? 'snowflake' : 'sun';
    return (
        <div>
            <i className={`${icon} icon`} />
            <h1>{text}</h1>
            <i className={`${icon} icon`} />
        </div>
    );
};

export default SeasonDisplay