import React from 'react'
import { View , Text, StyleSheet,TextInput,SafeAreaView} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import IconEnt  from 'react-native-vector-icons/Ionicons'
import CardPregunta from './CardPregunta'
import AsyncStorage from '@react-native-async-storage/async-storage';

const RevisarCuestionario = ({setFormPage,form,setForm}) => {
    const handleClick = async () => {
        //guardar en memoria
        try {
            await AsyncStorage.setItem(form.titulo, JSON.stringify(form))
            //resetear form
            console.log("form agregado")
            setForm({
                titulo:"",
                materia:"",
                preguntas:[]
            })
            //regresar a home
            //en home retroaliemntar

          } catch (e) {
            // saving error
            console.log(e)
          }
        
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerCont}>
                <Text style={styles.text1}>Cancelar</Text>
                <Text style={styles.text2}>Listo</Text>
            </View>
            <Text style={styles.title}>Revisar cuestionario</Text>
            <View style={styles.upperCont}>
                <Text style={styles.text}>Titulo</Text>
                <TextInput
                    style={styles.textInput}
                    value={form.titulo}
                    onChangeText={text=>setForm({...form,titulo:text})}
                    numberOfLines={1}
                    placeholder={"Titulo"}
                    placeholderTextColor="#EEE" 
                    editable
                />
                <Text style={styles.text}>Materia</Text>
                <TextInput
                    style={styles.textInput}
                    value={form.titulo}
                    onChangeText={text=>setForm({...form,titulo:text})}
                    numberOfLines={1}
                    placeholder={"Materia"}
                    placeholderTextColor="#EEE" 
                    editable
                />
            </View>
            <Text style={styles.text}>Preguntas</Text>
            <SafeAreaView style={styles.lowerContainer}>
                <FlatList
                    data={form.preguntas}
                    renderItem={({item})=><CardPregunta cuestionario={item}/>}
                    keyExtractor={item => item.pregunta}
                />
            </SafeAreaView>
            <View style={{...styles.footer,marginLeft:20}}>
                <View style={styles.footerItem}>
                    <IconEnt name="arrow-back-outline" color={'white'} size={28} />
                    <Text style={styles.text} onPress={()=>setFormPage(0)}>Volver</Text>
                </View>
                <View style={styles.footerItem}>
                    <IconEnt name="add-circle-outline" color={'white'} size={28} />
                    <Text style={styles.text} onPress={()=>handleClick()}>Agregar cuestionario</Text>
                </View>
            </View>
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
        padding:10,
        flex: 1
    },  
    footer:{
        width:"100%",
        height:80,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        textAlign:"center",
        padding:20
    },
    footerItem:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
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

export default RevisarCuestionario