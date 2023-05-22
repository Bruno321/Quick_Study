import React from 'react'
import { View , Text, StyleSheet,TextInput,SafeAreaView} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import { QuestionCard } from '../../Cards/QuestionCard'

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useQuizzContext } from '../../../Context/QuizzFormContext'

export const CheckQuizz = () => {
    const {setScreen,form,setForm} = useQuizzContext()
    const handleClick = async () => {
        //guardar en memoria
        try {
            await AsyncStorage.setItem(form.titulo, JSON.stringify(form))
            //resetear form
            console.log("form agregado")
            setForm({
                title:"",
                subject:"",
                questions:[],
                owner:"641d40e4e5a2bcc4935390a3"
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
            <Text style={styles.title}>Revisar cuestionario</Text>
            <View style={styles.upperCont}>
                <Text style={styles.text}>Titulo</Text>
                <TextInput
                    style={styles.textInput}
                    numberOfLines={1}
                    placeholder={"Título del cuestionario"}
                    value={form.title}
                    onChangeText={text=>setForm({...form,title:text})}
                    // placeholderTextColor="#EEE" 
                    placeholderTextColor="gray" 
                    editable
                />
                <Text style={styles.text}>Materia</Text>
                <TextInput
                    style={styles.textInput}
                    numberOfLines={1}
                    placeholder={"Materia del cuestionario"}
                    value={form.subject}
                    onChangeText={text=>setForm({...form,subject:text})}
                    placeholderTextColor="gray" 
                    editable
                />
            </View>
            <Text style={styles.title}>Preguntas</Text>
            
            {form.questions.length > 0 ? 
            <FlatList
                data={form.questions}
                keyExtractor={item => item.questionTitle}
                renderItem={({item})=><QuestionCard question={item}/>}
            />
            : 
            <Text style={{color:"white",fontSize:20}}>Aún no a agregado preguntas</Text>}
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#0F172A',
        alignItems:"center",
        display:"flex",
        flexDirection:"column",
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
        width:400,
        paddingLeft:20,
        paddingRight:20
    },
    lowerContainer:{
        backgroundColor:"red",
        width:400,
        paddingLeft:20,
        paddingRight:20
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
        marginTop:30,
        backgroundColor:"#327DEE",
        width:250,
        height:60,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
    },
    textInput2:{
        paddingTop:20,
        backgroundColor: '#ffffff',
    },
    text:{
        color:'white',
        fontFamily:'Inter',
        marginTop:15,
        fontSize:16,
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
        marginTop:20,
        fontSize:23,
    },
    largeInput:{
        height:150, 
        textAlignVertical: 'top',
        backgroundColor:"#334155"
    }
})

