import './WeatherInformationsFiveDays.css'

function WeatherInformationsFiveDays({ weatherFiveDays }) {
    console.log(weatherFiveDays)

    let dailyForecast = {}

    for (let forecast of weatherFiveDays.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }
    }

    const nextFiveDaysForecast = Object.values(dailyForecast).slice(0, 6)

    function convertDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' })

        return newDate
    }

    return (
        <div className='weather-container'>
            <h3>Previsão nos próximos 5 dias </h3>
            <div className='weather-list'>
                {nextFiveDaysForecast.map(forecast => (
                    <div key={forecast.dt} className='weather-item'>
                        <p className='forecast-day'>{convertDate(forecast)}</p>
                        <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} />
                        <p className='forecast-discription'>{forecast.weather[0].discription}</p>
                        <p>{Math.round(forecast.main.temp_min)}ºC min / {Math.round(forecast.main.temp_max)}ºC máx</p>
                        <p>{ }</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeatherInformationsFiveDays