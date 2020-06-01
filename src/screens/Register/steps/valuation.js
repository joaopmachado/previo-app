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

export default function RegisterValuation({ navigation, route }) {
  const [answer, setAnswer] = useState(null);

  return (
    <Page>
      <View style={{ paddingHorizontal: 30, marginTop: 60 }}>
        <Title>{route.params.name.split(" ")[0]}, estamos quase lá!</Title>
      </View>
      <View>
        <Subtitle style={{ marginLeft: 30 }}>
          Em média, quanto você ganha por mês?
        </Subtitle>
        <Tabs style={{ flexDirection: "column", justifyContent: "flex-start" }}>
          <Tab
            style={{ height: 40, marginBottom: 10, width: "100%" }}
            onPress={() => setAnswer("R$0,00 a R$1.031,00")}
            actived={answer === "R$0,00 a R$1.031,00"}
          >
            <TabName>R$0,00 a R$1.031,00</TabName>
          </Tab>
          <Tab
            style={{ height: 40, marginBottom: 10, width: "100%" }}
            onPress={() => setAnswer("De R$ 1.830,30 a R$ 3.050,52")}
            actived={answer === "De R$ 1.830,30 a R$ 3.050,52"}
          >
            <TabName>De R$ 1.830,30 a R$ 3.050,52</TabName>
          </Tab>
          <Tab
            style={{ height: 40, marginBottom: 10, width: "100%" }}
            onPress={() => setAnswer("De R$ 3.050,53 a R$ 6.101,06")}
            actived={answer === "De R$ 3.050,53 a R$ 6.101,06"}
          >
            <TabName>De R$ 3.050,53 a R$ 6.101,06</TabName>
          </Tab>
          <Tab
            style={{ height: 40, marginBottom: 10, width: "100%" }}
            onPress={() => setAnswer("Acima de R$ 6.101,06")}
            actived={answer === "Acima de R$ 6.101,06"}
          >
            <TabName>Acima de R$ 6.101,06</TabName>
          </Tab>
        </Tabs>
      </View>
      <Button
        disabled={!answer}
        onPress={() => navigation.push("Plan", { name: route.params.name })}
      >
        <ButtonLabel>Prosseguir</ButtonLabel>
      </Button>
    </Page>
  );
}
