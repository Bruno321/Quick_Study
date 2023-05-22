import React from 'react'
import { StyleSheet,View,Text } from 'react-native'

export const Header = ( )=> {
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <Text style={styles.title}>Creación</Text>
                <Text style={styles.title}>Revisión</Text>
                <Text style={styles.title}>Configuración</Text>
            </View>
            <View style={styles.selectsContainer}>
                <View style={styles.selected}></View>
                <View style={styles.unselected}></View>
                <View style={styles.unselected}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:100,
        paddingLeft:10,
        paddingRight:10
    },
    container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:15,
    },
    selectsContainer:{
        display:"flex",
        flexDirection:"row",
        marginTop:13,
        alignItems:"flex-end"
    },
    selected: {
        backgroundColor:"white",
        height:4,
        flex:1
    },
    unselected:{
        backgroundColor:"white",
        height:2,
        flex:1
    },
    title:{
        color:"white",
        fontSize:20
    }
})