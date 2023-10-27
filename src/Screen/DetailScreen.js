import { useNavigation } from "@react-navigation/native";
import React,{useState,useEffect}from "react";
import { View, Text, FlatList, TouchableOpacity, Image, TextInput } from "react-native"
const DetailScreen = ({route,props}) => {

    const navigation = useNavigation()
    
const data= route?.params


    const renderItem=({item})=>{
        return(
            <TouchableOpacity
            style={{
                margin:10,
                alignItems:'center'
            }}
            onPress={()=>{navigation.navigate("",{item})}}
            >
                <Image
                source={{uri:item?.flags?.png}}
                style={{
                    width:200,
                    height:300,
                    borderRadius:20
                }}
                />
                <View
                style={{
                    marginTop:20,
                    backgroundColor:'gray',
                    padding:10,
                    borderRadius:10
                    
                }}
                >
                    <Text>
{item?.name?.common}
                    </Text>
                </View>
                
                <Text>
                    
{console.log("24==>",item?.name?.common)}
                </Text>
            </TouchableOpacity>
        )
    }
    return (
        <View
        
        >
{console.log("data==>",data)}

            
            <View
            style={{
                margin:10,
                alignItems:'center'
            }}
            
            >
                <Image
                source={{uri:data?.flags?.png}}
                style={{
                    width:200,
                    height:300,
                    borderRadius:20
                }}
                />
                <View
                style={{
                    marginTop:20,
                    backgroundColor:'gray',
                    padding:10,
                    borderRadius:10
                    
                }}
                >
                    <Text>
{data?.name?.common}
                    </Text>
                    
                </View>
                <TouchableOpacity
                onPress={()=>{navigation.goBack()}}
                >

                <Text
                style={{
                    marginTop:20
                }}
                >
                        {data?.name?.official}
                    </Text>
                </TouchableOpacity>
                
                
            </View>
        

        </View>
       
    )
}
export default DetailScreen