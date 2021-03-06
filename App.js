import React,{useEffect} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';

import SplashSwitchNavigator from './src/navigations';
import {Provider} from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor='black'/>
      <AppContainer />
    </Provider>
  );
}

const AppContainer = createAppContainer(SplashSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
