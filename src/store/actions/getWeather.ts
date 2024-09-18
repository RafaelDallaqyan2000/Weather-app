import axios from "axios"
import { handleChange } from "."

type GetWeatherType = {
    inputText: string
};
const url = 'https://api.openweathermap.org/data/2.5/weather';
const api_key = 'f00c38e0279b7bc85480c3fe775d518c';

export function getWeather({ inputText }: GetWeatherType) {
    return (dispatch: any) => {
        return axios
            .get(url, {
                params: {
                    q: inputText,
                    units: 'metric',
                    appid: api_key,
                },
            })
            .then((data) => {
                console.log('res', data);
                dispatch(handleChange('weather', data.data))
            })
            .catch((error) => {
                dispatch(handleChange('weather', []))
                console.log('error', error);
            });
    }
}
