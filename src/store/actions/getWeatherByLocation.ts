import axios from "axios"
import { handleChange, WEATHER_API_KEY } from "."

type GetWeatherType = {
    lat?: number;
    lon?: number;
};

export function getWeatherByLocation({ lat, lon }: GetWeatherType) {
    return (dispatch: any) => {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
            .then(data => {
                dispatch(handleChange('weather', data.data))
                return data.data;
            })
            .catch(err => { throw Error(err) })
    }
}
