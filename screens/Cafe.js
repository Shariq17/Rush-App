import React, { Component } from 'react';
import { View, StyleSheet,Text,Image, Dimensions } from 'react-native';
import ItemComponent from '../components/ItemComponent';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit';
import * as theme from '../theme';

import { Block } from '../components';

import Textstuff from '../components/Textstuff'

import { db } from './config';

let CafeRef = db.ref('/Cafe');


const { height, width } = Dimensions.get('window')

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
      <Block>
        <View>
          <Image style={{ width: width, height: 200, resizeMode: 'cover' }} source={require('../assets/images/cafe.jpg')}>

          </Image>
        {this.state.Cafe.length > 0 ? (
          <ItemComponent Cafe={this.state.Cafe} />
        ) : (
          <Textstuff >No Data</Textstuff>
            )}



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

export default Cafe;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb'
  }
});