import { useState, useRef } from 'react'
import './App.css'
import axios from 'axios'

import WeatherInformations from './components/WeatherInformations/WeatherInformations'
import WeatherInformationsFiveDays from './components/WeatherInformationsFiveDays/WeatherInformationsFiveDays'

function App() {
  const [weather, setWeather] = useState()
  const [weatherFiveDays, setWeatherFiveDays] = useState()

  const inputRef = useRef()

  async function SearchCity() {

    const city = inputRef.current.value
    const key = "152b299cdfaed83cabfc715c16249920"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const urlFiveDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfoFiveDays = await axios.get(urlFiveDays)

    setWeather(apiInfo.data)
    setWeatherFiveDays(apiInfoFiveDays.data)

  }

  return (
  
    <div className='container'>
      <h1>Previsão do Tempo </h1>
      <input ref={inputRef} type="text" placeholder='Pesquise a cidade' />
      <button onClick={SearchCity}>Buscar</button>

      {weather && <WeatherInformations weather={weather} />}
      {weatherFiveDays && <WeatherInformationsFiveDays weatherFiveDays={weatherFiveDays} />}

    </div>

  )
}

export default App

// 152b299cdfaed83cabfc715c16249920