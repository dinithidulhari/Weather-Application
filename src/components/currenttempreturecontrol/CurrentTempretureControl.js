import React from 'react';

import './CurrentTempretureControl.css';

import { getWeatherIcon } from '../../help/Help.js';

function getDay(date) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

function getFormattedDate(date) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let day = date.getDate();
    return months[date.getMonth()] + ' ' + day;
}

function getTime(date) {
    var time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    return time;
}

export default function CurrentTempretureControl(props) {
    return (
        <React.Fragment>
            <div className="circle">
                <div className="container">

                    <div className="row">
                        <div className="col-12">

                            <div className="weather-circle">
                                <div className="degree">
                                    <p>{props.tempreture}°C</p>
                                </div>

                                <div className="row weather-status">

                                    <div className="col-6">
                                        <div className="weather-icon">
                                            <i className={"wi wi-" + getWeatherIcon(props.date, props.label)}></i>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="weather-status-text">
                                            <p>{props.label}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="line">
                                        </div>
                                    </div>
                                </div>
                                <div className="date">
                                    <p>{getDay(props.date)} , {getFormattedDate(props.date)} </p>
                                </div>
                                <div className="time">
                                    <p>{getTime(props.date)}</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className="wind-section">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="weather-icon">
                                <i className="wi wi-windy"></i>

                                <div className="wind-text">
                                    <p>wind</p>
                                </div>
                                <div className="wind-speed">
                                    <p>{props.wind} km/h</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="weather-icon">
                                <i className="wi wi-humidity"></i>

                                <div className="wind-text">
                                    <p>humidity</p>
                                </div>
                                <div className="wind-speed">
                                    <p>{props.humidity}%</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="weather-icon">
                                <i className="wi wi-barometer"></i>

                                <div className="wind-text">
                                    <p>pressure</p>
                                </div>
                                <div className="wind-speed">
                                    <p>{props.pressure}mb</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>

    );
}