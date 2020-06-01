import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

import logoSrc from "../../assets/images/logo.png";

export const Page = styled.KeyboardAvoidingView`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
`;

export const Logo = styled.Image.attrs({
  source: logoSrc,
  resizeMode: "contain",
})`
  width: 120px;
  height: 40px;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-family: "CerealBlack";
  color: rgba(0, 0, 0, 0.8);
  font-size: 28px;
`;

export const Subtitle = styled.Text`
  font-family: "CerealMedium";
  color: rgba(0, 0, 0, 0.3);
  font-size: 18px;
`;

export const Input = styled.TextInput`
  padding: 10px 30px;
  font-size: 22px;
  font-family: "CerealBold";
`;

export const MaskInput = styled(TextInputMask)`
  padding: 10px 30px;
  font-size: 22px;
  font-family: "CerealBold";
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80px;
  background: ${({ disabled }) => (disabled ? "#616161" : "#FF6700")};
`;

export const ButtonLabel = styled.Text`
  font-size: 18px;
  text-transform: uppercase;
  color: #fff;
  font-family: "CerealMedium";
`;

export const Tabs = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 30px;
  margin-top: 15px;
  margin-bottom: 100px;
`;

export const Tab = styled.TouchableOpacity`
  padding: 20px;
  width: 48%;
  height: 210px;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  border: solid 2px
    ${({ actived }) => (actived ? "#ff6700" : "rgba(0, 0, 0, 0.05)")};
  align-items: center;
`;

export const TabImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 120px;
  height: 120px;
`;

export const TabName = styled.Text`
  font-size: 14px;
  font-family: "CerealLight";
  color: #ff6700;
`;

export const BigText = styled.Text`
  font-size: 46px;
  font-family: "CerealBlack";
  color: #ff6700;
  text-align: center;
`;

export const SmallText = styled.Text`
  font-family: "CerealMedium";
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  font-size: 20px;
`;
