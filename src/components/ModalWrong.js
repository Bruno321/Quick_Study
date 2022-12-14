import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, Dimensions, Image } from 'react-native';
import TouchableComponent from './TouchableComponent.js';

const  ModalWrong = () => {
    return(
        <View style = {styles.container}>
            <Image style={styles.image} source={require('../../assets/img/incorrect.png')}/>
            <Text style={styles.title}>¡RESPUESTA INCORRECTA!</Text>
            <Text style={styles.text}>La respuesta es: 206</Text>
            <Text style={styles.text}>¡Éxito en la próxima!</Text>
            <Button title="SALIR" color={"black"}/>
        </View>
    )
}

export default ModalWrong;

const styles = StyleSheet.create({
    container: {
        height: 300,
        paddingVertical: 10,
        width: 0.9 * Dimensions.get("window").width,
        backgroundColor: "#FFF",
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'space-between',
        borderWidth: 5,
        borderColor: '#DDD'
    },
    image:{
        width: 100,
        height: 100,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    text:{
        fontSize: 15,
        fontWeight: '300',
    }
})
