import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { db } from './config';

import * as Permissions from 'expo-permissions'
import MapView from 'react-native-maps'

export default class List extends Component {
    state = {
        latitude: null,
        longitude: null,
       // locations: locations
      }
    
    async componentDidMount() {
        const { status } = await Permissions.getAsync(Permissions.LOCATION)
    
        if (status !== 'granted') {
            const response = await Permissions.askAsync(Permissions.LOCATION)
        }
         navigator.geolocation.getCurrentPosition(
          ({ coords: { latitude, longitude } }) => this.setState({ latitude, longitude }, this.mergeCoords),
          (error) => console.log('Error:', error)
        )
    }

    render() {
      const {latitude, longitude} =this.state

        if (latitude) {
            return (
                <MapView
                    showUserLocation
                    style={{ flex: 1 }}
                    initialRefion={{
                        latitude,
                        longitude,
                        latitudeDelta: 34.070184 ,
                        longitudeDelta: 72.643831 ,
                    }}
                >
        
                </MapView>
            );

        }
   
        return (
            <View style={styles.container}>
                <Text>Permission</Text>
            </View>
        )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb'
  }
});