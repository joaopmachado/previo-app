import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import RegisterScreen from "../screens/Register";
import RegisterEmailScreen from "../screens/Register/steps/email";
import RegisterBirthDateScreen from "../screens/Register/steps/birthdate";
import RegisterSexScreen from "../screens/Register/steps/sex";
import RegisterRelationScreen from "../screens/Register/steps/relation";
import RegisterIncomeScreen from "../screens/Register/steps/income";
import RegisterValuationScreen from "../screens/Register/steps/valuation";
import RegisterPlanScreen from "../screens/Register/steps/plan";

export default function RegisterStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="Start"
      screenOptions={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <Stack.Screen name="Start" component={RegisterScreen} />
      <Stack.Screen name="Email" component={RegisterEmailScreen} />
      <Stack.Screen name="BirthDate" component={RegisterBirthDateScreen} />
      <Stack.Screen name="Sex" component={RegisterSexScreen} />
      <Stack.Screen name="Relation" component={RegisterRelationScreen} />
      <Stack.Screen name="Income" component={RegisterIncomeScreen} />
      <Stack.Screen name="Valutation" component={RegisterValuationScreen} />
      <Stack.Screen name="Plan" component={RegisterPlanScreen} />
    </Stack.Navigator>
  );
}
