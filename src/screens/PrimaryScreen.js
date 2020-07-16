import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class PrimaryScreen extends Component {
  render () {
    return (
      <View>
      <View style={styles.viewStyle1}>
     <Text style={styles.textStyle1}>Account Summary</Text>
      </View>

    <View style={styles.viewStyle2}>
     <View style={styles.viewStyle3}>
     <Text style={styles.textStyle2}>November 2019</Text>
     <Text style={styles.textStyle2}>$300</Text>
     </View>

     <View style={styles.viewStyle4}>
     <Text>Note: Shopping budget for November</Text>
     <Text style={styles.textStyle3}>EDIT</Text>
     </View>

     <View style={styles.viewStyle5}>
     <Text style={styles.textStyle4}>View Budget</Text>
     <Text style={styles.textStyle5}>></Text>
     </View>
     </View>

     </View>
    );
  };
}

const styles = StyleSheet.create({
  viewStyle1: {
  alignItems: 'center',
  paddingTop: 10,
  paddingBottom: 10,
  marginBottom: 2,
  backgroundColor: '#ddd'
},
  textStyle1: {
    fontSize: 20,
  },
  viewStyle2: {
    backgroundColor: '#ddd',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10
  },
  viewStyle3: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 17
  },
  textStyle2: {
    fontWeight: 'bold'
  },
  viewStyle4: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#ddd',
    paddingBottom: 17
  },
  textStyle3: {
    color: 'green'
  },
  viewStyle5: {
    flex: 1,
    flexDirection: 'row'
  },
  textStyle4: {
    marginRight: 300
  }
})
