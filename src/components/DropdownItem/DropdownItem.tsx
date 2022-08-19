import { FunctionComponent } from "react";
import { PlaceType } from "components/MainComponent/MainComponent";
import styles from "./DropdownItem.module.scss";

interface DropdownItemInterface {
  place: PlaceType;
  clickHandler: (value: PlaceType) => void;
}

const DropdownItem: FunctionComponent<DropdownItemInterface> = ({
  place,
  clickHandler,
}) => {
  return (
    <div className={styles.wrapper} onClick={() => clickHandler(place)}>
      <div className={styles.cityContainer}>
        {place.name}, {place.country}
        {place.state && (
          <span className={styles.state}>&nbsp;({place.state})</span>
        )}
      </div>
    </div>
  );
};

export default DropdownItem;
