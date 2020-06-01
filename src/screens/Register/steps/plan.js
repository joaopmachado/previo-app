import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View, Text, Slider, Platform } from "react-native";

import {
  Page,
  Title,
  Subtitle,
  Tabs,
  Tab,
  TabName,
  BigText,
  SmallText,
  Button,
  ButtonLabel,
} from "../styles";

import { setToken } from "../../../store/actions/auth.action";

export default function RegisterValuation({ navigation, route }) {
  const [receive, setReceive] = useState(10);
  const [invest, setInvest] = useState(20);
  const [initial, setInitial] = useState(2000);
  const [month, setMonth] = useState(600);

  const dispatch = useDispatch();

  function handleLogin() {
    dispatch(setToken("Prev.io vai ganhar esse hack S2"));
  }

  function formatPrice(value) {
    if (Platform === "android") {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(parseFloat(value));
    }

    return (
      "R$" +
      parseFloat(value).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  }

  function calcFV() {
    var fv = (month * [(initial + 6.1) ^ (12 * invest - 1)]) / 6.1;
    return fv / (receive * 12);
  }

  return (
    <Page>
      <View style={{ paddingHorizontal: 30, marginTop: 60 }}>
        <Title>
          {route.params.name.split(" ")[0]}, agora é hora de montar seu plano!
        </Title>
      </View>
      <View>
        <BigText>{formatPrice(calcFV())}</BigText>
        <SmallText>por mês durante {receive} anos</SmallText>
        <Subtitle style={{ marginLeft: 30, marginTop: 40 }}>
          Qual período de investimento?
        </Subtitle>
        <Tabs style={{ marginBottom: 10, marginTop: 5 }}>
          <Tab
            style={{ height: 40 }}
            actived={invest === 15}
            onPress={() => setInvest(15)}
          >
            <TabName>15 anos</TabName>
          </Tab>
          <Tab
            style={{ height: 40 }}
            actived={invest === 20}
            onPress={() => setInvest(20)}
          >
            <TabName>20 anos</TabName>
          </Tab>
        </Tabs>
        <Subtitle style={{ marginLeft: 30 }}>
          Qual período de recebimento?
        </Subtitle>
        <Tabs style={{ marginBottom: 20, marginTop: 5 }}>
          <Tab
            style={{ height: 40 }}
            actived={receive === 10}
            onPress={() => setReceive(10)}
          >
            <TabName>10 anos</TabName>
          </Tab>
          <Tab
            style={{ height: 40 }}
            actived={receive === 15}
            onPress={() => setReceive(15)}
          >
            <TabName>15 anos</TabName>
          </Tab>
        </Tabs>
        <View style={{ paddingHorizontal: 30 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: "CerealLight", color: "#616161" }}>
              Aplicação inicial
            </Text>
            <Text
              style={{
                fontFamily: "CerealBold",
                fontSize: 18,
                color: "#ff6700",
              }}
            >
              {formatPrice(initial)}
            </Text>
          </View>
          <Slider
            style={{ width: "100%", height: 40, paddingHorizontal: 60 }}
            minimumValue={100}
            value={initial}
            step={100}
            maximumValue={20000}
            thumbTintColor="#ff6700"
            onValueChange={setInitial}
            minimumTrackTintColor="#ff6700"
            maximumTrackTintColor="#616161"
          />
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: "CerealLight", color: "#616161" }}>
              Aplicação mensal
            </Text>
            <Text
              style={{
                fontFamily: "CerealBold",
                fontSize: 18,
                color: "#ff6700",
              }}
            >
              {formatPrice(month)}
            </Text>
          </View>
          <Slider
            style={{ width: "100%", height: 40, paddingHorizontal: 60 }}
            minimumValue={100}
            value={month}
            step={50}
            onValueChange={setMonth}
            maximumValue={15000}
            thumbTintColor="#ff6700"
            minimumTrackTintColor="#ff6700"
            maximumTrackTintColor="#616161"
          />
        </View>
      </View>
      <Button onPress={handleLogin}>
        <ButtonLabel>Pronto!</ButtonLabel>
      </Button>
    </Page>
  );
}
