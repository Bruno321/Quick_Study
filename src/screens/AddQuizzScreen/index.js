import React, {useState} from 'react'
import { StyleSheet,View,Text } from 'react-native'

import {CheckQuizz} from '../../components/QuizzFormComponents/CheckQuizz'
import {ConfigQuizz} from '../../components/QuizzFormComponents/ConfigQuizz'
import {CreateQuizz} from '../../components/QuizzFormComponents/CreateQuizz'

import { Header } from '../../components/Header'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {useQuizzContext} from '../../Context/QuizzFormContext'

const Tab = createMaterialTopTabNavigator();

export const AddQuizzScreen = () => {

    // puede no funcionar
    const {screen} = useQuizzContext()
    const screens = [
        <CreateQuizz/>,
        <CheckQuizz/>,
        <ConfigQuizz/>,
    ]

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{backgroundColor:"#0F172A"},
                tabBarLabelStyle: { fontSize: 13,color:"white",marginTop:15 },
                tabBarActiveTintColor:"white"
            }}
        >
            <Tab.Screen options={{ tabBarLabel: 'Creación' }} name="CreateQuizz" component={CreateQuizz} />
            <Tab.Screen options={{ tabBarLabel: 'Revisión' }} name="CheckQuizz" component={CheckQuizz} />
            <Tab.Screen options={{ tabBarLabel: 'Configuración' }} name="ConfigQuizz" component={ConfigQuizz} />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#0F172A',
        padding:10
    },
})
