import React, { Component } from 'react';

import CurrentTempretureControl from './components/currenttempreturecontrol/CurrentTempretureControl';

import CommingTempretureControl from './components/commingtempreturecontrol/CommingTempretureControl';

import './App.css';

import axios from 'axios';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {

      currentWeather: {
        currentLocation: {},
        currentDate: new Date(),
      },


      commingWeatherDay1: {
        commingDate: new Date(),
      },

      value: ''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.Weatherapi('Colombo');
  }
  Weatherapi(city) {
    const City = city;
    const APPID = '45f9abccb3c730c32a3b4dd13c6409b1';

    axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + City + ',LK&?&APPID=' + APPID + '&units=metric')

      .then(res => {
        const currentWeather = res.data;

        console.log(currentWeather);

        this.setState({
          currentLocation: currentWeather.main.name,
          currentTempreture: (currentWeather.main.temp).toFixed(0),
          currentWeatherLabel: currentWeather.weather[0].main,
          currentWind: currentWeather.wind.speed,
          currentHumidity: currentWeather.main.humidity,
          currentPressure: currentWeather.main.pressure,

        });

      })

    axios.get('https://api.openweathermap.org/data/2.5/forecast?q=' + City + ',LK&?&APPID=' + APPID + '&units=metric')

      .then(res => {
        const commingWeatherDay1 = res.data;
        const commingWeatherDay2 = res.data;
        const commingWeatherDay3 = res.data;
        const commingWeatherDay4 = res.data;
        const commingWeatherDay5 = res.data;
        

        console.log(commingWeatherDay1);

        this.setState({
          commingTempreture1: (commingWeatherDay1.list[2].main.temp).toFixed(1),
          commingWeatherLabel1: commingWeatherDay1.list[2].weather[0].main,

          commingTempreture2: (commingWeatherDay2.list[10].main.temp).toFixed(1),
          commingWeatherLabel2: commingWeatherDay2.list[10].weather[0].main,

          commingTempreture3: (commingWeatherDay3.list[18].main.temp).toFixed(1),
          commingWeatherLabel3: commingWeatherDay3.list[18].weather[0].main,

          commingTempreture4: (commingWeatherDay4.list[26].main.temp).toFixed(1),
          commingWeatherLabel4: commingWeatherDay4.list[26].weather[0].main,

          commingTempreture5: (commingWeatherDay5.list[34].main.temp).toFixed(1),
          commingWeatherLabel5: commingWeatherDay5.list[34].weather[0].main,
        })
      })
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.Weatherapi(this.state.value);
    event.preventDefault();
  }

  render() {
    function getBackgroundImage(currentDate) {

      if (currentDate.getHours() < 12) {
        return 'morning';
      }
      else if (currentDate.getHours() > 12 || currentDate.getHours() < 18) {
        return 'daybackground';
      }
      else {
        return 'night';
      }
    }

    let { currentDate } = this.state.currentWeather;
    let { commingDate } = this.state.commingWeatherDay1;

    return (
      <React.Fragment>

        <div className={document.body.style.backgroundImage = getBackgroundImage(currentDate)}>

          <div className="location">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <form onSubmit={this.handleSubmit}>
                    <input className="serch-location" type="text" name="location" placeholder="Search Location" list="list" onChange={this.handleChange} autoComplete="off" />

                    <datalist id="list">

                      <option>Colombo</option>

                      <option>Kottawa</option>

                      <option>Maharagama</option>

                      <option>Pannipitiya</option>

                      <option>Kandy</option>

                      <option>Nugegoda</option>

                      <option>Homagama</option>

                    </datalist>

                    <div className="location-icon">
                      <img src="images/location-icon.svg" alt="location-icon" />
                    </div>
                  </form>
                </div>

              </div>

            </div>

          </div>

          <CurrentTempretureControl location={this.state.currentLocation} date={currentDate} tempreture={this.state.currentTempreture} label={this.state.currentWeatherLabel} wind={this.state.currentWind} humidity={this.state.currentHumidity} pressure={this.state.currentPressure} />

          <CommingTempretureControl tempreture={this.state.currentTempreture} date={commingDate} tempreture1={this.state.commingTempreture1} label1={this.state.commingWeatherLabel1} tempreture2={this.state.commingTempreture2} label2={this.state.commingWeatherLabel2} tempreture3={this.state.commingTempreture3} label3={this.state.commingWeatherLabel3}

            tempreture4={this.state.commingTempreture4} label4={this.state.commingWeatherLabel4} tempreture5={this.state.commingTempreture5} label5={this.state.commingWeatherLabel5} />

        </div>

      </React.Fragment>
    );
  }
}

export default App;
