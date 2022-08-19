import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useTime = () => {
  const locale = "en";
  const [today, setDate] = useState(new Date());
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hour = today.getHours();
  const wish = `${t("greetings.basic")} ${
    (hour < 12 && t("greetings.morning")) ||
    (hour < 17 && t("greetings.afternoon")) ||
    t("greetings.evening")
  }!`;

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: false,
    minute: "numeric",
  });

  return {
    time,
    wish,
  };
};

export default useTime;
