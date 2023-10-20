import React from "react";
import {View,Text} from "react-native"
 const HomeScreen = () =>{
    return(
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            
        }}>
            <Text
            style={{
                color:'blue'
            }}
            >
            welcome to HomeScreen
            </Text>
        </View>
    )
 }
 export default HomeScreen