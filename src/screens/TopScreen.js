import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TopScreen extends Component {
  render () {
    return (
      <View style={styles.viewStyle1}>
       <View>
        <Text>View Spending Report</Text>
         <Text> > </Text>
         <Text>Interested in managing your spending</Text>
         <Text>habits? lets us help</Text>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  viewStyle1: {
    backgroundColor: '#F0F0F0',
    marginTop: 2,
    paddingLeft: 10
  }
})
