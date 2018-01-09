import React from 'react';
import {View, Text} from 'react-native';
const Main = () =><View><Text>123123123</Text></View>;

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import AppReducer from './src/reducer';
import AppWithNavigationState from './src/navigators/AppNavigator';

class ReduxExampleApp extends React.Component{
  store = createStore(AppReducer);
  render(){
    return(
      <Provider store={this.store}>
        <AppWithNavigationState/>
      </Provider>
    )
  }
}








export default ReduxExampleApp;
