import styled from "styled-components/native";

import logoSrc from "../../assets/images/logo.png";
import renderSrc from "../../assets/images/presentation.jpg";

export const Page = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  source: logoSrc,
  resizeMode: "contain",
})`
  width: 160px;
  height: 70px;
  margin-top: 50px;
`;

export const Render = styled.Image.attrs({
  source: renderSrc,
  resizeMode: "contain",
})`
  width: 100%;
  height: 320px;
`;

export const H1 = styled.Text`
  font-size: 32px;
  line-height: 34px;
  padding: 25px 30px;
  font-family: "CerealBlack";
  color: #2f3640;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${({ type }) => (type === "login" ? "80px" : "56px")};
  background: ${({ type }) => (type === "login" ? "#FF6700" : "transparent")};
`;

export const ButtonLabel = styled.Text`
  font-size: 18px;
  text-transform: uppercase;
  color: ${({ color }) => color};
  font-family: "CerealMedium";
`;
