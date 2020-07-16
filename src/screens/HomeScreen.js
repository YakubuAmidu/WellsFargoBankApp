import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default class HomeScreen extends Component {
  render () {
    return (
      <View>
      <View style={styles.viewStyle1}>
      <EvilIcons name="user" size={35} color="#fff"/>
      <Text style={styles.textStyle1}>Wells Fargo</Text>
      <EvilIcons name="navicon" size={35} color="#fff"/>
      </View>

      <View>
     <Text>Account Summary</Text>
      </View>

      </View>
    );
  };
}

const styles = StyleSheet.create({
  viewStyle1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 4,
    borderColor: 'gold',
    backgroundColor: 'red',
    paddingLeft: 10,
    paddingRight: 10
  },
  textStyle1: {
 fontSize: 30,
 fontWeight: 'bold',
 textTransform: 'uppercase',
 color: '#fff'
  }
})
