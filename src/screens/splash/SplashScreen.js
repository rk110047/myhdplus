import React, {Component} from 'react';
import {
    Button,
    Image,
    View,
    AsyncStorage,
} from 'react-native';
import {styles} from "./SplashScreen.style";
import iptv_logo from  '../../../assets/imgs/iptv_logo.png';

class SplashScreenComponent extends Component {
    static navigationOptions = {
        // title: 'Splash screen',
    };

    constructor(props) {
        super(props)
        this.loadApp()
    }

    loadApp = async() => {
            console.log("inner")
            const userToken = await AsyncStorage.getItem('token');
            this.props.navigation.navigate(false ? "Main" : "Auth");
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