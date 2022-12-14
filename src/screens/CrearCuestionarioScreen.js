import React from 'react'
import { View , Text, StyleSheet,TextInput} from 'react-native'


const CrearCuestionarioScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Crear un cuestionario</Text>
            <Text style={styles.text}>Titulo</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={text => console.log(text)}
                numberOfLines={1}
                placeholder={"Titulo"}
                placeholderTextColor="#EEE" 
                editable
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#0F172A'
    },
    textInput:{
        width: 500,
        height: 100,
        paddingHorizontal: 10,
        color: 'white',
    },
    text:{
        color:'white',
        fontFamily:'Inter',
        fontSize:13
    },
})

export default CrearCuestionarioScreen