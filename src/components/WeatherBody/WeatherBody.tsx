import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getWeather } from '../../store/actions/getWeather';
import { toDateFunction } from '../../helpers/toDateFunction';
import { useAppDispatch } from '../../store/configureStore';

export function WeatherBody() {
    const [input, setInput] = useState('');
    const weather = useSelector((store: any) => store.weather)
    const dispatch = useAppDispatch();


    const search = async (event: any) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setInput('');
            dispatch(getWeather({ inputText: input }))
        }
    };

    return (
        <div className="App">
            <h1 className="app-name">
                GeeksforGeeks Weather App
            </h1>
            <div className="search-bar">
                <input
                    type="text"
                    className="city-search"
                    placeholder="Enter City Name.."
                    name="query"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyPress={search}
                />
            </div>

            {weather.error && (
                <>
                    <br />
                    <br />
                    <span className="error-message">
                        <span style={{ fontSize: '20px' }}>City not found</span>
                    </span>
                </>
            )}
            {weather && weather.main && (
                <div>
                    <div className="city-name">
                        <h2>
                            {weather.name}, <span>{weather.sys?.country}</span>
                        </h2>
                    </div>
                    <div className="date">
                        <span>{toDateFunction()}</span>
                    </div>
                    <div className="icon-temp">
                        <img
                            className=""
                            src={`https://openweathermap.org/img/wn/${weather.weather[0]?.icon}@2x.png`}
                            alt={weather.weather[0]?.description}
                        />
                        {Math.round(weather.main.temp)}
                        <sup className="deg">°C</sup>
                    </div>
                    <div className="des-wind">
                        <p>{weather.weather[0].description.toUpperCase()}</p>
                        <p>Wind Speed: {weather.wind.speed}m/s</p>
                    </div>
                </div>
            )}
        </div>
    );
}
