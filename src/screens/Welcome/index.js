import React from "react";
import { View } from "react-native";

import { Page, Logo, Render, H1, Button, ButtonLabel } from "./styles";

export default function Welcome({ navigation }) {
  return (
    <Page>
      <Logo />
      <View style={{ width: "100%" }}>
        <Render />
        <H1>Seu futuro financeiro começa agora</H1>
      </View>
      <View style={{ width: "100%" }}>
        <Button type="register" onPress={() => navigation.push("Login")}>
          <ButtonLabel color="#FF6700">Já faço parte</ButtonLabel>
        </Button>
        <Button type="login" onPress={() => navigation.push("Register")}>
          <ButtonLabel color="#fff">Começar agora</ButtonLabel>
        </Button>
      </View>
    </Page>
  );
}
