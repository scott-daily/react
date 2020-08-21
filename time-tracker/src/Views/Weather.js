import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Weather() {    

    const [address, setAddress] = useState("")

    const handleAddressSubmit = (event) => {
        event.preventDefault();
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
                        url: `https://api.meteostat.net/v2/point/hourly?lat=${lat}&lon=${lon}&alt=104&start=2017-05-19&end=2017-05-19`,
                        method: 'get',
                        headers: { "x-api-key":"TyVVxAqt4FNYXF99SjBD1CS8wYDI24rS" }
                      }).then(res => {
                        console.log(`Axios Call completed: ${res}`)
                        console.log(res.data.data[0].prcp)
                      })
                }, (error) => {
                    console.log(error)
                })}
            }, [address])
        

    return (
        <div>
            <h1 className="mb-3">Historical Weather Info</h1>
                <form onSubmit={handleAddressSubmit}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <label className="mr-2 pl-1 block text-gray-700 text-sm font-bold mb-2">Enter an address</label>
                        <input 
                            type = "text" 
                            name="address"
                            placeholder={"Enter a location"}
                            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        />
                    <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"></input>
                </form>
        </div>
    )
}

export default Weather