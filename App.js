import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/screens/HomeScreen'
import notifee, { EventType } from '@notifee/react-native';
import { useLinkTo } from '@react-navigation/native';

// Elementos necesarios para la navegacion del footer
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

notifee.onBackgroundEvent(async ({ type, detail }) => {
  const { notification, pressAction } = detail;

  if (EventType.ACTION_PRESS && pressAction.id === "deafult") {
    // useLinkTo(notification.data.linkea)
    // Update external API
    console.log(notification.data)
    // Remove the notification
    await notifee.cancelNotification(notification.id);
  }
});



const App = () => {

  //poner todo el contexto mas abajo, hay q usarlo un nivel atras o importarlo aqui
  return (
      <NavigationContainer >
        <Stack.Navigator >
          <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};


export default App;
