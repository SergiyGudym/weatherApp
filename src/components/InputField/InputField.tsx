import { Themes, useTheme } from "context/ThemeProvider/ThemeProvider";
import { FormEvent, FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import styles from "./InputField.module.scss";

interface InputFieldInterface {
  callback: (value: string) => void;
  incomeValue?: string;
}

const InputField: FunctionComponent<InputFieldInterface> = ({
  callback,
  incomeValue,
}) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    callback(e.currentTarget.value);
  };

  return (
    <div className={styles.fieldContainer}>
      <input
        className={`${styles.field} ${
          theme === Themes.light ? styles.border : ""
        }`}
        type="text"
        onChange={handleChange}
        placeholder={t("placeholder")}
        value={incomeValue}
      />
    </div>
  );
};

export default InputField;
