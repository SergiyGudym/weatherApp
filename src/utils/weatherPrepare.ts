import images from "./images";

export const getWeatherTitle = (weather: string): string => {
  switch (weather) {
    case "Clear":
      return "weather.conditions.clear";
    case "Clouds":
      return "weather.conditions.clouds";
    case "Rain":
    case "Drizzle":
      return "weather.conditions.rain";
    case "Mist":
      return "weather.conditions.mist";
    case "Thunderstorm":
      return "weather.conditions.thunder";
    case "Snow":
      return "weather.conditions.snow";
    default:
      return "";
  }
};

export const getWeatherCover = (weather: string) => {
  switch (weather) {
    case "Clear":
      return images.clear;
    case "Clouds":
      return images.clouds;
    case "Rain":
    case "Drizzle":
      return images.rain;
    case "Mist":
      return images.mist;
    case "Thunderstorm":
      return images.thunderstorm;
    case "Snow":
      return images.snow;
    default:
      break;
  }
};

export const getWeatherIcon = (icon: string): string => {
  return `http://openweathermap.org/img/wn/${icon}.png`;
};
