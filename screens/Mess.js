import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Messmapper from '../components/Messmapper';

import { db } from './config';

let MessRef = db.ref('/Mess');

export default class Mess extends React.Component {
  state = {
    Mess: []
  };

  componentDidMount() {
    MessRef.on('value', snapshot => {
      let data = snapshot.val();
      let Mess = Object.values(data);
      this.setState({ Mess });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.Mess.length > 0 ? (
          <Messmapper Mess={this.state.Mess} />
        ) : (
          <Text>No Mess</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb'
  }
});