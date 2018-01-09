import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import {StackNavigator,addNavigationHelpers,TabNavigator} from 'react-navigation';



const A = ({navigation}) =>(
  <View style={styles.container}>
    <Text style={styles.text}>AAAA</Text>
    <Button
      onPress={()=>navigation.navigate('B')}
      title={'nav to BBB'}
    />

  </View>
);
const B = ({navigation}) =>(
  <View style={styles.container}>
    <Text  style={styles.text}>BBB</Text>
    <Button
      title={'nav to AAA'}
      onPress={()=>navigation.navigate('A')}
    />
  </View>
);



const C = ({navigation}) =>(
  <View style={styles.container}>
    <Text  style={styles.text}>CCCC</Text>
    <Button
      onPress={()=>navigation.navigate('D')}
      title={'nav to DDD'}
    />

  </View>
);
const D = ({navigation}) =>(
  <View style={styles.container}>
    <Text  style={styles.text}>DDDD</Text>
    <Button
      title={'nav to CCC'}
      onPress={()=>navigation.navigate('C')}
    />
  </View>
);



const Router1 = StackNavigator({
  'A': {screen: A},
  'B': {screen: B},
});

const Router2 = StackNavigator({
  'C': {screen: C},
  'D': {screen: D},
});

const Main = TabNavigator({
  'TAB1':{screen:Router1},
  'TAB2':{screen:Router2},
});



export default Main;








const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:60
  }
});
