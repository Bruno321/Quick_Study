import React, { useState } from 'react';
import { StyleSheet, Text, FlatList, View, SafeAreaView } from 'react-native';
import {QuizzCard} from '../../components/Cards/QuizzCard'

export const QuizzInformationScreen = ({data,setHandleRender}) => {
    console.log(data)
    return(
        <View style={styles.container}> 
            <View style={styles.headerCont}>
                <Text style={styles.text1} onPress={()=>setHandleRender(0)} >Volver</Text>
                <Text style={styles.text2}>Guardar cambios</Text>
            </View>
            <Text style={styles.text}>{data.titulo}</Text>
            <Text style={styles.text}>Materia: {data.materia}</Text>
            <SafeAreaView style={styles.area}>
                <FlatList
                    data={data.preguntas}
                    renderItem={({item})=><QuizzCard cuestionario={item}/>}
                    keyExtractor={item => item.pregunta}
                />
            </SafeAreaView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#0F172A",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    text:{
        color:'white',
        fontFamily:'Inter',
        fontSize:30,
        fontWeight:'500',
        marginTop:10
    },
    area:{
        flex:1
    },  
    headerCont:{
        display:"flex",
        width:"100%",
        height:50,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    text1:{
        color:'white',
        fontFamily:'Inter',
        fontSize:13,
        marginLeft:10
    },
    text2:{
        color:'white',
        fontFamily:'Inter',
        fontSize:13,
        marginRight:10
    },
});
	