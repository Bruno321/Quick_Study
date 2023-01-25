import React, { useEffect, useState } from 'react'
import { View , Text, StyleSheet,SafeAreaView,FlatList, Pressable} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CuestionarioComponent from '../components/CuestionarioComponent';
import notifee , {EventType } from '@notifee/react-native';

const VerCuestionariosScreen = () => {
    async function onDisplayNotification() {
        // Request permissions (required for iOS)
        await notifee.requestPermission()
    
        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
        });
    
        // Display a notification
        await notifee.displayNotification({
          title: '¿Cuando fue la independencia de Mexico?',
          body: 'Materia: Historia, Examen 1',
          data:{linkea:"/home",info:"pregunta:kk,respuesta:kk"},
          android: {
            channelId,
            // pressAction is needed if you want the notification to open the app when pressed
            pressAction: {
              id: 'default',
              mainComponent:'notification-component'
            },
          },
        });
      }
    const [cuestionarios,setCuestionarios] = useState([])
    const [handleRender,setHandleRender] = useState(0)
    const [data,setData] = useState()
    useEffect(()=>{
        const getCuestionarios = async () => {
            let keys = []
            let values
            try {
                keys = await AsyncStorage.getAllKeys()
                values = await AsyncStorage.multiGet(keys)
                setCuestionarios(values)
            } catch(e) {
                // read key error
                console.log(e)
            }
        }
        getCuestionarios()
    },[])


    const handlePress = (ind) => {
        setHandleRender(1)
        let cuest = [...cuestionarios[ind]]
        cuest[1] = JSON.parse(cuest[1])
        setData(cuest[1])
    }
    return (
       <>
        {handleRender===0 ? 
         <View style={styles.container}>
            <Pressable style={styles.subject} onPress={()=>onDisplayNotification()}><Text>NOTIFICACION</Text></Pressable>
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
         <SafeAreaView style={styles.downContainer}>
             <FlatList
                 data={cuestionarios}
                 renderItem={({item,index})=>{
                     return (
                         <TouchableOpacity style={styles.subject} key={index} onPress={()=>handlePress(index)} >
                             <Text style={styles.text2}>{item[0]}</Text>
                         </TouchableOpacity>
                     )
                 }}
                 keyExtractor={item => item[0]}
             />
         </SafeAreaView>
     </View>
     :
     <CuestionarioComponent  data={data} setHandleRender={setHandleRender}/>
    }
       </>
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
        padding:20,
    }
    
})

export default VerCuestionariosScreen