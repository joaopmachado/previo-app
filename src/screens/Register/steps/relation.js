import React, { useState } from "react";
import { View } from "react-native";

import {
  Page,
  Logo,
  Title,
  Subtitle,
  Tabs,
  Tab,
  TabName,
  Button,
  ButtonLabel,
} from "../styles";

export default function RegisterRelation({ navigation, route }) {
  const [answer, setAnswer] = useState(null);

  return (
    <Page>
      <View style={{ paddingHorizontal: 30, marginTop: 60 }}>
        <Title>
          {route.params.name.split(" ")[0]}, vamos ficar mais próximos
        </Title>
      </View>
      <View>
        <Subtitle style={{ marginLeft: 30 }}>
          Você é casado ou possui uma união estável?
        </Subtitle>
        <Tabs>
          <Tab
            style={{ height: 40 }}
            onPress={() => setAnswer("sim")}
            actived={answer === "sim"}
          >
            <TabName>Sim</TabName>
          </Tab>
          <Tab
            style={{ height: 40 }}
            onPress={() => setAnswer("não")}
            actived={answer === "não"}
          >
            <TabName>Não</TabName>
          </Tab>
        </Tabs>
      </View>
      <Button
        disabled={!answer}
        onPress={() => navigation.push("Income", { name: route.params.name })}
      >
        <ButtonLabel>Prosseguir</ButtonLabel>
      </Button>
    </Page>
  );
}
