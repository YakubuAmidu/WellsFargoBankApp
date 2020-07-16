import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TopScreen extends Component {
  render () {
    return (
      <View style={styles.viewStyle1}>
       <View>
        <Text style={styles.textStyle1}>Create A Budget</Text>
         <Text style={styles.textStyle2}> > </Text>
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
    paddingLeft: 10,
    paddingTop: 25
  },
  textStyle1: {
    textAlign: 'center',
    fontSize: 20,
    color: '#333',
  }
})
