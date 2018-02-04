import React from 'react';
import {View, Animated} from 'react-native';

const arr = [];
for(let i = 0 ; i<500; i++){
  arr.push(i)
}


export default class Sequence extends React.Component{
  constructor(){
    super();
    this.animatedValue = [];
    arr.forEach(value=>this.animatedValue[value] = new Animated.Value(0))
  }

  componentDidMount(){
    this.animate()
  }

  animate = () => {
    const animations =arr.map(item=>Animated.timing(
      this.animatedValue[item],
      {
        toValue:1,
        duration:50
      }
    ));
    Animated.sequence(animations).start()
  };

  render(){
    const Animations = ()=> arr.map((a,i)=>
        <Animated.View
          key={i}
          style={{opacity:this.animatedValue[a], height:20, width:20,
            backgroundColor:'red', marginLeft:3, marginTop:3}}
        />
    );
    return(
      <View style={{flex:1, flexDirection:'row',flexWrap:'wrap'}}>
        <Animations/>
      </View>
    )
  }

}
