import React from 'react'
import Texto from '../../../components/Texto'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'


export default function Detalhes({ nome, logoFazenda,
    nomeFazenda,
    descricao,
    preco,
    botao
})
{
    return (
        <>
            <Texto style={estilos.nome}>{nome}</Texto>
            <View style={estilos.fazenda}>
                <Image style={estilos.imagemFazenda} source={logoFazenda} />
                <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
            </View>
            <Texto style={estilos.descricao}>
                {descricao}
            </Texto>
            <Texto style={estilos.preco}>{preco}</Texto>
            <TouchableOpacity style={estilos.botao}>
                <Texto style={estilos.textoBotao}>{botao}</Texto>
            </TouchableOpacity>
        </>
    )
}


const estilos = StyleSheet.create({
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
    botao: {
        marginTop: 16,
        backgroundColor: '#2a9f85',
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize:16,
        lineHeight: 26,
        fontWeight: "bold",
    },
})