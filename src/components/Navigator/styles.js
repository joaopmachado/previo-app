import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  color: #fff;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px;
`;

export const Profile = styled.View`
  height: 80px;
  width: 100%;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

export const Avatar = styled.Image.attrs({
  source: {
    uri:
      "https://upload.wikimedia.org/wikipedia/commons/5/59/That_Poppy_profile_picture.jpg",
  },
  resizeMode: "cover",
})`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  margin-right: 15px;
`;

export const Details = styled.View``;

export const Welcome = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  font-family: "CerealLight";
`;

export const Name = styled.Text`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  font-family: "CerealBold";
`;

export const Links = styled.View`
  width: 100%;
  margin-bottom: auto;
`;

export const Link = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 0;
  flex-direction: row;
`;

export const LinkName = styled.Text`
  font-size: 18px;
  color: #000;
  font-family: "Cereal";
  margin-left: 10px;
`;

export const Logout = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LogoutLabel = styled.Text`
  color: tomato;
  font-family: "CerealLight";
  font-size: 16px;
  margin-left: 10px;
`;
