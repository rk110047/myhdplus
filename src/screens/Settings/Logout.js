import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import BaseScreen from '../base/BaseScreen';
import { styles } from './Settings.style';
import key from '../../../assets/imgs/key.png';
import status from '../../../assets/imgs/status.png';
import update from '../../../assets/imgs/update.png';
import { Dialog } from 'react-native-simple-dialogs';
import { TextInput } from 'react-native-gesture-handler';
import ChangePassword from '../ChangePassword/ChangePassword';
import AsyncStorage from '@react-native-community/async-storage';

class Logout extends Component {


    async componentDidMount() {
        const token = await AsyncStorage.getItem('api_token')
        this.setState({
            token
        })
    }









    logoutuser = () => {
        console.log(this.state.token)
        fetch('http://196.29.238.110/api/v1/auth/logout/', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + this.state.token,
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json())
            .then((res) => {
                console.log(res)
                AsyncStorage.clear();
                this.props.navigation.navigate('HomeScreenLogin');
            })
    }

    render() {

        return (
            <BaseScreen centerText="Login">
                <View style={[styles.container, { height: "100%" }]}>
                    <Text style={styles.text}>Are you sure you want to logout?</Text>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-around", marginTop: 30 }}>
                        <TouchableOpacity
                            style={styles.textInputBtn}
                            onPress={() => {
                                AsyncStorage.clear();
                                this.props.navigation.navigate('Login');
                                this.logoutuser()
                            }}
                        >
                            <Text style={styles.btnText}>Logout</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.textInputBtn}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Text style={styles.btnText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BaseScreen>
        );
    }
}

export { Logout };
