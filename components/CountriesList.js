import React, { useState, useEffect, useContext } from 'react';
import { ActivityIndicator,SafeAreaView, TouchableOpacity, Button, ScrollView, View, Text, ClippingRectangle } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { getAllCountries } from './api'
import { Card, ListItem, Icon } from 'react-native-elements'
import { CountryAPi } from '../App'

function CountriesList({ navigation, route }, props) {
    const [countries, setCountries] = useState([])
    const [saveCountries, setSaveCountries] = useState([])
    const { savedCountries, setSavedCountries } = useContext(CountryAPi)
    const[save,setSave]=useState(true)
  

    useEffect(() => {
        const getData = async () => {

            const data = await getAllCountries()
            setCountries(data)
           
        }
        const unsubscribe = navigation.addListener('focus', () => {
          
            countries.length === 0 ? getData() : setCountries(countries)
            setSaveCountries(savedCountries)
        });

        return unsubscribe

  
    }, [navigation])
 
    const checkSave = (name) => {
        var exists = saveCountries.includes(name)
        return exists
    }
    const saveCountry = (name) => {
        if (!saveCountries.includes(name)) {
            saveCountries.push(name)
            // setSaveCountries(saveCountries)
            setSavedCountries(saveCountries)
            console.log(savedCountries)
            console.log("Preess")
            setSave(save?false:true)
        }
        
    }

    const scroll = (<SafeAreaView>
        <ScrollView>
            {countries.map((value, index) => {

                return (
                    <View key={index}>
                        <View>
                            <Card containerStyle={{ display: "flex",
        flexDirection: "column",backgroundColor:"#F78F99",height:100,borderRadius:20}}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <TouchableOpacity
                                        activeOpacity="0.7"
                                        onPress={() => { navigation.navigate("CountryDetails", { value, saveCountries }) }}
                                    >
                                        <Text style={{ color: "white",fontSize:30 }}>{value}</Text>
                                    </TouchableOpacity>

                                    {checkSave(value) ? <AntDesign name="star" size={24} color="#F6FA6C" onPress={() => saveCountry(value)} />
                                        : <AntDesign name="staro" size={24} color="#F6FA6C" onPress={() => saveCountry(value)} />
                                    }

                                </View>
                            </Card>
                        </View>

                    </View>
                )
            })}

        </ScrollView>
    </SafeAreaView>)
    if(countries.length === 0){
        return(
            <View style={{ flex: 1,
                justifyContent: 'center',
               
                backgroundColor: '#FAFAFA',
                padding: 8,
                alignItems: "center",}}>
                <ActivityIndicator size="large" color="#F6FA6C" />
            </View>
        )
    }
    return (
        <View>
            {scroll}
          
        </View>
    )
}

export default CountriesList