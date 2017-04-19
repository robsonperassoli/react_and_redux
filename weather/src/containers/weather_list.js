import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const {lat, lon} = cityData.city.coord;

    const temperatureList = cityData.list.map(l => l.main.temp);
    const pressureList = cityData.list.map(l => l.main.pressure);
    const humidityList = cityData.list.map(l => l.main.humidity);

    console.log(temperatureList,pressureList,humidityList);

    return (
      <tr key={name}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td>
          <Chart data={temperatureList} color="red" unit="K" />
        </td>
        <td>
          <Chart data={pressureList} color="orange" unit="hPa" />
        </td>
        <td>
          <Chart data={humidityList} color="blue" unit="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Umidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}){
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
