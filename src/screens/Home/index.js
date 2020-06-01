import React, { useRef, useEffect } from "react";
import { Dimensions, Alert, View, DrawerLayoutAndroid } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { LineChart } from "react-native-chart-kit";

import {
  Page,
  Header,
  Resume,
  BigPrice,
  SmallPrice,
  Content,
  LastDeposit,
  TextMuted,
  DepositAmount,
} from "./styles";

import Actions from "../../components/Actions";
import Navigator from "../../components/Navigator";

export default function Home({ route }) {
  let drawerRef = useRef(null);

  useEffect(() => {
    if (route.params) {
      if (route.params.drawerOpen) {
        drawerRef.openDrawer();
      }
    }
  }, [route]);

  return (
    <DrawerLayoutAndroid
      ref={(ref) => (drawerRef = ref)}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={() => <Navigator />}
    >
      <Page>
        <Header>
          <Resume>Resumo</Resume>
          <BigPrice>R$46.568,00</BigPrice>
          <SmallPrice>rendimento de maio: R$367,69</SmallPrice>
        </Header>
        <LineChart
          data={{
            labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width + 135}
          height={200}
          withHorizontalLabels={false}
          withVerticalLabels={false}
          onDataPointClick={(e) =>
            Alert.alert("Seu rendimento", e.value.toString())
          }
          chartConfig={{
            backgroundColor: "#FF6700",
            backgroundGradientFrom: "#FF6700",
            backgroundGradientTo: "#FF6700",
            propsForBackgroundLines: {
              display: "none",
            },
            decimalPlaces: 2,
            barPercentage: 1,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
              padding: 0,
            },
          }}
          bezier
          absolute
          style={{
            marginVertical: 0,
            paddingLeft: 13,
          }}
        />
        <Content>
          <LastDeposit>
            <Icon name="bank" color="#FF6700" size={36} />
            <View style={{ marginLeft: 18 }}>
              <TextMuted>Último depósito</TextMuted>
              <DepositAmount>R$860,00 em 30/05/2020</DepositAmount>
            </View>
          </LastDeposit>
        </Content>
        <Actions />
      </Page>
    </DrawerLayoutAndroid>
  );
}
