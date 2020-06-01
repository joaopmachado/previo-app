import styled from "styled-components/native";

import logoSrc from "../../assets/images/logo.png";

export const Page = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  source: logoSrc,
  resizeMode: "contain",
})`
  width: 195px;
  height: 90px;
`;

export const Header = styled.View`
  width: 100%;
  background-color: #ff6700;
  padding: 30px;
  padding-top: 10px;
`;

export const Resume = styled.Text`
  font-size: 24px;
  font-family: "CerealLight";
  color: rgba(255, 255, 255, 0.8);
`;

export const BigPrice = styled.Text`
  font-size: 36px;
  font-family: "CerealBold";
  color: rgba(255, 255, 255, 1);
`;

export const SmallPrice = styled.Text`
  font-size: 14px;
  font-family: "CerealLight";
  color: rgba(255, 255, 255, 0.6);
`;

export const Content = styled.View`
  width: 100%;
  padding: 10px 30px;
`;

export const LastDeposit = styled.View`
  padding: 25px;
  background: #dfe6e9;
  border-radius: 15px;
  margin-top: -25px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const TextMuted = styled.Text`
  font-family: "CerealLight";
  color: rgba(0, 0, 0, 0.6);
`;

export const DepositAmount = styled.Text`
  font-family: "CerealBold";
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
`;
