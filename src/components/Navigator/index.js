import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

import {
  Container,
  Profile,
  Avatar,
  Details,
  Welcome,
  Name,
  Links,
  Link,
  LinkName,
  Logout,
  LogoutLabel,
} from "./styles";

export default function Navigator() {
  return (
    <Container>
      <Profile>
        <Avatar />
        <Details>
          <Welcome>Boa noite,</Welcome>
          <Name>
            {"Gabi Abranches".length > 15
              ? "Gabi Abranches".substring(0, 15 - 3) + "..."
              : "Gabi Abranches"}
          </Name>
        </Details>
      </Profile>
      <Links>
        <Link>
          <>
            <Icon name="wallet" color="tomato" size={18} />
            <LinkName>Minha carteira</LinkName>
          </>
        </Link>
        <Link>
          <>
            <Icon name="calculator" color="tomato" size={18} />
            <LinkName>Extrato</LinkName>
          </>
        </Link>
        <Link>
          <>
            <Icon name="staro" color="tomato" size={18} />
            <LinkName>Sonhos</LinkName>
          </>
        </Link>
        <Link>
          <>
            <Icon name="qrcode" color="tomato" size={18} />
            <LinkName>Cashback</LinkName>
          </>
        </Link>
        <Link>
          <>
            <Icon name="isv" color="tomato" size={18} />
            <LinkName>Lojas parceiras</LinkName>
          </>
        </Link>
        <Link>
          <>
            <Icon name="hearto" color="tomato" size={18} />
            <LinkName>Vaquinha</LinkName>
          </>
        </Link>
        <Link>
          <>
            <Icon name="message1" color="tomato" size={18} />
            <LinkName>Suporte</LinkName>
          </>
        </Link>
        <Link>
          <>
            <Icon name="questioncircleo" color="tomato" size={18} />
            <LinkName>Ajuda</LinkName>
          </>
        </Link>
        <Link>
          <>
            <Icon name="setting" color="tomato" size={18} />
            <LinkName>Configurações</LinkName>
          </>
        </Link>
      </Links>
      <Logout>
        <>
          <Icon name="logout" color="tomato" />
          <LogoutLabel>Sair da conta</LogoutLabel>
        </>
      </Logout>
    </Container>
  );
}
