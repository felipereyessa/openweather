//==========Importaciones =================//
import React, { useState } from "react";  // Importación de React y useState desde la biblioteca "react".
import Form from "./Form";  // Importación del componente "Form" desde un archivo local.
import Card from "./Card";
///=========Declaración de un componentes funciones (Variables)=========//
const WeatherPanel = () => {  
    const [weather, setWeather] = useState([]);  
    const [forecast, setForecast] = useState([]); 
    const [loading, setLoading] = useState(false); 
    const [show, setShow] = useState(false);  
    const [location, setLocation] = useState(""); 
    
    //===========Funcion al llamado=================//
        const getLocation = async (loc) => {  
        setLoading(true);
        setLocation(loc); 
        
        // Construye la URL para obtener datos meteorológicos
        const urlWeather = `https://api.openweathermap.org/data/2.5/weather?&appid=b07b53aa74f6e0a5b14654a258dbf62b&lang=es&q=${loc}`;
        const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?&appid=b07b53aa74f6e0a5b14654a258dbf62b&lang=es&q=${loc}`;
        
        // Funcion que realiza una solicitud HTTP para obtener datos de la API
        try {
        const weatherResponse = await fetch(urlWeather);  // Realiza una solicitud HTTP para obtener datos meteorológicos.
        if (!weatherResponse.ok) {
            throw { response: weatherResponse };
        }
        const weatherData = await weatherResponse.json(); 
        console.log(weatherData);  
        setWeather(weatherData); 
        const forecastResponse = await fetch(urlForecast);  // Realiza una solicitud HTTP para obtener el pronóstico del tiempo.
            if (!forecastResponse.ok) {
                throw { response: forecastResponse };
            }
        const forecastData = await forecastResponse.json(); 
        console.log(forecastData); 
        setForecast(forecastData); 
        setLoading(false); 
        setShow(true);
        } catch (error) {  // Captura cualquier error que ocurra durante la solicitud.
            console.error(error); 
            setLoading(false);  
            setShow(false); 
        }
    };
    return (
        <React.Fragment>
            <Form
                newLocation={getLocation} 
            />
            <Card 
                showData = {show} 
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
            />
        </React.Fragment>
    );
};
export default WeatherPanel; 
