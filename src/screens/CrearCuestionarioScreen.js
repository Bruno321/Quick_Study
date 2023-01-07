import React, {useState} from 'react'
import { View , Text, StyleSheet,TextInput, TouchableOpacity} from 'react-native'
import IconEnt  from 'react-native-vector-icons/Ionicons'
import CrearCuestionario from '../components/CrearCuestionario'
import RevisarCuestionario from '../components/RevisarCuestionario'

const CrearCuestionarioScreen = () => {
    const [formPage,setFormPage] = useState(0)
    const [form,setForm] = useState({
        titulo:"",
        materia:"",
        preguntas:[]
    })

    if(formPage===0){
        return(
            <CrearCuestionario setFormPage={setFormPage} form={form} setForm={setForm}/>
        )
    }
    if(formPage===1){
        return (
            <RevisarCuestionario setFormPage={setFormPage} form={form} setForm={setForm}/>
        )
    }
}
const styles = StyleSheet.create({
    
})

export default CrearCuestionarioScreen