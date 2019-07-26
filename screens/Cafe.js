import React, { Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import ItemComponent from '../components/ItemComponent';

import * as theme from '../theme';

import { Block } from '../components';

import Textstuff from '../components/Textstuff'

import { db } from './config';

let CafeRef = db.ref('/Cafe');

 class Cafe extends React.Component {
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
      <Block >
        {this.state.Cafe.length > 0 ? (
          <ItemComponent Cafe={this.state.Cafe} />
        ) : (
          <Textstuff >No Data</Textstuff>
        )}
      </Block>
    );
  }
}

export default Cafe;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb'
  }
});