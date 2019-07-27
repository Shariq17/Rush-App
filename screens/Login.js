import React, { Component } from 'react';

import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TextInput, Keyboard, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Button } from 'react-native';
import { Google } from 'expo';
import * as Expo from 'expo';
import firebase from 'firebase';
import { BlurView } from 'expo-blur';
import * as Animatable from 'react-native-animatable';

// important OclientAuth shit 977360166244-tv2l96fojfe1r5ullv5q2vqgvj3fni81.apps.googleusercontent.com

class Login extends React.Component {

  static navigationOptions = {
    header: null
  }

  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }

 onSignIn = googleUser => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!this.isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken,
          
        );
        // Sign in with credential from the Google user.
        firebase
          .auth()
          .signInWithCredential(credential)
          .then(function () {
            console.log('user signed in');
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      } else {
        console.log('User already signed-in Firebase.');
      }
    }.bind(this));
  }

  signInWithGoogleAsync = async () => {
    try {
      
        const result = await Expo.Google.logInAsync({
           behaviour: 'web',
          androidClientId: 
          '207871958755-quu8361l5gr3d9jee5esdg90fn6i0pmj.apps.googleusercontent.com',
         // iosClientId: YOUR_CLIENT_ID_HERE,
          scopes: ['profile', 'email'],
          
        });
    
        if (result.type === 'success') {
          this.onSignIn(result);
          
          return result.accessToken;
        } else {
          
          return { cancelled: true };
        }
    } catch (e) {
      
        return { error: true };
      }
    }

    

    render() {
      return (
           
        <ImageBackground style={styles.container} source={require('../assets/images/GikiBackground2.jpg')}>
           
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled >
            <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                    
              <View style={styles.container}>
                    
              <Animatable.View style={styles.logocontainer}  animation = "zoomIn" iterationCount={1}>
                 

                  <Image style={styles.logo} source={require('../assets/images/MainLogo2.png')}>

                  </Image>
                             
        
                  <Text style={styles.title}>WE GO THERE SO YOU DON'T HAVE TO ;)</Text>
                </Animatable.View>
                          
                <TouchableOpacity
                  onPress={() => alert('Button press')}
                  onPress={() => this.signInWithGoogleAsync()}>
                  
                  <Animatable.View 
                  animation="slideInUp" iterationCount={1}>
                    <Image source={require('../assets/images/LoginButton.png')} style={styles.buttonContainer}
                     >
                      </Image>
                  
                     </Animatable.View>           
                </TouchableOpacity>
                   
                            
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </ImageBackground>
      );

     
    }
}
export default Login;
const styles = StyleSheet.create({
    backgroundcontainer: {
        flex: 1,
    },
    container: {
      flex: 1,
   //  backgroundColor: 'rgb(32,53,70)',
    flexDirection: 'column',
    },
    logocontainer: {
        flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
       marginTop: 50,
        paddingBottom: 300,
    },
  logo: {
    marginTop: 250,
    //textAlign: 'center',
        width: 150,
        height: 150,

    },
    title: {
        color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
        textAlign: 'center',
       // padding: null,
        marginTop: 20,
        opacity: 0.9,
    },
    infocontainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 290,
        padding: 10,
       

    },
    input: {
        height: 40,
        
        backgroundColor: 'rgba(255,255,255,0.2)',
        alignItems: 'center',
        color: 'black',
        marginBottom: 10,
       paddingHorizontal: 10,
    },
    buttonContainer: {
        //backgroundColor: '#f7c744',
      
        paddingVertical: 15,
        marginBottom: 80,
        width: 100,
        height: 70,
      paddingHorizontal: 80,
     marginLeft: 130,
   
        
    },
    buttontext: {
        textAlign: 'center',
        color: 'rgb(32,53,70)',
        fontWeight: 'bold',
      fontSize: 18
    },
    buttontext2: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
      fontSize: 18
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    LoginButtonContainer: {
        backgroundColor: '#24a0ed',
        paddingVertical: 6,
        height: 40,
        marginBottom: 60,
        paddingHorizontal: 90,
        marginLeft: 40,
        marginRight: 40,
        padding: 50
        
    },
  
    secondarytext: {
        textAlign: 'right',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        paddingHorizontal: 20 ,
       marginBottom: 10,
    },
    notBlurred: {
        ...StyleSheet.absoluteFill,
       
    }
    
  })