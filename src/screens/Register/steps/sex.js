import React, { useState } from "react";
import { View } from "react-native";

import {
  Page,
  Logo,
  Title,
  Subtitle,
  Tabs,
  Tab,
  TabImage,
  TabName,
  Button,
  ButtonLabel,
} from "../styles";

export default function RegisterBirthDate({ navigation, route }) {
  const [sex, setSex] = useState(null);

  return (
    <Page>
      <View style={{ paddingHorizontal: 30, marginTop: 60 }}>
        <Title>
          {route.params.name.split(" ")[0]}, vamos ficar mais próximos
        </Title>
      </View>
      <View>
        <Subtitle style={{ marginLeft: 30 }}>Qual seu sexo?</Subtitle>
        <Tabs>
          <Tab onPress={() => setSex("male")} actived={sex === "male"}>
            <>
              <TabImage source={require("../../../assets/images/male.png")} />
              <TabName>Masculino</TabName>
            </>
          </Tab>
          <Tab onPress={() => setSex("female")} actived={sex === "female"}>
            <>
              <TabImage source={require("../../../assets/images/female.png")} />
              <TabName>Feminino</TabName>
            </>
          </Tab>
        </Tabs>
      </View>
      <Button
        disabled={!sex}
        onPress={() => navigation.push("Relation", { name: route.params.name })}
      >
        <ButtonLabel>Prosseguir</ButtonLabel>
      </Button>
    </Page>
  );
}
