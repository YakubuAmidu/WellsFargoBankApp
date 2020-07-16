import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class PrimaryScreen extends Component {
  render () {
    return (
      <View>
      <View>
     <Text>Account Summary</Text>
      </View>

      <View>
     <Text>November 2019 $300</Text>

     <View>
     <Text>Note: Shopping budget for November</Text>
     <Text>EDIT</Text>
     </View>

     <View>
     <Text>View Budget</Text>
     <Text>></Text>
     </View>
      </View>

      </View>
    );
  };
}

const styles = StyleSheet.create({
  
})
