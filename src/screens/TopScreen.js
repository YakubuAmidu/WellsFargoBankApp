import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TopScreen extends Component {
  render () {
    return (
      <View style={styles.viewStyle1}>
       <View>
        <Text style={styles.textStyle1}>Create A Budget</Text>
         <Text style={styles.textStyle2}> > </Text>
         <Text style={styles.textStyle3}>Interested in managing your spending</Text>
         <Text style={styles.textStyle4}>habits? lets us help</Text>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  viewStyle1: {
    backgroundColor: '#F0F0F0',
    marginTop: 2,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 25
  },
  textStyle1: {
    textAlign: 'center',
    fontSize: 20,
    color: '#333',
  },
  textStyle2: {
    textAlign: 'right',
    fontSize: 20,
    color: '#333'
  }
})
