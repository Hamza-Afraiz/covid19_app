import React, { useEffect, useState } from 'react';
import {ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { getCountryCases, getCountryPopulation } from './api'



export default function CountryDetails({ navigation, route }) {
    console.log(route.params)
    console.log("countrydetails")
    const [data, setData] = useState({});
    const [population, setPopulation] = useState({});
    useEffect(() => {
        const getData = async (countryName) => {
            const res = await getCountryCases(countryName)
            setData(res)
            console.log("Helloo")
            const pop = await getCountryPopulation(countryName)
            setPopulation(pop)

        }
        getData(route.params.value)
    }, [])
    if((Object.keys(data).length === 0 && data.constructor === Object)&&(Object.keys(population).length === 0 && population.constructor === Object)){
        return(
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#8CBBF1" />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>COVID-19 Cases</Text>
            <Text style={{ fontSize: 30, fontWeight: "bold", paddingBottom: 10 }}>{route.params.value}</Text>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap", alignItems: "center" }}>
                <View style={{ ...styles.component }}>
                    <View style={styles.componentHeader}>
                        <Text style={{ fontSize: 15, color: "red" }}>Confirmed</Text>
                        <Text style={{ fontSize: 25 }}>{data.confirmed}</Text>
                        <Text style={{ fontSize: 15, color: "red" }}>Country Percentage</Text>
                        <Text style={{ fontSize: 15 }}>{((data.confirmed / population.population) * 100).toFixed(3)}%</Text>
                        <Text style={{ fontSize: 15, color: "red" }}>{new Date(data.lastUpdate).toDateString()}</Text>
                      

                    </View>

                </View>
                <View style={{ ...styles.component }}>
                    <View style={styles.componentHeader}>
                        <Text style={{ fontSize: 15, color: "red" }}>Recovered</Text>
                        <Text style={{ fontSize: 25 }}>{data.recovered}</Text>
                        <Text style={{ fontSize: 15, color: "red" }}>Country Percentage</Text>
                        <Text style={{ fontSize: 15 }}>{((data.recovered / population.population) * 100).toFixed(3)}%</Text>
                        <Text style={{ fontSize: 15, color: "red" }}>{new Date(data.lastUpdate).toDateString()}</Text>
                        

                    </View>

                </View>
                <View style={{ ...styles.component }}>
                    <View style={styles.componentHeader}>
                        <Text style={{ fontSize: 15, color: "red" }}>Deaths</Text>
                        <Text style={{ fontSize: 25 }}>{data.deaths}</Text>
                        <Text style={{ fontSize: 15, color: "red" }}>Country Percentage</Text>
                        <Text style={{ fontSize: 15 }}>{((data.deaths / population.population) * 100).toFixed(3)}%</Text>
                        <Text style={{ fontSize: 15, color: "red" }}>{new Date(data.lastUpdate).toDateString()}</Text>
                       
                    </View>
                </View>
                <View style={{ ...styles.component }}>
                    <View style={styles.componentHeader}>
                        <Text style={{ fontSize: 15, color: "red" }}>Critical</Text>
                        <Text style={{ fontSize: 25 }}>{data.critical}</Text>
                        <Text style={{ fontSize: 15, color: "red" }}>Country Percentage</Text>
                        <Text style={{ fontSize: 15 }}>{((data.critical / population.population) * 100).toFixed(3)}%</Text>
                        <Text style={{ fontSize: 15, color: "red" }}>{new Date(data.lastUpdate).toDateString()}</Text>
                     
                    </View>
                </View>
            </View>
               <FontAwesome5
                                name="viruses"
                                color="red"
                                size={150}
                               
                            />
                            <FontAwesome5
                                name="lungs-virus"
                                color="red"
                                size={100}
                               
                            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#DC5D74',
        paddingTop: 0,
        alignItems: "center",

    },
    component: {

        borderWidth:3,
             borderRadius:10,
            width:"25%",
            marginVertical:10,
            justifyContent:"space-between",
            alignItems:"center",
            paddingHorizontal:10,
            backgroundColor:'lightgrey',
            borderColor:"red",

    },

    componentHeader: {
        paddingTop: 10,

    },
 
});

