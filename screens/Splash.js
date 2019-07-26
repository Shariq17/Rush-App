import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground,ActivityIndicator,Image, } from "react-native";
import firebase from 'firebase';

class Splash extends Component {
 
  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    setTimeout(() => {
      this.checkIfLoggedIn();
    }, 2500)
}

    checkIfLoggedIn = () =>{
        firebase.auth().onAuthStateChanged(function(user){
            if(user)
            {
                this.props.navigation.navigate
                ('Main');
            }
            else{
                this.props.navigation.navigate
                ('Main');
            }
        }.bind(this));
    };

  render() {
      return (
        <ImageBackground style={styles.container} source={require('../assets/images/SplashBackground.jpg')}>
      <View style={styles.container}>
            <Image source={require('../assets/images/SplashLogo.png')}
              style={styles.logo}>
              
          </Image>
              </View>
              </ImageBackground>    
    );
  }
}

export default Splash;

const styles = StyleSheet.create({
    container: {
      flex: 1,
   //  backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    title: {
        fontWeight: "bold",
        fontSize: 30
  },
  logo: {
   // marginTop: 400,
    
        width: 200,
        height: 200,

    },
  })