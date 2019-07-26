import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ATMmapper from '../components/ATMmapper';

import { db } from './config';

let ATMRef = db.ref('/ATM');

export default class ATM extends React.Component {
  state = {
    ATM: []
  };

  componentDidMount() {
    ATMRef.on('value', snapshot => {
      let data = snapshot.val();
      let ATM = Object.values(data);
      this.setState({ ATM });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.ATM.length > 0 ? (
          <ATMmapper ATM={this.state.ATM} />
        ) : (
          <Text>No ATM</Text>
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