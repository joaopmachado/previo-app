import React from "react";
import { Platform } from "react-native";

import App from "./src";

if (Platform.OS === "android") {
  require("intl");
  require("intl/locale-data/jsonp/pt-BR");
}

export default () => <App />;
