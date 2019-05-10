function getTimeofDay(date) {

    if (date.getHours() <= 18) {
        return 'day';
    } else {
        return 'night';
    }
}

function getWeatherCondition(condition, timeofDay) {
    var weatherCondition;
    switch (condition) {
        case "Clear":
            if (timeofDay === 'day') {
                weatherCondition = "sunny";
            }
            else {
                weatherCondition = "clear";
            }
            break;

        case "Clouds":
            weatherCondition = "cloudy";
            break;

        case "Rain":
            weatherCondition = "rain";
            break;

        case "Drizzle":
            weatherCondition = "showers";
            break;

        case "Thunderstorm":
            weatherCondition = "snow-thunderstorm"
            break;

        case "Snow":
            weatherCondition = "snow";
            break;

        default:
            weatherCondition = "";
    }
    return weatherCondition;
}

export function getWeatherIcon(date, weatherCondition) {

    var timeofDay = getTimeofDay(date);
    var condition = getWeatherCondition(weatherCondition, timeofDay);
    return timeofDay + '-' + condition;

}

