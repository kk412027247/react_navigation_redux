import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Button, StyleSheet, Text, View } from 'react-native';
import {NavigationActions} from 'react-navigation';

const styles = StyleSheet.create({
  welcome:{
    fontSize:20,
    textAlign:'center',
    margin:10
  }
});

const LoginStatusMessage = ({isLoggedIn, dispatch})=>{
  if(!isLoggedIn){
    return <Text>Please log in</Text>
  }else{
    return (
      <View style={styles.welcome}>
        <Text>{'You are "Logged in" right now'}</Text>
        <Button
          onPress={()=>dispatch(NavigationActions.navigate({routeName:'Profile'}))}
          title={'Profile'}
        />
      </View>
    )
  }
};

LoginStatusMessage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state =>({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(LoginStatusMessage);
