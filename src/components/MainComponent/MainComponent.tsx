import { FunctionComponent, useEffect, useState } from "react";
import DropdownList from "components/DropdownList/DropdownList";
import images from "utils/images";
import { getPlaceOptions, getWeatherData } from "utils/api";
import { getWeatherCover } from "utils/weatherPrepare";
import Header from "components/Header/Header";
import Wish from "components/Wish/Wish";
import InputField from "components/InputField/InputField";
import WeatherInfo from "components/WeatherInfo/WeatherInfo";
import InfoContainer from "components/InfoContainer/InfoContainer";
import styles from "./MainComponent.module.scss";

export type PlaceType = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
};

const MainComponent: FunctionComponent = () => {
  const [placeOptions, setPlaceOptions] = useState<PlaceType[] | null>(null);
  const [placeChosen, setPlaceChosen] = useState<PlaceType | null>(null);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [wrapperImage, setWrapperImage] = useState<string>(images.cover);
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = async (value: string) => {
    if (!value.length) {
      setInputValue("");
      return setPlaceOptions(null);
    }
    setInputValue(value);
    getPlaceOptions(value, setPlaceOptions);
  };

  const loadWeather = (place: PlaceType) => {
    setInputValue("");
    setPlaceChosen(place);
    setPlaceOptions(null);
  };

  useEffect(() => {
    if (!placeChosen) return;
    getWeatherData(placeChosen, setWeatherData);
  }, [placeChosen]);

  useEffect(() => {
    if (!weatherData) return;
    const newImageSource = getWeatherCover(weatherData.weather[0].main);
    if (wrapperImage !== newImageSource) setWrapperImage(newImageSource);
  }, [wrapperImage, weatherData]);

  return (
    <div className={styles.mainWrapper}>
      <Header />
      <div className={styles.mainContainer}>
        <Wish />
        <InfoContainer />
        <InputField callback={handleChange} incomeValue={inputValue} />

        {placeOptions && placeOptions.length > 0 && (
          <DropdownList places={placeOptions} clickPlaceHandler={loadWeather} />
        )}

        {weatherData && placeChosen && (
          <WeatherInfo data={weatherData} place={placeChosen} />
        )}
      </div>
    </div>
  );
};

export default MainComponent;
