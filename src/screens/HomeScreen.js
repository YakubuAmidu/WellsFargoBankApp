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
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'Lato',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    borderBottomWidth: 4,
    borderColor: 'gold'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase'
  }
})
