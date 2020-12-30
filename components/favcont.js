import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, TouchableOpacity, Button, ScrollView, View, Text, ClippingRectangle } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Card} from 'react-native-elements'
import { CountryAPi } from '../App'

export default function FavouriteCountries({ navigation, route }, props) {
    const [countries, setCountries] = useState([])
    const [saveCountries, setSaveCountries] = useState([])
    const [saved, setSaved] = useState(false)
    const { savedCountries, setSavedCountries } = useContext(CountryAPi)
    console.log("Context API")
    console.log(savedCountries)
    
    useEffect(() => {
        const unsub=navigation.addListener('focus',()=>{
          
            setCountries(savedCountries)
            setSaveCountries(savedCountries)
        });
            
        return unsub
      
    }, [navigation])

    

    const check = (name) => {
        var exists = saveCountries.includes(name)
        return exists
    }
    const deleteCountry = (name) => {
        
        const index = countries.indexOf(name);
        // console.log(index)
        if (index > -1) {
            countries.splice(index, 1);
        }
     
        setSaveCountries(savedCountries)
        setSaved(saved ? false : true)

    }

    const scrollviewjsx = (<SafeAreaView>
        <ScrollView>
            {countries.map((value, index) => {

                return (
                    <View key={index}>
                        <View  >
                            <Card  containerStyle={{ display: "flex",
        flexDirection: "column",backgroundColor:"#F78F99",borderRadius:20}}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
                                    <TouchableOpacity
                                        activeOpacity="0.7"
                 onPress={() => { navigation.navigate("CountryDetails", { value, saveCountries }) }}
                                    >
                                        <Text style={{ color: "white" }}>{value}</Text>
                                    </TouchableOpacity>

                                    {check(value) ? <AntDesign name="star" size={24} color="#F6FA6C" onPress={() => deleteCountry(value)} />
                                        : <AntDesign name="staro" size={24} color="#F6FA6C" onPress={() => deleteCountry(value)} />
                                    }

                                </View>
                            </Card>
                        </View>

                    </View>
                )
            })}

        </ScrollView>
    </SafeAreaView>)
    return (
        <View>
            {scrollviewjsx}
        </View>
    )
}