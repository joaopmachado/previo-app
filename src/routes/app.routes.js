import React from "react";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home";

import { logout } from "../store/actions/auth.action";

export default function AuthStack() {
  const Stack = createStackNavigator();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: "Olá, Gabi",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#FF6700",
            shadowOpacity: 0,
            shadowOffset: {
              height: 0,
            },
            shadowRadius: 0,
            elevation: 0,
          },
          headerTitleStyle: {
            fontFamily: "CerealLight",
          },
          headerTintColor: "#fff",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.setParams({ drawerOpen: true })}
            >
              <Icon
                name="align-left"
                color="#fff"
                size={22}
                style={{ marginLeft: 30 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={handleLogout}>
              <Icon
                name="log-out"
                color="#fff"
                size={22}
                style={{ marginRight: 30 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
