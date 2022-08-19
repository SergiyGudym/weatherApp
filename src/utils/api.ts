import { PlaceType } from "components/MainComponent/MainComponent";
import constants from "utils/constants";

export const getWeatherData = async (
  place: PlaceType,
  callback: (value: any) => void
) => {
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${place.lat}&lon=${place.lon}&appid=${constants.apiKey}&units=${constants.units}`
  )
    .then((data) => data.json())
    .then((data) => callback(data));
};

export const getPlaceOptions = async (
  name: string,
  callback: (value: any) => void
) => {
  await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=${5}&appid=${
      constants.apiKey
    }`
  )
    .then((response) => response.json())
    .then((res) => callback(res));
};
