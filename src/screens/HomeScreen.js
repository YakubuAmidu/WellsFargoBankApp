import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default class HomeScreen extends Component {
  render () {
    return (
      <View style={styles.ViewStyle}>
      <AntDesign name="user" size={30} color="white"/>
       <Text style={styles.textStyle}>Hello world</Text>
        <EvilIcons name="navicon" size={30} color="white" />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
    backgroundColor: 'red',
    borderBottomWidth: 4,
    borderColor: 'gold'
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase'
  }
})
