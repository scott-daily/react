import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Weather() {    

    const [address, setAddress] = useState("")
    const [totalRainfall, setTotalRainfall] = useState('')
    const [loading, setLoading] = useState(false)
    let weatherReport = <div></div>

    const handleAddressSubmit = (event) => {
        event.preventDefault();
        setLoading(true)
        setAddress(event.target[0].value)
    }

    useEffect(() => {
        if (address !== "") {
            let geocodeURL = `https://geocode.xyz/${address}?json=1`

            axios.get(geocodeURL)
                .then(response => {
                    let lon = response.data.longt
                    let lat = response.data.latt
                    return axios({
                        url: `https://api.meteostat.net/v2/point/hourly?lat=${lat}&lon=${lon}&alt=104&start=2020-05-19&end=2020-05-19`,
                        method: 'get',
                        headers: { "x-api-key":"TyVVxAqt4FNYXF99SjBD1CS8wYDI24rS" }
                      }).then(res => {
                        console.log(`Axios Call completed: ${res}`)
                        console.log("Hourly Precipitation in mm: " + res.data.data[13].prcp)
                        console.log("Hourly Temperature in celcius: " + res.data.data[13].temp)
                        console.log("Relative Humidity percent: " + res.data.data[13].rhum)
                        console.log("wind direction in degrees: " + res.data.data[13].wdir)
                        console.log("average wind speed in km/h: " + res.data.data[13].wspd)
                        console.log("weather code: " + res.data.data[13].coco)

                        let totalPrecip = 0
                        let precipNull = false
                        for (let i = 0; i < 24; i++) {
                            if (res.data.data[i].prcp != null) {
                                totalPrecip += res.data.data[i].prcp;
                            } else {
                                precipNull = true
                            }
                        }
                        setLoading(false)
                        if (!precipNull) {
                            setTotalRainfall(totalPrecip)
                        } else {
                            setTotalRainfall('No data available for this date.')
                        }
                      })
                }, (error) => {
                    console.log(error)
                })}
            }, [address])

            if (loading) {
                weatherReport = <p className="ml-10">...loading weather report</p>
            }
            else {
                weatherReport =
                <div className="ml-5">
                    Total Rainfall in mm on 2020-05-19: <b>{totalRainfall}</b>
                </div> 
            }
        

    return (
        <div>
            <h1 className="mb-4 text-lg ml-8">Historical Weather Info </h1>
                <form onSubmit={handleAddressSubmit}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <label className="mr-2 pl-1 block text-gray-700 text-md font-bold mb-2">Enter a location</label>
                        <input 
                            type = "text" 
                            name="address"
                            placeholder={"Location"}
                            className="shadow appearance-none border rounded py-2 px-3 text-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        />
                    <input type="submit" 
                        value="Submit" 
                        className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                        >
                    </input>
                </form>
                <div className="block mt-12 text-xl">
                        {weatherReport}
                </div>
        </div>
    )
}

export default Weather