import { useNavigation } from "@react-navigation/native";
import React,{useState}from "react";
import { View, Text, TextInput, Alert, TouchableOpacity, Image } from "react-native"

const Login = () => {
    const [number,setnumber] = useState('')
    
    const navigation = useNavigation()


    return (
        <View
            style={{ flex: 1, backgroundColor: '#FFF2CD' }}
        >

            <View 
            style={{
                flexDirection:'row',
                marginTop:50,
                marginLeft:20
            }}
            >
            <TouchableOpacity>
            <Image
                source={require("../Assets/Arrow.png")}

                style={{
                    width:32,
                    height:32,
                    // resizeMode:'contain'
                }}
                />
            </TouchableOpacity>
            <View 
            style={{
                marginLeft:80
            }}
            >
                <Image
                source={require("../Assets/MainIcon.png")}

                style={{
                    width:133,
                    height:133
                }}
                />
            </View>

            </View>

            <View style={{
                marginLeft:20,
                marginTop:30
            }}>
                <Text
                style={{
                    fontSize:36,
                    lineHeight:54,
                    fontWeight:'700',
                    color:'#0D007F'
                }}
                >
                Login To

                </Text>
                <Text
                style={{
                    fontSize:36,
                    lineHeight:54,
                    fontWeight:'700',
                    color:'#0D007F'
                }}
                >
                Your Account
                </Text>
            </View>

            <View  
            style={{
                marginTop:50,
                marginHorizontal:30,

            }}
            >
                <TextInput
                placeholder="Mobile number "
                onChangeText={(txt)=>setnumber(txt)}
                style={{
                    backgroundColor:'#ffffff',
                    
                    paddingLeft:20,
                    borderRadius:30,
                    height:50
                    // borderWidth:0.5

                }}

                />
            </View>

            <TouchableOpacity
            style={{
                marginHorizontal:30,
                backgroundColor:'#F89C29',
                alignItems:'center',
                marginTop:30,
                padding:12,
                borderRadius:30
            }}
            
            >
                <Text
                style={{
                    fontSize:18,
                    fontWeight:'600',
                    color:'#FFFFFF',
                    lineHeight:27
                }}
                >
                Get OTP
                </Text>

            </TouchableOpacity>

            

            <View
            style={{
                alignItems:'center',
                marginTop:30
            }}
            > 
            <View 
            
            style={{
                flexDirection:'row'
            }}>
            <Text
            style={{
                fontSize:14,
                fontWeight:'500',
                color:'#000000'
            }}
            >
    Don't have an account? 
    </Text>
    <TouchableOpacity  
    style={{
        marginLeft:10
    }}
    onPress={()=>{
        navigation.navigate('Signin')
    }}
    >
    <Text
    style={{
        fontSize:14,
        fontWeight:'500',
        color:'#005FFF'
    }}
    >
    Sign up
    </Text>
    </TouchableOpacity>
    
            </View>
   
</View>
           

            



        </View>
    )
}
export default Login