import { useEffect, useState } from 'react'
import { Header } from './Header'
import { Body } from './Body/Body'
import { useAppDispatch } from '../../store/configureStore'
import { getWeatherByLocation } from '../../store/actions'
import { getWeatherForDaysAndHours } from '../../store/actions/getWeatherForDaysAndHours'


type CoordinatesType = {
    lat: null | number;
    lon: null | number;
}

export function Home() {
    const dispatch = useAppDispatch()
    const [coordinates, setCoordinates] = useState<CoordinatesType>({ lat: null, lon: null })


    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            console.log(crd);
            setCoordinates({ lat: crd.latitude, lon: crd.longitude })
        });
    }, [])

    useEffect(() => {
        if (coordinates.lat && coordinates.lon) {
            dispatch(getWeatherByLocation({ lat: coordinates.lat, lon: coordinates.lon }));
            dispatch(getWeatherForDaysAndHours({ lat: coordinates.lat, lon: coordinates.lon }))

        }
    }, [coordinates.lat, coordinates.lon])

    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}
