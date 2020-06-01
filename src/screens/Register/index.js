import React, { useState } from "react";
import { View } from "react-native";

import {
  Page,
  Logo,
  Title,
  Subtitle,
  Input,
  Button,
  ButtonLabel,
} from "./styles";

export default function Register({ navigation }) {
  const [name, setName] = useState("");

  return (
    <Page>
      <View style={{ paddingHorizontal: 30, marginTop: 60 }}>
        <Logo />
        <Title>Vamos começar...</Title>
      </View>
      <View>
        <Subtitle style={{ marginLeft: 30 }}>
          Informe seu nome completo
        </Subtitle>
        <Input
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
          autoFocus={true}
        />
      </View>
      <Button
        disabled={name.split(" ").length < 2}
        onPress={() => navigation.push("Email", { name })}
      >
        <ButtonLabel>Prosseguir</ButtonLabel>
      </Button>
    </Page>
  );
}
