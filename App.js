// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import HomeScreen from './src/screens/HomeScreen';
//
//
// const navigator = createStackNavigator({
//   Home: HomeScreen
// }, {
//   initialRouteName: 'Home',
//   defaultNavigationOptions: {
//     title: 'SEARCH ENGINE',
//     style: {
//       backgroundColor: 'red'
//     }
//   }
// });
//
// export default createAppContainer(navigator);


import React from 'react';
import TopScreen from './src/screens/TopScreen';
import PrimaryScreen from './src/screens/PrimaryScreen';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const App = () => {
  return (
    <View style={styles.viewStyle1}>

    <View style={styles.viewStyle2}>
    <EvilIcons name="user" size={35} color="#fff"/>
    <Text style={styles.textStyle1}>Wells Fargo</Text>
    <EvilIcons name="navicon" size={35} color="#fff"/>
    </View>

    <ScrollView style={styles.scrollView}>
  <PrimaryScreen />
  <TopScreen />
    </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  viewStyle1: {
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: '#ddd'
  },
  viewStyle2: {
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between',
   paddingTop: 10,
   paddingBottom: 10,
   paddingLeft: 10,
   paddingRight: 10,
   marginBottom: 1,
   backgroundColor: 'red',
   borderBottomWidth: 3,
   borderColor: 'gold'
 },
 textStyle1: {
   fontSize: 30,
   fontWeight: 'bold',
   color: '#fff',
   textTransform: 'uppercase'
 },
 scrollView: {
   width: '100%'
 }
})

export default App;
