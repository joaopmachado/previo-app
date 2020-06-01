import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store from "./store";

import Routes from "./routes";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      Cereal: require("../assets/fonts/AirbnbCereal-Book.ttf"),
      CerealMedium: require("../assets/fonts/AirbnbCereal-Medium.ttf"),
      CerealBold: require("../assets/fonts/AirbnbCereal-Bold.ttf"),
      CerealExtraBold: require("../assets/fonts/AirbnbCereal-ExtraBold.ttf"),
      CerealBlack: require("../assets/fonts/AirbnbCereal-Black.ttf"),
      CerealLight: require("../assets/fonts/AirbnbCereal-Light.ttf"),
    });

    setFontLoaded(true);
  }

  useEffect(() => {
    console.disableYellowBox = true;
    loadFonts();
  }, []);

  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        {fontLoaded && <Routes />}
      </PersistGate>
    </Provider>
  );
}
