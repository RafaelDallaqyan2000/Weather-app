import axios from "axios"
import { handleChange, WEATHER_API_KEY } from "."

type GetWeatherType = {
    lat?: number;
    lon?: number;
};

export function getWeatherForDaysAndHours({ lat, lon }: GetWeatherType) {
    return (dispatch: any) => {
        return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`)
            .then(data => {
                dispatch(handleChange('dailyWeather', data.data.daily));
                dispatch(handleChange('hourlyWeather', data.data.hourly));                
                return data.data;
            })
            .catch(err => { throw Error(err) })
    }
}
