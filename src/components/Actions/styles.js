import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  margin-left: 30px;
  font-family: "CerealMedium";
  font-size: 22px;
  color: #000;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const Tabs = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
  contentContainerStyle: {
    paddingLeft: 5,
    paddingRight: 20,
  },
})`
  width: 100%;
  padding-left: 20px;
`;

export const Tab = styled.View`
  margin-right: 10px;
  margin-left: 5px;
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 10px;
`;

export const TabIcon = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 60px;
`;

export const TabName = styled.Text`
  text-align: center;
  margin-top: 5px;
  font-family: "CerealLight";
  font-size: 12px;
`;
