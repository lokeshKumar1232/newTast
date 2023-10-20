import { useNavigation } from "@react-navigation/native";
import React,{useState}from "react";
import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native"

const Login = () => {
    const [name,setname] = useState('')
    const [Password,setpassword] = useState("")
    const navigation = useNavigation()
    const UserName="Lokesh"
    const Pass = "Lokesh10"

    const Validation = ()=>{
        if(name==UserName&&Password==Pass){
            Alert.alert("scussesfully logged in ")
            navigation.navigate('HomeScreen')
        }
        else{
            Alert.alert("show not good")
        }
    }
    return (
        <View
            style={{ flex: 1, backgroundColor: '#ffffff' }}
        >
            <View style={{
                marginLeft: 20,
                marginTop: 200
            }}>
                <Text style={{
                    fontSize: 40,
                    fontWeight: 'bold'
                }}>
                    Login To
                </Text>
                <Text
                    style={{
                        fontSize: 40,
                        fontWeight: 'bold'
                    }}
                >
                    Your Account
                </Text>
            </View>

            <View style={{
                marginLeft:20
            }}>
                <TextInput
                    placeholder="UserName"
                    onChangeText={(txt)=>setname(txt)}
                />

                <TextInput
                    placeholder="Password"
                    onChangeText={(txt)=>setpassword(txt)}
                />
            </View>

<TouchableOpacity 
style={{
    marginLeft:20
}}
onPress={()=>{
Validation()
}}
>
    <Text>
        Login
    </Text>
</TouchableOpacity>



        </View>
    )
}
export default Login