import { PlaceType } from "components/MainComponent/MainComponent";
import { Themes, useTheme } from "context/ThemeProvider/ThemeProvider";
import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { getWeatherIcon, getWeatherTitle } from "../../utils/weatherPrepare";
import styles from "./WeatherInfo.module.scss";

interface WeatherInfoInterface {
  data: any;
  place: PlaceType;
}

const WeatherInfo: FunctionComponent<WeatherInfoInterface> = ({
  data,
  place,
}) => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const getWeatherCondition = () => {
    const condition = getWeatherTitle(data.weather[0].main);
    console.log(condition, t(condition));

    return t(condition);
  };

  return (
    <div
      className={`${styles.wrapper} ${
        theme === Themes.dark ? styles.dark : ""
      }`}
    >
      <div className={styles.iconContainer}>
        <img
          src={getWeatherIcon(data.weather[0].icon)}
          alt="Icon"
          className={styles.weatherIcon}
        />
      </div>
      <div className={`${styles.infoRow} ${styles.first}`}>
        {getWeatherCondition()} {place.name}
        {place && (
          <span className={styles.additionalInfo}>
            &nbsp;&#40;{place.country}
            {place.state && `, ${place.state}`}&#41;
          </span>
        )}
      </div>
      <div className={styles.infoRow}>
        {t("weather.properties.temperature")}: {data.main.temp.toFixed()}&#8451;
      </div>
      <div className={styles.infoRow}>
        {t("weather.properties.humidity")}: {data.main.humidity}%
      </div>
      <div className={styles.infoRow}>
        {t("weather.properties.pressure")}: {data.main.pressure} hPa
      </div>
      <div className={`${styles.infoRow} ${styles.last}`}>{t("wish")}</div>
    </div>
  );
};

export default WeatherInfo;
