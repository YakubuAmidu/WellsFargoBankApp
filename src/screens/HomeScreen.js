import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default class HomeScreen extends Component {
  render () {
    return (
      <View>
      <View style={styles.ViewStyle}>
      <EvilIcons name="user" size={35} color="white"/>
       <Text style={styles.textStyle}>WELLS FARGO</Text>
        <EvilIcons name="navicon" size={35} color="white" />
      </View>

     <View style={styles.viewStyle1}>
      <Text style={styles.textStyle1}>Account Summary</Text>
     </View>

      </View>
    );
  };
}

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 2,
    paddingBottom: 2,
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
  },
  viewStyle1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ddd',
    paddingTop: 12,
    paddingBottom: 12,
  },
  textStyle1: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: '#333'
  }
})
