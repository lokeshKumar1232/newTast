import { useNavigation } from "@react-navigation/native";
import React,{useState,useEffect}from "react";
import { View, Text, FlatList, TouchableOpacity, Image, TextInput } from "react-native"
import axios from "axios"
import { Colors } from "react-native/Libraries/NewAppScreen";
const Login = () => {

    const navigation = useNavigation()
    const [data,setdata] = useState([])
    const [name,setname] = useState("")
    const [filedata,setfilterdata] = useState();

useEffect(()=>{
    apidata()
},[])
    const apidata =()=>{
        axios.get("https://restcountries.com/v3.1/all").then((response) => {
     
            setdata(response.data)
            setfilterdata(response.data)
          });
          
    }

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
          // Inserted text is not blank
          // Filter the masterDataSource and update FilteredDataSource
          const newData = filedata.filter(
            function (item) {
              // Applying filter for the inserted text in search bar
              const itemData = item?.name?.common
                  ? item?.name?.common.toUpperCase()
                  : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
            }
          );
          setdata(newData);
        
        } else {
          // Inserted text is blank
          // Update FilteredDataSource with masterDataSource
          setdata(data);
        }
      };
      

    const renderItem=({item})=>{
        return(
            <TouchableOpacity
            style={{
                margin:10,
                alignItems:'center'
            }}
            onPress={()=>{navigation.navigate("DetailScreen",item)}}
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

            <TextInput
            placeholder="enter name"
            onChangeText={(txt)=>{searchFilterFunction(txt)}}
            style={{
                marginHorizontal:30,
                borderWidth:1,
                marginTop:20,
                paddingLeft:20,
                borderRadius:20
            }}
            />
 <View
 style={{
    margin:20
 }}
 >
             <Text
             style={{
                fontSize:16,
                fontWeight:'bold',
                color:"#000000"
             }}
             >
                Top Pick for you
            </Text>
        </View>
        <View style={{
           
            alignItems:'center',
           
        }}>
           
            <FlatList
            horizontal={true}
            data={data}
            renderItem={renderItem}
            />
        </View>
        </View>
       
    )
}
export default Login