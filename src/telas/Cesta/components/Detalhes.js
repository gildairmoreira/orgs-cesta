import React from 'react'
import Texto from '../../../components/Texto'
import { Image, StyleSheet, View } from 'react-native'


export default function Detalhes({nome,logoFazenda,
    nomeFazenda,
    descricao,
    preco})
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
})