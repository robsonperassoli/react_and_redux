import axios from 'axios';
const API_KEY = '8e9290396072d6ae3e0a1d9be014ddf7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'fetch-weather';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},br`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
