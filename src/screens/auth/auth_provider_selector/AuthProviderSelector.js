import React, {Component} from 'react';
import {Text, View, Button, Image} from 'react-native';
import {styles} from "./AuthProviderSelector.style";
import iptv_logo from '../../../../assets/imgs/iptv_logo.png';

class AuthProviderSelectorComponent extends Component {
    onPress = () => {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={iptv_logo} style={styles.photo}/>
                <View style={styles.rest}>
                </View>
                <Button onPress={this.onPress} title={'Go to home'}/>
                <Button onPress={this.onPress} title={'Go to Auth'}/>
            </View>
        );
    }
}

export {
    AuthProviderSelectorComponent as AuthProviderSelector
}


