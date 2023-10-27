import React from "react";
import {View,Text} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "../Screen/Splash"
import DetailScreen from "../Screen/DetailScreen";
 const AppNavigator = () =>{

    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash}  options={{headerShown:false}} />
      <Stack.Screen name="DetailScreen" component={DetailScreen}  options={{headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>
    )
 }
 export default AppNavigator