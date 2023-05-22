import React from "react";
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';

export const QuizzCard = () =>{
    return(
        <View style = {styles.container}>
            <Text style = {styles.titleText}>Las palabras esdrújulas</Text>
            <Text style = {styles.subjectText}>Español</Text>
            <Text style = {styles.isPublicText}>Público</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 125,
        width: 0.9 * Dimensions.get("window").width,
        backgroundColor: "#4d617d",
        borderRadius: 15,
    },
    titleText:{
        color: "#fff",
        fontSize: 20,
        marginTop: 20,
        marginLeft: 15, 
        fontWeight: "bold"
    },
    subjectText:{
        color: "#fff",
        marginLeft: 15, 
        fontSize: 15,
        fontWeight: '100'
    },
    isPublicText:{
        color: "#fff",
        fontSize: 15,
        textAlign: 'right',
        marginRight: 15,
        marginTop: 30
    }
})
