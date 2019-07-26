import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Block } from '../components';
//import Txter from '../components/Txter';
import Textstuff from '../components/Textstuff'


export default class ItemComponent extends React.Component {
  static propTypes = {
    Cafe: PropTypes.array.isRequired
  };

  render() {
    return (
      <Block h1>
        {this.props.Cafe.map((item, index) => {
          return (
            <Block key={index}>
              <Textstuff >{item.name}</Textstuff>
            </Block>
          );
        })}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  CafeList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  itemtext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});