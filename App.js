import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/screens/HomeScreen'
// Elementos necesarios para la navegacion del footer
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
  </NavigationContainer>
  );
};


export default App;
