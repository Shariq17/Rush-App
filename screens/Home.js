import React, { Component } from 'react';
import { Button, View, Text, ScrollView, Image, Dimensions, FlatList,ActivityIndicator, headerStyle, headerTitle,tabBarIcon } from 'react-native';
//import { Container, Icon } from 'native-base';
//import { Ionicons } from '@expo/vector-icons';

import { TouchableOpacity } from 'react-native-gesture-handler';

import ItemComponent from '../components/ItemComponent';
import Messmapper from '../components/Messmapper';
import ATMmapper from '../components/ATMmapper';
//import tabNavigator from '../navigation/MainTabNavigator';
import TabBarIcon from '../components/TabBarIcon';
import { Block } from '../components';


import { db } from './config';
import { colors } from '../theme';



let CafeRef = db.ref('/Cafe');
let MessRef = db.ref('/Mess');
let ATMRef = db.ref('/ATM');



const { height, width } = Dimensions.get('window')



export default class Home extends Component {
  state = {
    Cafe: [],
    Mess: [],
    ATM: []
  };

  componentDidMount() {
    CafeRef.on('value', snapshot => {
      let data = snapshot.val();
      let Cafe = Object.values(data);
      this.setState({ Cafe });
    });
    MessRef.on('value', snapshot => {
      let data = snapshot.val();
      let Mess = Object.values(data);
      this.setState({ Mess });
    });
    ATMRef.on('value', snapshot => {
      let data = snapshot.val();
      let ATM = Object.values(data);
      this.setState({ ATM });
    });
  }; 

  
  static navigationOptions = {
    //title: 'Welcome',
   
    headerleft: null,
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
      
      <ScrollView
      Vertical={true}
        showsVerticalScrollIndicator={false}
        style= {{backgroundColor: '#ff7e65'}}
    >
    
      
          <View >
            <View style={{paddingHorizontal:0 , }}>
            
              <View style={{backgroundColor: 'white',marginBottom:10 ,shadowOpacity: 0.5 ,shadowOffset:{  width: 10,  height: 10,  },shadowColor:'black'}}>
              <View styles={{ width: width , height: 100,}}>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Cafe')}>
                <Image 
                  style={{flex: 1, width: width,height: 100, resizeMode:'cover', marginTop: 0 , borderWidth: 0, borderColor: '#dddddd',  }}
                  source={require('../assets/images/cafe.jpg')} 
                />
                  <View style={{ flexDirection: 'row',justifyContent: 'space-between', }}>
                  <Text style={{fontWeight: '700',flexDirection: 'row',fontSize:24,justifyContent: 'flex-start',padding: 10}}>
                Cafe
              </Text>
                    <View style={{
                      flexDirection: 'row',
                      
                      backgroundColor: 'orange'
                    }}>
                      </View>
              <Block style={{marginTop:15,flexDirection: 'row',justifyContent: 'flex-end',marginRight: 20}}>
                 {this.state.Cafe.length > 0 ? (
                  <ItemComponent Cafe={this.state.Cafe} />
                  ) : (
                  <ActivityIndicator />
                  )}
                  </Block>
              
                </View>
               
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={{backgroundColor: 'white' , shadowRadius: 6, shadowOffset:{  width: 10,  height: 10,  },shadowColor:'black',marginBottom: 10}}>
            <View styles={{ width: width+ 10, height: 100, }}>
               
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Mess')}>
                <Image 
                  style={{flex: 1, width: width+ 20,height: 100,marginTop: 0, resizeMode:'cover',borderRadius: 0, borderWidth: 0, borderColor: '#dddddd'}}
                  source={require('../assets/images/Mess.jpg')}
                  
                  />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                   <Text style={{fontWeight: '700',flexDirection: 'row',fontSize:24, justifyContent: 'flex-start', padding: 10}}>
                    Central Mess
                    </Text>

                    <View style={{
                      flexDirection: 'row',
                      
                      backgroundColor: 'orange'
                    }}>
                      </View>
                    <Block style={{marginTop:15,flexDirection: 'row',justifyContent: 'flex-end',marginRight: 20}}>
                    {this.state.Mess.length > 0 ? (
                      <Messmapper  Mess={this.state.Mess}  />
                      ) : (
                    <ActivityIndicator/>
                        )}
                      </Block >
                      
                    </View>
                </TouchableOpacity>
                  </View >
            </View>

             
            <View style={{backgroundColor: 'white',shadowOpacity: 0.5 ,shadowOffset:{  width: 10,  height: 10,  },shadowColor:'grey',marginBottom: 10}}>
            <View styles={{ width: width+ 10, height: 100, }}>
               
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ATM')}>
                <Image 
                  style={{flex: 1, width: width+ 20,height: 100,marginTop: 0, resizeMode:'cover',borderRadius: 0, borderWidth: 0, borderColor: '#dddddd'}}
                  source={require('../assets/images/GikiBackground.jpg')}
                  
                  />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                   <Text style={{fontWeight: '700',flexDirection: 'row',fontSize:24, justifyContent: 'flex-start', padding: 10}}>
                    HBL ATM
                    </Text>

                    <View style={{
                      flexDirection: 'row',
                      
                      backgroundColor: 'orange'
                    }}>
                      </View>
                    <Block style={{marginTop:15,flexDirection: 'row',justifyContent: 'flex-end',marginRight: 20}}>
                    {this.state.ATM.length > 0 ? (
                      <ATMmapper ATM={this.state.ATM} />
                      ) : (
                          <ActivityIndicator style={{}}/>
                      )}
                      </Block >
                      
                    </View>
                </TouchableOpacity>
                  </View >
            </View>

          </View>
        </View>
    
      </ScrollView>
    
    );
  }
}

