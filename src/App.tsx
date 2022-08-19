import "./normalize.css";
import DeviceProvider from "context/DeviceProvider/DeviceProvider";
import ThemeProvider from "context/ThemeProvider/ThemeProvider";
import AppWrapper from "components/AppWrapper/AppWrapper";
import AlertProvider from "context/AlertProvider/AlertProvider";
import MainComponent from "components/MainComponent/MainComponent";
import Footer from "components/Footer/Footer";

function App() {
  return (
    <DeviceProvider>
      <ThemeProvider>
        <AlertProvider>
          <AppWrapper>
            <MainComponent />
            <Footer />
          </AppWrapper>
        </AlertProvider>
      </ThemeProvider>
    </DeviceProvider>
  );
}

export default App;
