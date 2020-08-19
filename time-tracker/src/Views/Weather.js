import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Weather() {    

    const [lon, setLon] = useState("");
    const [lat, setLat] = useState("");
    const [address, setAddress] = useState("")

    const handleAddressSubmit = (event) => {
        event.preventDefault();
        alert(`Submitting Address ${address}`)
        setAddress({address})
    }

    let geocodeURL = `https://geocode.xyz/${address}?json=1`

        useEffect(() => {
            axios.get(geocodeURL)
                .then(response => {
                    setLon(response.longt)
                    console.log(response)
                    setLat(response.latt)
                })
            }, [address])

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
                            type="text"
                            value = {address}
                            onChange={e => setAddress(e.target.value)} 
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <div>
                    The address is: {address}
                </div>
        </div>
    )
}

export default Weather