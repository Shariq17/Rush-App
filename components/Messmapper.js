import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class Messmapper extends React.Component {
  static propTypes = {
    Mess: PropTypes.array.isRequired
  };

  render() {
    return (
      <View>
        {this.props.Mess.map((Messitem, index) => {
          return (
            <View key={index}>
              <Text>{Messitem.name}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MessList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  Messitemtext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});