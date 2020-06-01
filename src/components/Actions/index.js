import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

import { Container, Title, Tabs, Tab, TabIcon, TabName } from "./styles";

export default function Actions() {
  return (
    <Container>
      <Title>Atalhos rápidos</Title>
      <Tabs>
        <Tab>
          <TabIcon>
            <Icon name="wallet" size={22} color="#FF6700" />
          </TabIcon>
          <TabName>Depositar</TabName>
        </Tab>
        <Tab>
          <TabIcon>
            <Icon name="qrcode" size={22} color="#FF6700" />
          </TabIcon>
          <TabName>Cashback</TabName>
        </Tab>
        <Tab>
          <TabIcon>
            <Icon name="staro" size={22} color="#FF6700" />
          </TabIcon>
          <TabName>Sonhos</TabName>
        </Tab>
        <Tab>
          <TabIcon>
            <Icon name="hearto" size={22} color="#FF6700" />
          </TabIcon>
          <TabName>Vaquinha</TabName>
        </Tab>
        <Tab>
          <TabIcon>
            <Icon name="download" size={22} color="#FF6700" />
          </TabIcon>
          <TabName>Sacar</TabName>
        </Tab>
      </Tabs>
    </Container>
  );
}
