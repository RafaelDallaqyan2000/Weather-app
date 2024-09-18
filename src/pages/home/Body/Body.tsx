import { useSelector } from "react-redux";
import { WeatherShowMain, WeatherShowDaily } from "../../../components";
import { GfGWeatherApp } from "../../../components/GWeather/GWeather";

export function Body() {

  const daily = useSelector((store: any) => store.dailyWeather);
  const hourly = useSelector((store: any) => store.hourlyWeather);
  const isFahrenheight = useSelector((store: any) => store.isFahernheight);


  return (
    <div>
      <div>
        <GfGWeatherApp />
      </div>
      <div>
        {
          daily.map((el: any) => {
            return <WeatherShowDaily item={el} isFahrenheight={isFahrenheight} />
          })
        }

      </div>
    </div>
  )
}
