import React, {useEffect, useState} from 'react'

import axios from 'axios'

import Image from './Image'

const Temperature = ({temp}) => <div><b>temperature:</b> {temp}</div>

const Weather = ({capital, src, alt, title, width, height, windSpeed, windDirection}) => {
    const api_key = process.env.REACT_APP_API_KEY

    const [weather, setWeather] = useState('')
    const [temperature, setTemperature] = useState('')
    const [weatherImageSrc, setWeatherImageSrc] = useState('')
    const [weatherImageAlt, setWeatherImageAlt] = useState('')
    const [weatherTitle, setWeatherTitle] = useState('')
 

    const weatherString = 'http://api.weatherstack.com/current?access_key='.concat(api_key, '&query=', capital)
    console.log(weatherString)

    const hook = () => {
        console.log('Weather effect')


        axios
            .get(weatherString)
            .then(response => {
                console.log('Weather promise fulfilled')
                setWeather(response.data)
            })
    }

   

    useEffect(hook, [])

    return !(weather.current == null)
        ? <>
            <h2>Weather in {capital}</h2>
            
            <Temperature temp={weather.current.temperature} />
            <Image src={weather.current.weather_icons} alt={weather.current.weather_descriptions} title={'Weather in '.concat(capital)} />
            <div><b>wind:</b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</div>
          </>
        : <>
            <h2>Weather in {capital}</h2>
            <Temperature temp='not available' />
            <Image src={weather} alt=' weather description not available' title={'Weather in '.concat(capital)} />
            <div><b>wind:</b> not available</div>
          </>
}

export default Weather