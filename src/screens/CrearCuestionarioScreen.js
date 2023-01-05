import React from 'react'
import { View , Text, StyleSheet,TextInput, TouchableOpacity} from 'react-native'
import IconEnt  from 'react-native-vector-icons/Ionicons'


const CrearCuestionarioScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerCont}>
                <Text style={styles.text1}>Cancelar</Text>
                <Text style={styles.text2}>Listo</Text>
            </View>
            <Text style={styles.title}>Crear un cuestionario</Text>
            <View style={styles.upperCont}>
                <Text style={styles.text}>Titulo</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => console.log(text)}
                    numberOfLines={1}
                    placeholder={"Titulo"}
                    placeholderTextColor="#EEE" 
                    editable
                />
                <Text style={styles.text}>Materia</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => console.log(text)}
                    numberOfLines={1}
                    placeholder={"Materia"}
                    placeholderTextColor="#EEE" 
                    editable
                />
            </View>
            <Text style={styles.text}>Preguntas</Text>
            <View style={styles.lowerContainer}>
                <View style={styles.inputsCont}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput2}
                            onChangeText={text => console.log(text)}
                            numberOfLines={1}
                            placeholderTextColor="#EEE" 
                            editable
                        />
                    </View>
                    <Text style={styles.text}>Pregunta</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput2}
                            onChangeText={text => console.log(text)}
                            numberOfLines={1}
                            placeholderTextColor="#EEE" 
                            editable
                        />
                    </View>
                    <Text style={styles.text}>Respuesta</Text>
                </View>
            </View>
            {/* <View>
                <IconEnt name="add-circle-outline" color={'white'} size={28} />
            </View> */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Agregar Pregunta</Text>
            </TouchableOpacity>
            
            <IconEnt name="arrow-forward" color={'white'} size={28} style={{marginLeft:250}}/>
            <Text style={{...styles.text,marginLeft:250}}>Siguiente</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#0F172A',
        // backgroundColor:'blue',
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
    },
    headerCont:{
        display:"flex",
        width:"100%",
        height:50,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    upperCont:{
        // backgroundColor:"red",
        width:400,
        // height:220,
        padding:20
    },
    lowerContainer:{
        marginTop:10,
        backgroundColor:"#334155",
        width:355,
        height:300,
        padding:10
    },  
    inputsCont:{
        // backgroundColor:"green"
    },
    textInput:{
        width: "100%",
        height: 60,
        paddingHorizontal: 10,
        color: 'white',
        backgroundColor:'#334155',
        borderRadius:10,
        marginTop:10
    },
    inputContainer:{
        borderBottomColor:"#0F172A",
        borderBottomWidth:2,
        height: 70
    },
    button:{
        marginTop:15
    },
    textInput2:{
        paddingTop:20,
        // backgroundColor: '#ffffff',
    },
    text:{
        color:'white',
        fontFamily:'Inter',
        marginTop:8,
        fontSize:16
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
    title:{
        color:'white',
        fontFamily:'Inter',
        marginTop:10,
        fontSize:23,
    }
})

export default CrearCuestionarioScreen