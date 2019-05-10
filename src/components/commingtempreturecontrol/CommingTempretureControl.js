import React from 'react';

import './CommingTempretureControl.css';

import { getWeatherIcon } from '../../help/Help.js';

function getDay1(date) {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var newday;
    newday = date.getDay();

    return days[newday];

    if (newday > 6) {
        newday = newday - 7;
        return days[newday];
    }
    else {
        return days[newday];
    }

}
function getDay2(date) {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var newday;
    newday = date.getDay() + 1;

    if (newday > 6) {
        newday = newday - 7;
        return days[newday];
    }
    else {
        return days[newday];
    }

}
function getDay3(date) {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var newday;
    newday = date.getDay() + 2;

    if (newday > 6) {
        newday = newday - 7;
        return days[newday];
    }
    else {
        return days[newday];
    }

}
function getDay4(date) {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var newday;
    newday = date.getDay() + 3;

    if (newday > 6) {
        newday = newday - 7;
        return days[newday];
    }
    else {
        return days[newday];
    }

}
function getDay5(date) {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var newday;
    newday = date.getDay() + 4;

    if (newday > 6) {
        newday = newday - 7;
        return days[newday];
    }
    else {
        return days[newday];
    }

}

export default function CommingTempretureControl(props) {
    return (
        <React.Fragment>

            <div className="comming-days">
                <div className="container">

                    <div className="day-box">

                        <div className="row ">
                            <div className="col-8">
                                <div className="day">
                                    <p>{getDay1(props.date)}</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <i className={"wi wi-" + getWeatherIcon(props.date, props.label1)}></i>
                            </div>
                            <div className="col-2">
                                <div className="day-temperature">
                                    <p>{props.tempreture1}°C</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="day-box">
                        <div className="row">
                            <div className="col-8">
                                <div className="day">
                                    <p>{getDay2(props.date)}</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <i className={"wi wi-" + getWeatherIcon(props.date, props.label2)}></i>
                            </div>
                            <div className="col-2">
                                <div className="day-temperature">
                                    <p>{props.tempreture2}°C</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="day-box">
                        <div className="row">
                            <div className="col-8">
                                <div className="day">
                                    <p>{getDay3(props.date)}</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <i className={"wi wi-" + getWeatherIcon(props.date, props.label3)}></i>
                            </div>
                            <div className="col-2">
                                <div className="day-temperature">
                                    <p>{props.tempreture3}°C</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="day-box">
                        <div className="row">
                            <div className="col-8">
                                <div className="day">
                                    <p>{getDay4(props.date)}</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <i className={"wi wi-" + getWeatherIcon(props.date, props.label4)}></i>
                            </div>
                            <div className="col-2">
                                <div className="day-temperature">
                                    <p>{props.tempreture4}°C</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="day-box">
                        <div className="row">
                            <div className="col-8">
                                <div className="day">
                                    <p>{getDay5(props.date)}</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <i className={"wi wi-" + getWeatherIcon(props.date, props.label5)}></i>
                            </div>
                            <div className="col-2">
                                <div className="day-temperature">
                                    <p>{props.tempreture5}°C</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>


    );
}