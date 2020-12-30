import React, { useEffect, useState } from 'react';
import {ActivityIndicator, Button, StyleSheet,ScrollView, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { getTotalCases,getTotalPopulation } from '../components/api.js'
import Constants from 'expo-constants'
export default function WorldScreen() {
    const [data, setData] = useState({});
    const [population, setPopulation] = useState({});
    useEffect(() => {
        const getData = async () => {
            const res = await getTotalCases()
            setData(res)
            // console.log(res)
            const resPop = await getTotalPopulation()
            setPopulation(resPop)
            // console.log(resPop)
        }
        getData()
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
            <Text style={{fontSize:30,fontWeight:"bold"}}>World Stats</Text>
            <Text style={{fontSize:30,fontWeight:"bold",paddingBottom:10}}>COVID-19</Text>
            <FontAwesome5
                                name="virus"
                                color="red"
                                size={50}
                               
                            />
            <View style={{width:"100%",height:450,flexDirection:"row",justifyContent:"space-around",flexWrap:"wrap",alignItems:"center"}}>
            <View style={{...styles.component}}>
                <View style={styles.componentHeader}>
                    <Text style={{fontSize:15,color:"#E70D34"}}>Confirmed</Text>
                    <Text style={{fontSize:25}}>{data.confirmed}</Text>
                    <Text style={{fontSize:15,color:"#E70D34"}}>World Percentage</Text>
                    <Text style={{fontSize:15}}>{((data.confirmed/population.world_population)*100).toFixed(3)}%</Text>
                    <Text style={{fontSize:15,color:"#E70D34"}}>{new Date(data.lastUpdate).toDateString()}</Text>
               
                    
                </View>
                
            </View>
            <View style={{...styles.component}}>
                <View style={styles.componentHeader}>
                    <Text style={{fontSize:15,color:"#E70D34"}}>Recovered</Text>
                    <Text style={{fontSize:25}}>{data.recovered}</Text>
                    <Text style={{fontSize:15,color:"#E70D34"}}>World Percentage</Text>
                    <Text style={{fontSize:15}}>{((data.recovered/population.world_population)*100).toFixed(3)}%</Text>
                    <Text style={{fontSize:15,color:"#E70D34"}}>{new Date(data.lastUpdate).toDateString()}</Text>
                  
                    
                </View>
                
            </View>
            <View style={{...styles.component}}>
                <View style={styles.componentHeader}>
                    <Text style={{fontSize:15,color:"#E70D34"}}>Deaths</Text>
                    <Text style={{fontSize:25}}>{data.deaths}</Text>
                    <Text style={{fontSize:15,color:"#E70D34"}}>World Percentage</Text>
                    <Text style={{fontSize:15}}>{((data.deaths/population.world_population)*100).toFixed(3)}%</Text>
                    <Text style={{fontSize:15,color:"#E70D34"}}>{new Date(data.lastUpdate).toDateString()}</Text>
                 
                    
                </View>
                
            </View>
            <View style={{...styles.component}}>
                <View style={styles.componentHeader}>
                    <Text style={{fontSize:15,color:"#E70D34"}}>Critical</Text>
                    <Text style={{fontSize:25}}>{data.critical}</Text>
                    <Text style={{fontSize:15,color:"#E70D34"}}>World Percentage</Text>
                    <Text style={{fontSize:15}}>{((data.critical/population.world_population)*100).toFixed(3)}%</Text>
                    <Text style={{fontSize:15,color:"#E70D34"}}>{new Date(data.lastUpdate).toDateString()}</Text>
                   
                    
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
        </View>
        
       
    )
    }
const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            paddingTop: Constants.statusBarHeight,
            backgroundColor: '#DC5D74',
            paddingTop: 5,
            alignItems:"center",

        },
         
        component: {
             borderWidth:3,
             borderRadius:10,
            width:"25%",
            marginVertical:10,
            justifyContent:"space-between",
            alignItems:"center",
            paddingHorizontal:10,
            backgroundColor: 'lightgrey',
            borderColor:"red",
           

        },
       
        componentHeader:{
            paddingTop:10,
            
        },
       
    });