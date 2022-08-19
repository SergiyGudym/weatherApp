import images from "utils/images";
import {
  Context,
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
} from "react";
import { isMobileOnly } from "react-device-detect";
import styles from "./DeviceProvider.module.scss";

interface DeviceContextInterface {
  isMobileOnly: boolean | null;
}

interface DeviceProviderInterface {
  children: ReactNode;
}

export const DeviceContext: Context<DeviceContextInterface> =
  createContext<DeviceContextInterface>({ isMobileOnly: null });

const DeviceProvider: FunctionComponent<DeviceProviderInterface> = ({
  children,
}) => {
  return (
    <DeviceContext.Provider value={{ isMobileOnly }}>
      {isMobileOnly && (
        <div
          className={isMobileOnly ? styles.mobileView : styles.none}
          style={{ height: "100%" }} // this is the fix for mobile firefox browser stretching the container
          // and yes, it has to be here, in inline styles, not in css file
        >
          <img
            src={images.rotate}
            alt="Rotate phome"
            className={styles.rotateImg}
          />
          <p>Please rotate your phone to portrait view</p>
        </div>
      )}

      <div className={isMobileOnly ? styles.hiddenMobile : ""}>{children}</div>
    </DeviceContext.Provider>
  );
};

export const useDevice = () => {
  return useContext(DeviceContext);
};

export default DeviceProvider;
