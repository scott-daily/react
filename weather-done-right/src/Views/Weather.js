import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Components/Loader';
import HistoricalForm from '../Components/HistoricalForm';

function Weather() {    

    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');

    const [precip, setPrecip] = useState('');
    const [snowFall, setSnowFall] = useState('');
    const [averageTemp, setAverageTemp] = useState('');
    const [minTemp, setMinTemp] = useState('');
    const [maxTemp, setMaxTemp] = useState('');
    const [windDirect, setWindDirect] = useState('');
    const [windSpeed, setWindSpeed] = useState('');
    //const [weatherCode, setWeatherCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    let weatherReport = <div></div>;

    /*window.navigator.geolocation.getCurrentPosition(
        (position) => {let lat = position.coords.latitude},
        (error) => console.log(error)
    );*/

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        setAddress(event.target[0].value);
        setDate(event.target[1].value);
    };

    function degreeToCompass(num) {
        var val = Math.floor((num / 22.5) + 0.5);
        var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    };

    useEffect(() => {
        if (address !== "") {
            let geocodeURL = `https://geocode.xyz/${address}?json=1`;

            axios.get(geocodeURL)
                .then(response => {
                    let lon = response.data.longt;
                    let lat = response.data.latt;
                    return axios({
                        url: `https://api.meteostat.net/v2/point/daily?lat=${lat}&lon=${lon}&alt=104&start=${date}&end=${date}`,
                        method: 'get',
                        headers: { "x-api-key":"TyVVxAqt4FNYXF99SjBD1CS8wYDI24rS" }
                      }).then(res => {
                        setPrecip((res.data.data[0].prcp / 25.4).toFixed(2));
                        setSnowFall((res.data.data[0].snow / 25.4).toFixed(2));
                        setAverageTemp(((res.data.data[0].tavg * (9/5)) + 32).toFixed(2));
                        setMinTemp(((res.data.data[0].tmin * (9/5)) + 32).toFixed(2));
                        setMaxTemp(((res.data.data[0].tmax * (9/5)) + 32).toFixed(2));
                        setWindDirect(degreeToCompass(res.data.data[0].wdir));
                        setWindSpeed((res.data.data[0].wspd / 1.609).toFixed(2));
                        //setWeatherCode(res.data.data[0].coco);

                        setLoading(false);
                        setSubmitted(true);

                      });
                }, (error) => {
                    console.log(error);
                })};
            }, [address, date]);

            if (loading) {
                weatherReport = <Loader></Loader>;
            }
            else if (submitted)  {
                weatherReport =
                <div className="ml-8 max-w-sm rounded shadow-sm">
                    <div className="border shadow-sm pl-2 my-2">Precipitation (in): <b>{precip}</b></div>
                    <div className="border shadow-sm pl-2 my-2">Snowfall (in): <b>{snowFall}</b></div>
                    <div className="border shadow-sm pl-2 my-2">Average Temperature (f): <b>{averageTemp}</b></div>
                    <div className="border shadow-sm pl-2 my-2">Minimum Temperature (f): <b>{minTemp}</b></div>
                    <div className="border shadow-sm pl-2 my-2">Maximum Temperature (f): <b>{maxTemp}</b></div>
                    <div className="border shadow-sm pl-2 my-2">Average Wind Direction: <b>{windDirect}</b></div>
                    <div className="border shadow-sm pl-2 my-2">Average Wind Speed (mp/h): <b>{windSpeed}</b></div>
                </div> 
            };
        

    return (
        <div>
            <h1 className="mb-4 text-lg ml-8">Daily Historical Weather </h1>
            <form onSubmit={handleFormSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label className="mr-2 pl-1 block text-gray-700 text-md font-bold mb-2">Enter the location</label>
                <input 
                    type = "text" 
                    name="address"
                    placeholder={"Location"}
                    className="shadow appearance-none border rounded py-2 px-3 text-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                />
                <div>
                    <label className="mr-2 mt-2 pl-1 block text-gray-700 text-md font-bold mb-2">Enter the date</label>
                        <input 
                            type = "text" 
                            name="date"
                            placeholder={"YYYY-MM-DD"}
                            className="shadow appearance-none border rounded py-2 px-3 text-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        />
                </div>
            <input type="submit" 
                value="Submit" 
                className="cursor-pointer bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5"
                >
            </input>
        </form>
                <div className="block mt-12 text-xl">
                        {weatherReport}
                </div>
        </div>
    );
};

export default Weather;