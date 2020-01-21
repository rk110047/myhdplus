import React from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { SplashScreen, } from "../screens";
import AuthNavigator from './Auth.navigation';
import MainNavigator from './Main.navigation';


const SplashSwitchNavigator = createSwitchNavigator(
    {
        Auth: AuthNavigator,
        Main: MainNavigator,
        Splash: SplashScreen,
    },
    {
        initialRouteName: 'Splash',
        headerMode: 'none',
    }
)

export default SplashSwitchNavigator