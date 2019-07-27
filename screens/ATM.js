import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,Dimensions } from 'react-native';
import { Block } from '../components';
import ATMmapper from '../components/ATMmapper';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit';
import Textstuff from '../components/Textstuff'

import { db } from './config';

let ATMRef = db.ref('/ATM');
const { height, width } = Dimensions.get('window')

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
      <Block>
        <View>
        <View>
          <Image style={{ width: width, height: 200, resizeMode: 'cover' }} source={require('../assets/images/cafe.jpg')}>

          </Image>
        {this.state.ATM.length > 0 ? (
          <ATMmapper ATM={this.state.ATM} />
        ) : (
          <Textstuff >No Data</Textstuff>
            )}
</View>
<View>
  <Text>
    Bezier Line Chart
  </Text>
  <LineChart
    data={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ]
      }]
    }}
    width={Dimensions.get('window').width} // from react-native
    height={220}
    yAxisLabel={'$'}
    chartConfig={{
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#fb8c00',
      backgroundGradientTo: '#ffa726',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>

          </View>
      </Block>
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