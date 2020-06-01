import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Keyboard, ActivityIndicator } from "react-native";

import {
  Page,
  Header,
  Logo,
  Content,
  H1,
  Input,
  Button,
  ButtonLabel,
  Overlay,
  CardLoading,
} from "./styles";

import { setToken } from "../../store/actions/auth.action";

export default function Login() {
  const dispatch = useDispatch();

  let passwordRef = useRef(null);

  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleCpf(text) {
    let mask = text;

    let letterCount = text.length;

    if (letterCount >= 15) return;

    if (letterCount >= 14) {
      setCpf(mask);
      return passwordRef.focus();
    }

    if (letterCount === 3 || letterCount === 7) {
      mask = `${mask}.`;
    }

    if (letterCount === 11) {
      mask = `${mask}-`;
    }

    setCpf(mask);
  }

  function handleSubmit() {
    Keyboard.dismiss();

    setLoading(true);

    setTimeout(() => {
      dispatch(setToken("prev.io é o vencedor do hackathon"));
    }, 1500);
  }

  return (
    <Page>
      {loading && (
        <Overlay>
          <CardLoading>
            <ActivityIndicator size="large" color="#ff6700" />
          </CardLoading>
        </Overlay>
      )}
      <Header>
        <Logo />
      </Header>
      <Content>
        <H1>Entre com seus dados</H1>
        <Input
          placeholder="CPF"
          keyboardType="number-pad"
          value={cpf}
          onChangeText={handleCpf}
        />
        <Input
          ref={(ref) => (passwordRef = ref)}
          placeholder="Informe sua senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button onPress={handleSubmit}>
          <ButtonLabel>Entrar</ButtonLabel>
        </Button>
      </Content>
    </Page>
  );
}
