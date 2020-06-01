import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import WelcomeScreen from "../screens/Welcome";
import LoginScreen from "../screens/Login";

import RegisterRouter from "./register.routes";

export default function AuthStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="Welcome"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ ...TransitionPresets.SlideFromRightIOS }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ ...TransitionPresets.SlideFromRightIOS }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterRouter}
        options={{ ...TransitionPresets.SlideFromRightIOS }}
      />
    </Stack.Navigator>
  );
}
