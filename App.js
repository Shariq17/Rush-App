import React, {Component} from 'react';
import { StyleSheet, Text, View, ListView, TouchableHighlight,Image } from "react-native";
import { createStackNavigator,createBottomTabNavigator, createAppContainer } from 'react-navigation';
import * as firebase from 'firebase';
require("firebase/firestore");
//import { registerRootComponent } from 'expo';

import Home from './screens/Home';
import List from './screens/List';
import AddItem from './screens/AddItem';
import Cafe from './screens/Cafe';
import ATM from './screens/ATM';
import Mess from './screens/Mess';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Main from './screens/Main';

const AppNavigator = createStackNavigator({
  Splash: {
    screen: Splash,
  },
  Login: {
    screen: Login,
  },
 
 
  Main: {
    screen: Main,
    navigationOptions: {

      headerLeft: null,
      headerStyle: { height: 40, },
      headerTitle: (
        <Image style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 25, width: 55, resizeMode: 'center' }} source={require('./assets/images/HeaderTitle.png')} />
      
      ),
  

    }
  },
 // Home: {
  //  screen: Home,
  //},
  
  AddItem: {
    screen: AddItem,
  },
 
  Cafe: {
    screen: Cafe,
  },
  ATM: {
    screen: ATM,
  },
  Mess: {
    screen: Mess,
  }


});

const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component<{}> {

  static navigationOptions = {
    //title: 'Welcome',
   
    header: null,
    headerStyle: { height: 40, },
    headerTitle: (
      <Image style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 25, width: 55, resizeMode: 'center' }} source={require('./assets/images/HeaderTitle.png')} />
    
    ),
   
    //  tabBarIcon: ({ tintColor }) => {
    //  return <Icon name="ios-cart-outline" style={{ color: tintColor }}/>
    // }
    

  }

  render() {
      return (
        
               
      <AppContainer/>
            
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    title: {
        fontWeight: "bold",
        fontSize: 30
    }
  })
