import React from "react";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import IconEnt  from 'react-native-vector-icons/MaterialCommunityIcons'

export const QuestionCard = ({question}) =>{
    const {questionTitle,answer} = question
    return(
        <View style = {styles.container}>
            <View style={styles.item}>
                <Text style = {styles.titleText}>{questionTitle}</Text>
                <IconEnt name="clipboard-edit-outline" color={'white'} size={28} />
            </View>
            <View style={styles.item}>
                <Text style = {styles.subjectText}>R= {answer}</Text>
                <IconEnt name="delete-outline" color={'white'} size={28} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height: 125,
        // paddingVertical: 10,
        padding:10,
        width: 0.9 * Dimensions.get("window").width,
        backgroundColor: "#334155",
        borderRadius: 15,
        marginTop:20
    },
    item:{
        height:"50%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },  
    titleText:{
        color: "#fff",
        fontSize: 23,
        fontWeight: "bold"
    },
    subjectText:{
        color: "#fff",
        
        fontSize: 17,
        fontWeight: '400'
    },
})
