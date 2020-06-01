import { Platform } from "react-native";

export function formatPrice(value) {
  if (Platform === "android") {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(parseFloat(value));
  }

  return (
    "R$" +
    parseFloat(value).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}
