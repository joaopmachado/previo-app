import styled from "styled-components/native";

import logoSrc from "../../assets/images/logo-white.png";

export const Page = styled.KeyboardAvoidingView`
  flex: 1;
  background: #fff;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #ff6700;
  height: 40%;
`;

export const Logo = styled.Image.attrs({
  source: logoSrc,
  resizeMode: "contain",
})`
  width: 140px;
  height: 70px;
`;

export const Content = styled.View`
  width: 100%;
  padding: 30px;
  background: #fff;
  margin-top: -20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const H1 = styled.Text`
  font-size: 22px;
  font-family: "CerealBold";
`;

export const Input = styled.TextInput`
  padding: 15px;
  margin: 10px 0;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

export const Button = styled.TouchableHighlight`
  width: 100%;
  height: 64px;
  background: #2f3640;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 15px;
`;

export const ButtonLabel = styled.Text`
  color: #fff;
  font-family: "CerealMedium";
`;

export const Overlay = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const CardLoading = styled.View`
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 20px;
`;
