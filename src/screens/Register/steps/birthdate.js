import React, { useState } from "react";
import { View } from "react-native";

import {
  Page,
  Logo,
  Title,
  Subtitle,
  MaskInput,
  Button,
  ButtonLabel,
} from "../styles";

export default function RegisterBirthDate({ navigation, route }) {
  const [birthDate, setBirthDate] = useState("");

  return (
    <Page>
      <View style={{ paddingHorizontal: 30, marginTop: 60 }}>
        <Title>
          {route.params.name.split(" ")[0]}, vamos ficar mais próximos
        </Title>
      </View>
      <View>
        <Subtitle style={{ marginLeft: 30 }}>Quando você nasceu?</Subtitle>
        <MaskInput
          type={"datetime"}
          options={{
            format: "DD/MM/YYYY",
          }}
          value={birthDate}
          onChangeText={(text) => setBirthDate(text)}
          autoCapitalize="none"
          autoFocus={true}
        />
      </View>
      <Button
        disabled={birthDate.length < 10}
        onPress={() => navigation.push("Sex", { name: route.params.name })}
      >
        <ButtonLabel>Prosseguir</ButtonLabel>
      </Button>
    </Page>
  );
}
