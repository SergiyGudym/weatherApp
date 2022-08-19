import { FunctionComponent } from "react";
import DropdownItem from "components/DropdownItem/DropdownItem";
import { PlaceType } from "components/MainComponent/MainComponent";
import styles from "./DropdownList.module.scss";

interface DropdownListInterface {
  places: PlaceType[];
  clickPlaceHandler: (place: PlaceType) => void;
}

const DropdownList: FunctionComponent<DropdownListInterface> = ({
  places,
  clickPlaceHandler,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {places.map((place, index, arr) => (
          <DropdownItem
            key={(place.lat + place.lon).toString()}
            place={place}
            clickHandler={() => clickPlaceHandler(place)}
          />
        ))}
      </div>
    </div>
  );
};

export default DropdownList;
