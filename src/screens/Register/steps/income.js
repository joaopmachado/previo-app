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

export default function RegisterIncome({ navigation, route }) {
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
          Qual sua principal fonte de renda?
        </Subtitle>
        <Tabs style={{ flexDirection: "column", justifyContent: "flex-start" }}>
          <Tab
            style={{ height: 40, marginBottom: 10, width: "100%" }}
            onPress={() => setAnswer("Carteira assinada")}
            actived={answer === "Carteira assinada"}
          >
            <TabName>Carteira assinada</TabName>
          </Tab>
          <Tab
            style={{ height: 40, marginBottom: 10, width: "100%" }}
            onPress={() => setAnswer("Autônomo")}
            actived={answer === "Autônomo"}
          >
            <TabName>Autônomo</TabName>
          </Tab>
          <Tab
            style={{ height: 40, marginBottom: 10, width: "100%" }}
            onPress={() => setAnswer("Não tenho renda")}
            actived={answer === "Não tenho renda"}
          >
            <TabName>Não tenho renda</TabName>
          </Tab>
          <Tab
            style={{ height: 40, width: "100%" }}
            onPress={() => setAnswer("Outra")}
            actived={answer === "Outra"}
          >
            <TabName>Outra</TabName>
          </Tab>
        </Tabs>
      </View>
      <Button
        disabled={!answer}
        onPress={() =>
          navigation.push("Valutation", { name: route.params.name })
        }
      >
        <ButtonLabel>Prosseguir</ButtonLabel>
      </Button>
    </Page>
  );
}
