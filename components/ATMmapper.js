import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class ATMmapper extends React.Component {
  static propTypes = {
    ATM: PropTypes.array.isRequired
  };

  render() {
    return (
      <View >
        {this.props.ATM.map((ATMitem, index) => {
          return (
            <View key={index}>
              <Text>{ATMitem.name}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ATMList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  ATMitemtext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});