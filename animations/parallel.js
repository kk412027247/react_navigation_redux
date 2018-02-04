import React from 'react';
import {View, Text ,Easing, Animated, TouchableHighlight, StyleSheet} from 'react-native';

export default class Parallel extends React.Component{

  constructor(){
    super();
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.animatedValue3 = new Animated.Value(0);
  }

  componentDidMount(){
    this.animate()
  }

  animate(){
    this.animatedValue1.setValue(0);
    this.animatedValue2.setValue(0);
    this.animatedValue3.setValue(0);
    const createAnimation  = function(value, duration, easing, delay=0){
      return Animated.timing(
        value,
        {
          toValue:1,
          duration,
          easing,
          delay
        }
      );
    };
    Animated.parallel([
      createAnimation(this.animatedValue1, 2000, Easing.ease),
      createAnimation(this.animatedValue2, 1000, Easing.ease, 1000),
      createAnimation(this.animatedValue3, 1000, Easing.ease, 2000)
    ]).start();
  }
  
  render(){
    const scaleText = this.animatedValue1.interpolate({
      inputRange:[0,1],
      outputRange:[0.5, 2]
    });
    const spinText = this.animatedValue2.interpolate({
      inputRange:[0,1],
      outputRange:['0deg','720deg']
    });
    const introButton = this.animatedValue3.interpolate({
      inputRange:[0,1],
      outputRange:[-100, 500]
    });

    return(
      <View style={styles.container}>
        <Animated.View
          style={{transform:[{scale: scaleText}]}}
        >
          <Text>Welcome</Text>
        </Animated.View>
        <Animated.View
          style={{marginTop:20, transform:[{rotate: spinText}]}}
        >
         <Text style={{fontSize:20}}>
           to the app!
         </Text>
        </Animated.View>
        <Animated.View
          style={{top: introButton, position:'absolute'}}
        >
          <TouchableHighlight
            onPress={this.animate.bind(this)}
            style={styles.button}
          >
            <Text
              style={{color:'white', fontSize:20}}
            >
              Click here to start
            </Text>
          </TouchableHighlight>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width: 200,
    height: 70,
    alignSelf:'center',
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center'
  }
});
