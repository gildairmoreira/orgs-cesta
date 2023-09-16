import React from "react";
import { Image,  View, StyleSheet } from "react-native";
import logo from "../../../assets/logo.png";
import Texto from "../../components/Texto";
import Topo from "./components/Topo";



export default function Cesta() {
  return (
    <>
    <Topo/>

      <View style={estilos.cesta}>
        <Texto style={estilos.nome}>Cesta de Verduras</Texto>
        <View style={estilos.fazenda}>
          <Image style={estilos.imagemFazenda} source={logo} />
          <Texto style={estilos.nomeFazenda}>Jeny Jack Farm</Texto>
        </View>
        <Texto style={estilos.descricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda direto
          para sua cozinha
        </Texto>
        <Texto style={estilos.preco}>R$ 40,00</Texto>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },

  imagemFazenda: {
    width: 32,
    height: 32,
  },

  fazenda: {
    paddingVertical: 12,
    flexDirection: "row",
  },

  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },

  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },

  preco: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
