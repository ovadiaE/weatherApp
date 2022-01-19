import {useState} from 'react';
import moment from 'moment'
import './styles.css'
import Button from 'react-bootstrap/Button';



const WeatherCard = ({weatherData}) => { 
    const [loading, setLoading] = useState(false) 

    const refresh = () => {
        setLoading(true)
        window.location.reload().preventDefault();
        setLoading(false)
    }

    return ( 
       
        <div className='main'>
            <div className='top'>
                <p className="header">{weatherData.name}</p>
                <Button variant="primary" size="sm" onClick={refresh}>
                    { loading ? ('loading...') : ('refresh')}
                </Button>

            </div>
           
            <div className='time'>
                <p className="day">Day: {moment().format('dddd')}</p>
                <p className="day">{moment().format('LL')}</p>
            </div>
            
            <div className='temperature' >
                <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
                <p className="temp">Humidity: {weatherData.main.humidity} %</p>
            </div>

            <div className='sun'>
                <p className='sunTiming'>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p className='sunTiming'>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            </div>
        </div>
    )
}

export default WeatherCard