import React from "react";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import { Feather } from '@expo/vector-icons';
import TouchableComponent from './TouchableComponent.js';
const CardPregunta = () =>{
    return(
        <View style = {styles.container}>
            {/* <View> */}
            <View style={{flexDirection: "row", alignItems: 'center'}}>
                <Text style = {styles.titleText}>¿Cuantos huesos tiene el cuerpo humano?</Text>
                <TouchableComponent>
                    {/* <Feather name="edit" size={24} color="white" /> */}
                </TouchableComponent>
            </View>
            <View style={{flexDirection: "row", alignItems: 'center'}}>
                <Text style = {styles.subjectText}>R= 206</Text>
                <TouchableComponent>
                    {/* <Feather name="edit" size={24} color="white" /> */}
                </TouchableComponent>
            </View>
        </View>
    );
}

export default CardPregunta;

const styles = StyleSheet.create({
    container: {
        height: "auto",
        paddingVertical: 10,
        width: 0.9 * Dimensions.get("window").width,
        backgroundColor: "#4d617d",
        borderRadius: 15,
    },
    titleText:{
        color: "#fff",
        fontSize: 20,
        marginTop: 20,
        marginLeft: 15, 
        marginRight: 2.5, 
        fontWeight: "bold"
    },
    subjectText:{
        color: "#fff",
        marginLeft: 15,
        marginRight: 245, 
        fontSize: 15,
        fontWeight: '400'
    },
    isPublicText:{
        color: "#fff",
        fontSize: 15,
        textAlign: 'right',
        marginRight: 15,
        marginTop: 30
    }
})
