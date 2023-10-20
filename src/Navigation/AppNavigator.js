import React from "react";
import {View,Text} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "../Screen/Splash"
import Login from "../Screen/Login"
import HomeScreen from "../Screen/HomeScreen";
import Signin from "../Screen/Signin";
 const AppNavigator = () =>{

    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash}  options={{headerShown:false}} />

        <Stack.Screen name="Login" component={Login}  options={{headerShown:false}} />
        <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{headerShown:false}} />
        <Stack.Screen name="Signin" component={Signin}  options={{headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>
    )
 }
 export default AppNavigator