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
} from "../styles";

export default function RegisterEmail({ navigation, route }) {
  const [email, setEmail] = useState("");

  return (
    <Page>
      <View style={{ paddingHorizontal: 30, marginTop: 60 }}>
        <Title>
          {route.params.name.split(" ")[0]}, só mais umas informações
        </Title>
      </View>
      <View>
        <Subtitle style={{ marginLeft: 30 }}>Informe seu e-mail</Subtitle>
        <Input
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoFocus={true}
        />
      </View>
      <Button
        disabled={email.split("@").length === 1}
        onPress={() =>
          navigation.push("BirthDate", { name: route.params.name })
        }
      >
        <ButtonLabel>Prosseguir</ButtonLabel>
      </Button>
    </Page>
  );
}
