import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import  { NotificationContext as NotiCont} from "./src/Context/NotificationContext";
import { View , Text, StyleSheet, TextInput, Pressable} from 'react-native'


function NotificationScreen() {
    return (
        <View  style={styles.container}>
            <Text style={{color:"white",fontSize:30,fontFamily:'Inter'}}>Historia, Examen 1</Text>
            <Text style={{color:"white",fontSize:20,fontFamily:'Inter',marginTop:10}}>¿Cuando fue la independencia de Mexico?</Text>
            <TextInput style={styles.input} placeholder='Respuesta'/> 
            <Pressable style={styles.button}><Text style={{color:"white",fontSize:20,fontFamily:'Inter'}}>Revisar</Text></Pressable> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#0F172A",
        display:"flex",
        alignItems:"center",
        padding:30
    },
    input: {
        width: "100%",
        height: 90,
        paddingHorizontal: 10,
        color: 'white',
        backgroundColor:'#334155',
        borderRadius:10,
        marginTop:20
    },
    button:{
        backgroundColor:'#334155',
        width:350,
        height:100,
        borderRadius:20,
        marginTop:40,
        display:'flex',
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center'
    }
})
  

AppRegistry.registerComponent(appName, () => 
App
);
AppRegistry.registerComponent('notification-component', () => NotificationScreen);
