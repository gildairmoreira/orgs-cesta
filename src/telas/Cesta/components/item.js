import React from 'react'
import Texto from '../../../components/Texto'
import { FlatList, Image, StyleSheet, View } from 'react-native'

export default function Item({item: {nome,imagem}})
{
    return <View style={estilos.item}>
        <Image style={estilos.imagem} source={imagem} />
        <Texto style={estilos.nome} >
            {nome}
        </Texto>
    </View>
}

const estilos = StyleSheet.create({
    
    item: { 
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ececec',
        alignItems: 'center',
        paddingVertical: 16,
        marginHorizontal:16,
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        color: '#464646',
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
    }
})