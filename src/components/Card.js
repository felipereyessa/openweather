// Importar dependencias
import React from "react";
import Spinner from "./Spinner";
import GifClima from "../movie/Gif-clima.gif";  // ruta del gif usado para la Card
// Función del componente Card
const Card = ({ loadingData, showData, weather, forecast }) => {
    //Variables para obtener la fehca en tiempo real
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + "/" + month + "/" + year;
    //Variables de tiempo para la predicción en 3, 6 y 9 horas
    var forecastDate3 ="";
    var forecastDate6 ="";
    var forecastDate9 ="";
    //===========================================================//
    if ( loadingData ) {
        return <Spinner />;
    }
    //Variables para controlar cuando se visualizan los datos
    var url = "";
    var iconUrl = "";
    var iconUrlPredic3 = "";
    var iconUrlPredic6 = "";
    var iconUrlPredic9 = "";
    //===========================================================//
    //Condicion para controlar cuando se visualizan los datos 
    if ( showData ) {
        //Tiempo real
        url = "http://openweathermap.org/img/w";
        iconUrl = "https://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png";
        iconUrlPredic3 = "https://openweathermap.org/img/wn/" + forecast.list[1].weather[0].icon + ".png";
        iconUrlPredic6 = "https://openweathermap.org/img/wn/" + forecast.list[2].weather[0].icon + ".png";
        iconUrlPredic9 = "https://openweathermap.org/img/wn/" + forecast.list[3].weather[0].icon + ".png";
        //Prediccion 
        forecastDate3 = 
            forecast.list[1].dt_txt.substring(8, 10) + "/" +
            forecast.list[1].dt_txt.substring(5, 7) + "/" +
            forecast.list[1].dt_txt.substring(0, 4) + "/" + 
            forecast.list[1].dt_txt.substring(11, 13);
        
        forecastDate6 = 
            forecast.list[2].dt_txt.substring(8, 10) + "/" +
            forecast.list[2].dt_txt.substring(5, 7) + "/" +
            forecast.list[2].dt_txt.substring(0, 4) + "/" + 
            forecast.list[2].dt_txt.substring(11, 13);
        
        forecastDate9 = 
            forecast.list[3].dt_txt.substring(8, 10) + "/" +
            forecast.list[3].dt_txt.substring(5, 7) + "/" +
            forecast.list[3].dt_txt.substring(0, 4) + "/" + 
            forecast.list[3].dt_txt.substring(11, 13);
    }
    return (
        <div className="mt-5">
            {showData === true ? (
                <div className="container">
                    <div className="card mb-3 mx-auto bg-dark text-light">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <h3 className="card-title">{ weather.name }</h3>
                                <p className="card-date">{ date }</p>
                                <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)} °C</h1>
                                <p className="card-desc"><img src={ iconUrl } alt="icon clima"></img>{ weather.weather[0].description}</p>
                                <img src={GifClima} className="img-fluid rounded-start" alt="Photo" /> {/*Imagenn de la Card*/}
                            </div>
                                <div className="col-md-8">
                                    <hr/>
                                    <div className="card-body text-start mt-2">
                                    <h5 className="card-text">Maximum temperature {(weather.main.temp_max - 273.15).toFixed(1)} °C</h5>
                                    <h5 className="card-text">Minimum temperature {(weather.main.temp_min - 273.15).toFixed(1)} °C</h5>
                                    <h5 className="card-text">Humidity {(weather.main.humidity)} %</h5>
                                    <h5 className="card-text">Wind speed {(weather.wind.speed)}m/s</h5>
                                    <h5 className="card-text">Wind speed {(weather.wind.speed * 3.6).toFixed(2)} km/h</h5>
                                    </div>
                                    <hr/>
                                    <div className="row mt-4">
                                        {/* Prediccion 1 */}
                                        <div className="col">
                                            <p className="">{ forecastDate3 }h</p>
                                            <p className="description">
                                                <img
                                                    src= {iconUrlPredic3} alt="icono predi">
                                                </img>
                                                {forecast.list[1].weather[0].description} 
                                            </p>
                                            <p className="temPredic">
                                                {(forecast.list[1].main.temp - 273.15).toFixed(1)} °C
                                            </p>
                                        </div>
                                        {/* Prediccion 2 */}
                                        <div className="col">
                                            <p className="">{ forecastDate6 }h</p>
                                            <p className="description">
                                                <img
                                                    src= {iconUrlPredic6} alt="icono predi">
                                                </img>
                                                {forecast.list[2].weather[0].description} 
                                            </p>
                                            <p className="temPredic">
                                                {(forecast.list[2].main.temp - 273.15).toFixed(1)} °C
                                            </p>
                                        </div>
                                        {/* Prediccion 3 */}
                                        <div className="col">
                                            <p className="">{ forecastDate9 }h</p>
                                            <p className="description">
                                                <img
                                                    src= {iconUrlPredic9} alt="icono predi">
                                                </img>
                                                {forecast.list[3].weather[0].description} 
                                            </p>
                                            <p className="temPredic">
                                                {(forecast.list[3].main.temp - 273.15).toFixed(1)} °C
                                            </p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h2 className="text-light">No data</h2>
                )}
        </div>
    );
}
export default Card;
