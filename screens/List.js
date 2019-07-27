import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ItemComponent from '../components/ItemComponent';

import { db } from './config';

let CafeRef = db.ref('/Cafe');

export default class List extends React.Component {
  state = {
    Cafe: []
  };

  componentDidMount() {
    CafeRef.on('value', snapshot => {
      let data = snapshot.val();
      let Cafe = Object.values(data);
      this.setState({ Cafe });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.Cafe.length > 0 ? (
          <ItemComponent Cafe={this.state.Cafe} />
        ) : (
          <Text>No Cafe</Text>
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