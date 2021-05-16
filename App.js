// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home';
import Details from './components/Details';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Home */}
        <Stack.Screen
        name="Home" 
        component={Home}
        options={{
          headerShown: false,
        }} 
        />

        {/* Details */}
        <Stack.Screen
        name="Details" 
        component={Details}
        options={{
          headerShown: false,
        }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;