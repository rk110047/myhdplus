import {createStackNavigator} from "react-navigation-stack";
import {
    LoginScreenComponent,
    SignupScreenComponent,
} from "../screens";
// import SignupScreenComponent from "../screens"

const AuthNavigator = createStackNavigator(
    {
        Login: LoginScreenComponent,
        Signup: SignupScreenComponent,
      
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
        cardOverlayEnabled: true,
    }
)

export default AuthNavigator;