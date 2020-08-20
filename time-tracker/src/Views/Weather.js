import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Weather() {    

    const [lon, setLon] = useState("");
    const [lat, setLat] = useState("");
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
                    setLon(parseFloat(response.data.longt))
                    setLat(parseFloat(response.data.latt))
                }, (error) => {
                    console.log(error)
                })}
            }, [address])

        if (lon !== "" && lat !== "") {
            console.log(lon)
            console.log(lat)
        }
            
    //useEffect(() =>  {
    //    axios.get()
    //}
    

    return (
        <div>
            <h1>Historical Weather Info</h1>
                <form onSubmit={handleAddressSubmit}>
                    <label>Enter an address to get the weather history
                        <input 
                            type = "text" 
                            placeholder={"Enter a complete address"} 
                            name="address"
                            //onChange={e => setAddress(e.target.value)} 
                        />
                    </label>
                    <input type="submit" value="Submit"
                    /*onClick={e => setAddress(e.target.value)}*/ />
                </form>
        </div>
    )
}

export default Weather