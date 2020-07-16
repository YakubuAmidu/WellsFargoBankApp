import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default class TopScreen extends Component {
  render () {
    return (
      <View style={styles.viewStyle1}>
       <View>
        <Text style={styles.textStyle1}>Create A Budget</Text>
         <Text style={styles.textStyle2}> > </Text>
         <Text style={styles.textStyle3}>Interested in managing your spending</Text>
         <Text style={styles.textStyle4}>habits? lets us help</Text>
         <View style={styles.viewStyle2}>
         <FontAwesome5 name="money-check-alt" size={24} color="lightblue" />
         <Text style={styles.textStyle5}>Manage a dept or fund a purchase</Text>
         </View>

         <View style={styles.viewStyle3}>
       <Text style={styles.textStyle6}>EVERYDAY CHECKING</Text>
       <Text style={styles.textStyle7}>...1351</Text>
         </View>

        <View style={styles.viewStyle4}>
        <Text style={styles.textStyle8}>.</Text>
        <Text style={styles.textStyle8}>.</Text>
        <Text style={styles.textStyle8}>.</Text>
         <Text style={styles.textStyle9}>$4,105.86</Text>
         <Text style={styles.textStyle10}>Available balance</Text>
        </View>
        </View>


        <View style={styles.viewStyle5}>
      <Text style={styles.textStyle11}>CREDIT CARD</Text>
      <Text style={styles.textStyle12}>...2456</Text>
        </View>

       <View style={styles.viewStyle5}>
       <Text style={styles.textStyle13}>.</Text>
       <Text style={styles.textStyle13}>.</Text>
       <Text style={styles.textStyle13}>.</Text>
        <Text style={styles.textStyle14}>$63.11</Text>
        <Text style={styles.textStyle15}>Available balance</Text>
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
  },
  textStyle3: {
    textAlign: 'center',
    color: '#333'
  },
  textStyle4: {
    textAlign: 'center',
    color: '#333'
  },
  viewStyle2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20
  },
  textStyle5: {
    color: '#333'
  },
  viewStyle3: {
    paddingBottom: 10,
    color: '#333'
  },
  textStyle6: {
    color: 'red'
  },
  textStyle7: {
    fontSize: 10,
    color: '#333'
  },
  viewStyle4: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 30,
    borderBottomWidth: 2,
    borderColor: '#fff'
  },
  textStyle8: {
    textAlign: 'right',
    color: '#333',
    fontWeight: 'bold',
   paddingBottom: 10
  },
  textStyle9: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
  textStyle10: {
    textAlign: 'right',
    fontSize: 8,
    color: '#333'
  },
  viewStyle5: {
  paddingTop: 20,
   paddingLeft: 10,
   paddingRight: 10
},
textStyle11: {
  color: '#333',
  color: 'red'
},
textStyle12: {
  fontSize: 10,
  color: '#333'
},
textStyle13: {
  textAlign: 'right',
  fontSize: 20
},
textStyle14: {
  textAlign: 'right',
  fontWeight: 'bold',

}
})
