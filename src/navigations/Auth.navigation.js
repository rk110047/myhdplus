import {createStackNavigator} from "react-navigation-stack";
import {
    LoginScreenComponent,
    SignupScreenComponent,
} from "../screens";
import otp from '../screens/Otp/otp';
import Mobile_verification from '../screens/Otp/Mobile_verification'
// import SignupScreenComponent from "../screens"
import HomeScreenLogin from '../screens/home/HomeScreenLogin'
import { enableScreens } from 'react-native-screens';

enableScreens();

const AuthNavigator = createStackNavigator(
    {
        HomeScreenLogin: HomeScreenLogin,
        Login: LoginScreenComponent,
        Signup: SignupScreenComponent,
        otp: otp,
        Mobile_verification: Mobile_verification
    },
    {
        initialRouteName: 'HomeScreenLogin',
        headerMode: 'none',
        cardOverlayEnabled: true,
    }
)

export default AuthNavigator;