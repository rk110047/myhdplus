import React, {Component} from 'react';
import {
    Button,
    Image,
    View,
    AsyncStorage,
} from 'react-native';
import {styles} from "./SplashScreen.style";
import iptv_logo from  '../../../assets/imgs/gibstat.png';

class SplashScreenComponent extends Component {
    static navigationOptions = {
        // title: 'Splash screen',
    };

    constructor(props) {
        super(props)
        this.loadApp()
    }

    loadApp = async() => {
            const userToken = await AsyncStorage.getItem('api_token');
            console.log("userToken",userToken)
            this.props.navigation.navigate(userToken ? "Main" : "Auth");
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={iptv_logo} style={styles.photo}/>
                <View style={styles.rest}>
                </View>
            </View>
        );
    }
}

export {
    SplashScreenComponent as SplashScreen
}