import React, {useEffect, useState} from 'react'
import { View , Text, StyleSheet,TextInput, TouchableOpacity} from 'react-native'

import { useQuizzContext } from '../../../Context/QuizzFormContext'
import FlashMessage, { showMessage } from 'react-native-flash-message';


export const CreateQuizz = () => {
    const {setScreen,form,setForm} = useQuizzContext()
    const [question,setQuestion] = useState({
        questionTitle:"",
        answer:"",
    })
    const agregarPregunta = () =>{
        setForm({...form,questions:[...form.questions,question]})
        setQuestion({
            questionTitle:"",
            answer:""
        })
        showMessage({
            message:"Exito",
            description:"Pregunta agregada exitosamente",
            type: "success",
            icon: "auto"
        })
    }

    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crear cuestionario</Text>
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
            <Text style={styles.title}>Agregar pregunta</Text>
            <View style={styles.upperCont}>
                <Text style={styles.text}>Pregunta</Text>
                <TextInput
                    style={styles.textInput}
                    numberOfLines={1}
                    placeholder={"Pregunta"}
                    value={question.questionTitle}
                    onChangeText={text=>setQuestion({...question,questionTitle:text})}
                    placeholderTextColor="gray" 
                    editable
                />
                <Text style={styles.text}>Respuesta</Text>
                <TextInput
                    style={[styles.textInput,styles.largeInput]}
                    multiline={true}
                    numberOfLines={2}
                    placeholder={"Respuesta"}
                    value={question.answer}
                    onChangeText={text=>setQuestion({...question,answer:text})}
                    placeholderTextColor="gray" 
                    editable
                />
            </View>

            <TouchableOpacity 
                style={styles.button}
                onPress={agregarPregunta}
            >
                <Text style={[styles.text,{marginTop:0}]}>Agregar Pregunta</Text>
            </TouchableOpacity>
            
            <FlashMessage position={"bottom"}/>
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
        marginTop:20,
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
