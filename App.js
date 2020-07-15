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
import HomeScreen from './src/screens/HomeScreen';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView>
    <HomeScreen />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewStyle: {
    
  }
})

export default App;
