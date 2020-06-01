import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import AuthRoute from "./auth.routes";
import AppRoute from "./app.routes";

export default function Routes() {
  const authState = useSelector(({ auth }) => auth);

  return (
    <NavigationContainer>
      {authState.token ? <AppRoute /> : <AuthRoute />}
    </NavigationContainer>
  );
}
