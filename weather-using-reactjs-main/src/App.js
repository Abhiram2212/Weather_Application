import React, { useState } from 'react';
import axios from 'axios';
import ShowTemp from './ShowTemp';

function App() {
    const [city, setCity] = useState("");
    const [data, setData] = useState({
        description: "",
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        humidity: 0,
        sunrise: 0,
        sunset: 0,
        country: "",
    });

    const kelvinToCelsius = (kelvin) => {
        return kelvin - 273.15; 
    };

    const handleClick = () => {
        axios.get(`http://127.0.0.1:8000/api/get-weather/?city=${city}`)
            .then((response) => {
                setData({
                    description: response.data.weather[0].description,
                    temp: kelvinToCelsius(response.data.main.temp),
                    temp_max: kelvinToCelsius(response.data.main.temp_max), // Convert to Celsius
                    temp_min: kelvinToCelsius(response.data.main.temp_min), // Convert to Celsius
                    humidity: response.data.main.humidity,
                    sunrise: response.data.sys.sunrise,
                    sunset: response.data.sys.sunset,
                    country: response.data.sys.country,
                });
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
            });
    };

    return (
        <>
            <div className='container text-center my-2'>
                <h1>Weather App Using React JS</h1>
                <input
                    type="text"
                    className='from-control'
                    value={city}
                    onChange={(e) => {
                        setCity(e.target.value);
                    }}
                />
                <button className='btn btn-primary mx-2' type='submit' onClick={handleClick}>get temp</button>
            </div>

            <ShowTemp text={data}></ShowTemp>
        </>
    );
}

export default App;
