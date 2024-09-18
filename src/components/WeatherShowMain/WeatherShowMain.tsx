import './weatherMainStyles.scss'
import { toDateFunction } from '../../helpers/toDateFunction';

type WeatherMainType = {
    weather: any;
    temp: number | string;
    city: string;
    isFahrenheight: boolean;
};

export function WeatherShowMain({ weather}: WeatherMainType) {

    return (
        <div className='weather-main-container'>
            {weather && weather.data && weather.data.main && (
                <div>
                    <div className="city-name">
                        <h2>
                            {weather.data.name}, <span>{weather.data.sys.country}</span>
                        </h2>
                    </div>
                    <div className="date">
                        <span>{toDateFunction()}</span>
                    </div>
                    <div className="icon-temp">
                        {Math.round(weather.data.main.temp)}
                        <sup className="deg">°C</sup>
                    </div>
                    <div className="des-wind">
                        <p>{weather.data.weather[0].description.toUpperCase()}</p>
                        <p>Wind Speed: {weather.data.wind.speed}m/s</p>
                    </div>
                </div>
            )}

        </div>
    )
}
