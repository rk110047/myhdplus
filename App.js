import React from 'react';
import {StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';

import SplashSwitchNavigator from './src/navigations';
import {Provider} from 'react-redux';
import store from './src/redux/store';

export default function App() {

  return (
    <Provider store={store}>
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
