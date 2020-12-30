import React, { useState, } from 'react';
import { Button,Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {  Ionicons, FontAwesome5 } from "@expo/vector-icons";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {StatsByCountry} from './components/statbycont';
import WorldScreen from './components/worldscreen.js';
import FavoriteCountries from './components/favcont.js';
import CountriesList from './components/CountriesList.js';
import CountriesDetails from './components/Countrydetails.js';
import CountryStat from './components/contstat';
import { Card } from 'react-native-paper';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const CountryAPi = React.createContext(["China"])


const WorldNavigator = () => {
 
  
  return (
    
    <Stack.Navigator mode='modal'
      initialRouteName={"WorldStats"}
      
    >
      <Stack.Screen
      
        name="WorldStats"
        component={WorldScreen}
         options={({ navigation }) => ({
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: '#DF6060'
                    },
                    headerLeft: () =>
                        <View style={{ paddingLeft: 10 }}>
                            <Ionicons
                                name="md-menu"
                                color="white"
                                size={32}
                                onPress={() => navigation.toggleDrawer()}
                            />
                        </View>,
                         headerRight: () =>
                        <View >
                            <FontAwesome5
                                name="virus"
                                color="white"
                                size={32}
                                onPress={() => navigation.toggleDrawer()}
                            />
                        </View>
                })
                }
        
      />
    
      
    </Stack.Navigator>
    
  )
}
const StackNavigator = ({navigation}) => {
 
  
  return (
    
    <Stack.Navigator mode='modal'
      initialRouteName={"CountriesList"}
      
    >
      <Stack.Screen
      
        name="CountriesList"
        component={CountriesList}
       options={({ navigation }) => ({
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: '#DF6060'
                    },
                    headerLeft: () =>
                        <View style={{ paddingLeft: 10 }}>
                            <Ionicons
                                name="md-menu"
                                color="white"
                                size={32}
                                onPress={() => navigation.toggleDrawer()}
                            />
                        </View>,
                         headerRight: () =>
                        <View >
                            <FontAwesome5
                                name="virus"
                                color="white"
                                size={32}
                                onPress={() => navigation.toggleDrawer()}
                            />
                        </View>
                })
                }
        
      />
      <Stack.Screen
        name="CountryDetails"
        component={CountriesDetails}
        
      />
      
    </Stack.Navigator>
    
  )
}
const FavoriteNavigator = ({navigation}) => {
 
  
  return (
    
    <Stack.Navigator mode='modal'
      initialRouteName={"FavoriteCountries"}
      
    >
      <Stack.Screen
      
        name="FavoriteCountries"
        component={FavoriteCountries}
        options={({ navigation }) => ({
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: '#DF6060'
                    },
                    headerLeft: () =>
                        <View style={{ paddingLeft: 10 }}>
                            <Ionicons
                                name="md-menu"
                                color="white"
                                size={32}
                                onPress={() => navigation.toggleDrawer()}
                            />
                        </View>,
                         headerRight: () =>
                        <View >
                            <FontAwesome5
                                name="virus"
                                color="white"
                                size={32}
                                onPress={() => navigation.toggleDrawer()}
                            />
                        </View>
                })
                }
        
      />
      <Stack.Screen
        name="CountryDetails"
        component={CountriesDetails}
    
        
      />
      
    </Stack.Navigator>
    
  )
}

 export default function App({navigation,route}) {
   const [savedCountries, setSavedCountries] = useState(["China", "Pakistan"])

  return (
    
<CountryAPi.Provider value={{
      savedCountries: savedCountries,
      setSavedCountries: setSavedCountries
    }}>
    
  <NavigationContainer>
      <Drawer.Navigator initialRouteName="world Stats">
        <Drawer.Screen name="Stats by Country" component={StackNavigator} />
        <Drawer.Screen name="world Stats" component={WorldNavigator} />
        <Drawer.Screen name="Favourite Countries" component={FavoriteNavigator} />


      
     
      </Drawer.Navigator>
      
    </NavigationContainer>
    </CountryAPi.Provider>
  );
}

