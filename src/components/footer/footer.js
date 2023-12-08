import { useEffect, useState } from "react";
import styled from 'styled-components';

const FooterContainer = ({ className }) => {
    const [city, setCity] = useState('');
    const [temp, setTemp] = useState('');
    const [weather, setWeather] = useState('');


    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Tbilisi&lang=ru&units=metric&appid=3cdf10536b4d868c839b0f2eaaea497e')
            .then((res) => res.json())
            .then(({ name, main, weather }) => {
                setCity(name);
                setTemp(Math.round(main.temp));
                setWeather(weather[0].description);
            })
    }, []);

    return (
        <div className={className}>
            <div>
                <div>Блог веб-разработчика</div>
                <div>gmi1987@gmail.com</div>
            </div>
            <div>
                <div>{city}, {new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}</div>
                <div>{temp} градусов, {weather}</div>
            </div>
        </div>
    )
};

export const Footer = styled(FooterContainer)`
min-height: 120px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 40px;
font-weight: bold;
background-color: #fff;
box-shadow: 0 2px 17px #000;
`;