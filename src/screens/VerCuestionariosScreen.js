import React from 'react'
import { View , Text, StyleSheet} from 'react-native'
// import {Notifications} from 'react-native-notifications';
import CardCuestionario from '../components/CardCuestionario'
import CardPregunta from '../components/CardPregunta' //no




const VerCuestionariosScreen = () => {
    // Notifications.postLocalNotification({
    //     title: "Local notification",
    //     body: "This notification was generated by the app!",
    //     extra: "data"
    // });
    return (
        <View style={styles.container}>
            <Text style={styles.title1}>¿Por dónde quieres empezar?</Text>
            <View style={styles.upperContainer}>
                <View style={styles.options}>
                    <Text style={styles.title}>
                        Buscar
                    </Text>
                    <Text style={styles.text}>
                        Cuestionarios creados por ti
                    </Text>
                </View> 

                <View style={styles.options}>
                    <Text style={styles.title}>
                        Crear
                    </Text>
                    <Text style={styles.text}>
                        Tus propios cuestionarios
                    </Text>
                </View>
            </View>
            <Text style={styles.title}>Explorar temas</Text>
            <View style={styles.downContainer}>
                    <View style={styles.subject}>
                        <Text style={styles.text2}>Español</Text>
                    </View>
                    <View style={styles.subject}>
                        <Text style={styles.text2}>Química</Text>
                    </View>
                    <View style={styles.subject}>
                        <Text style={styles.text2}>Matematicas</Text>
                    </View>
                    <View style={styles.subject}>
                        <Text style={styles.text2}>Historia</Text>
                    </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#0F172A",
    },
    text:{
        color:'white',
        fontFamily:'Inter',
        fontSize:13
    },
    text2:{
        color:'white',
        fontFamily:'Inter',
        fontSize:20,
    },
    title1:{
        color:'white',
        fontFamily:'Inter',
        fontSize:30,
        fontWeight:'500', 
        textAlign:'center',
        marginTop:40
    },
    title:{
        color:'white',
        fontFamily:'Inter',
        fontSize:20,
        fontWeight:'500',
    },
    subject:{
        backgroundColor:'#334155',
        width:350,
        height:100,
        borderRadius:20,
        marginTop:20,
        display:'flex',
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center'
    },
    options:{
        backgroundColor:'#334155',
        width:150,
        height:100,
        borderRadius:20,
        padding:20,
        marginTop:20
    },
    upperContainer:{
        flex:3,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    downContainer:{
        flex:7,
        padding:20
    }
    
})

export default VerCuestionariosScreen