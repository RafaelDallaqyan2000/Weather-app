import { showDegree } from '../../helpers/showDegree';
import './weatherByDaysStyles.scss';

export function WeatherShowDaily({ item, isFahrenheight }: { item: any; isFahrenheight: boolean }) {


    return (
        <div className="weather-small-container" >
            <span>{showDegree(item.temp.day, isFahrenheight)}</span>
        </div>
    )
}
