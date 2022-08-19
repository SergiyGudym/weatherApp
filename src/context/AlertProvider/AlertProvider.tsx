import {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import styles from "./AlertProvider.module.scss";
import images from "utils/images";

interface AlertProviderInterface {
  children: ReactNode;
}

interface AlertContextInterface {
  visible: boolean;
  show: (children: ReactNode) => void;
  close: () => void;
}

export const AlertContext = createContext<AlertContextInterface>({
  visible: false,
  show: () => {},
  close: () => {},
});

const AlertProvider: FunctionComponent<AlertProviderInterface> = ({
  children,
}) => {
  const [visible, showAlert] = useState(false);
  const [data, setData] = useState<ReactNode | null>(null);

  const show = (children: ReactNode): void => {
    setData(children);
    showAlert(true);
  };

  const close = () => {
    showAlert(false);
    setData(null);
  };

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "unset";
  }, [visible]);

  return (
    <AlertContext.Provider value={{ visible, show, close }}>
      {visible && (
        <div className={styles.wrapper} onClick={close}>
          <div
            className={styles.container}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <div className={styles.header}>
              <div className={styles.closeButtonContainer}>
                <button className={styles.closeButton} onClick={close}>
                  <img
                    src={images.icons.close}
                    alt="Close"
                    className={styles.closeIcon}
                  />
                </button>
              </div>
            </div>

            <div className={styles.contentContainer}>{data}</div>
          </div>
        </div>
      )}

      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  return useContext(AlertContext);
};

export default AlertProvider;
