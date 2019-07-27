import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'
import Home from './Home.js';
import Maps from './Maps.js';
import TabBarIcon from '../components/TabBarIcon';

class Main extends React.Component {

    static navigationOptions = {
        //title: 'Welcome',
       
        header: null,
        headerStyle: { height: 40, },
        headerTitle: (
          <Image style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 25, width: 55, resizeMode: 'center' }} source={require('../assets/images/HeaderTitle.png')} />
        
        ),
       
        //  tabBarIcon: ({ tintColor }) => {
        //  return <Icon name="ios-cart-outline" style={{ color: tintColor }}/>
        // }
        
    
      }

  
    render() {
        return (
            <View>
                <Text>
                    Main Screen    
                </Text>
            </View>
        )
    }
}
  
export default createBottomTabNavigator({
 
   

    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <TabBarIcon name="md-home" color={tintColor} size={24} />
            ),

            animationEnabled: true,
            swipeEnabled: true,
            tabBarPosition: 'bottom',
            tabBarOptions: {
                activeTintColor: 'orange',
                inactiveTintColor: 'black',
            },
            style: {
                borderTopwidth: 'white',
                shadowOffset: { width: 5, height: 5 },
                shadowColor: 'black',
                shadowOpacity: 0.5,
                elevation: 5,
            }
            
        }
    },
    Maps: {
        screen: Maps,
        navigationOptions: {
            tabBarLabel: 'Map',
            tabBarIcon: ({ tintColor }) => (
                <TabBarIcon name="md-map" color={tintColor} size={24} />
            ),
            
            animationEnabled: true,
            swipeEnabled: true,
            tabBarPosition: 'bottom',
            tabBarOptions: {
                activeTintColor: 'orange',
                inactiveTintColor: 'black',
            },
            style: {
                borderTopwidth: 'white',
                shadowOffset: { width: 5, height: 5 },
                shadowColor: 'black',
                shadowOpacity: 0.5,
                elevation: 5,
            }
    
        },


    }
  
});




