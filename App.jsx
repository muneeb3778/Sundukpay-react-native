/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View , Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Allcomponents/HomePage';
import Wallet from './Allcomponents/Wallet';
import UserProfileScreen from './Allcomponents/Userprofile';
import LoginScreen from './Allcomponents/Login/Login';
import Landingpage from './Allcomponents/Landingpage';




const Stack = createNativeStackNavigator();


function App() {

  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="HomePage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="userprofile" component={UserProfileScreen} />
        <Stack.Screen name="Loginscreen" component={LoginScreen} />
        <Stack.Screen name="Landingpage" component={Landingpage} />
       </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
