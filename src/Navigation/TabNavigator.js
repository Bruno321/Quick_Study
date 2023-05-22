import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {HomeScreen} from '../screens/HomeScreen'
import {SearchScreen} from '../screens/SearchScreen'
import {AddQuizzScreen} from '../screens/AddQuizzScreen'

import IconEnt  from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
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
            component={HomeScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color,size}) => (
                    <IconEnt name="home-outline" color={color} size={size} />
                ),
            }}
            />
            <Tab.Screen
            name="Search"
            component={SearchScreen}
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
            component={AddQuizzScreen}
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
