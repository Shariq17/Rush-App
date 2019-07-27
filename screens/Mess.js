import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, Dimensions } from 'react-native';
import Messmapper from '../components/Messmapper';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit';

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
      <View>
      <View style={styles.container}>
        {this.state.Mess.length > 0 ? (
          <Messmapper Mess={this.state.Mess} />
        ) : (
          <Text>No Mess</Text>
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