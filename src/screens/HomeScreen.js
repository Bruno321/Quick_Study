import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CrearCuestionarioScreen from './CrearCuestionarioScreen'
import VerCuestionariosScreen from './VerCuestionariosScreen'
import BuscarCuestionarioScreen from './BuscarCuestionarioScreen'

import IconEnt  from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const HomeScreen = () => {

    return (
        <Tab.Navigator
            initialRouteName="Add"
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                activeTintColor: '#FFFFFF',
                tabBarStyle: {
                    backgroundColor: '#0F172A',
                    borderTopColor: 'transparent'
                }
            }}
            >
            <Tab.Screen
            name="Main"
            component={VerCuestionariosScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color,size}) => (
                    <IconEnt name="home-outline" color={color} size={size} />
                ),
            }}
            />
            <Tab.Screen
            name="Search"
            component={BuscarCuestionarioScreen}
            options={{
                // tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <IconEnt name="search" color={color} size={size} />
                ),
            }}
            // options={screenOptions('notifications', 'Notificaciones')} 
            />
            <Tab.Screen
            name="Add"
            component={CrearCuestionarioScreen}
            options={{
                // tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <IconEnt name="add-circle-outline" color={color} size={size} />
                ),
            }}
            // options={screenOptions('notifications', 'Notificaciones')} 
            />
      </Tab.Navigator>
    )
}

export default HomeScreen