import { createSwitchNavigator, } from "react-navigation";
import { SplashScreen, } from "../screens";
import AuthNavigator from './Auth.navigation';
import MainNavigator from './Main.navigation';


const SplashSwitchNavigator = createSwitchNavigator({
    Auth: AuthNavigator,
    Main: MainNavigator,
    Splash: SplashScreen,
}, {
    initialRouteName: 'Auth',
    headerMode: 'none',
})

export default SplashSwitchNavigator