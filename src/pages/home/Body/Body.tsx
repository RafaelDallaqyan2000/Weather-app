import { useSelector } from "react-redux";
import { WeatherShowDaily } from "../../../components";
import { WeatherBody } from "../../../components";
import './bodyStyles.scss';

export function Body() {

  const daily = useSelector((store: any) => store.dailyWeather);
  const hourly = useSelector((store: any) => store.hourlyWeather);
  const isFahrenheight = useSelector((store: any) => store.isFahernheight);


  return (
    <div>
      <div>
        <WeatherBody />
      </div>
      <div className="days-container">
        {/* {
          daily.map((el: any) => {
            return <WeatherShowDaily item={el} isFahrenheight={isFahrenheight} />
          })
        } */}
      </div>
    </div>
  )
}
