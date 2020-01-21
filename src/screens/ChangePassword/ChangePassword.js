import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BaseScreen from '../base/BaseScreen';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { styles } from './ChangePassword.style';

export default class ChangePassword extends Component {

    state = {
        data: {
            email: '',
            otp: '',
            submit: ''
        }
    }


    onChangeText = (name, value) => {
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [name]: value
            }
        }))
    }


    render() {
        const emailStyle = [styles.textInput, { backgroundColor: '#E0E0E0' }]
        const otpStyle = [styles.textInput, { backgroundColor: '#FFFFFF' }]
        return (
            <BaseScreen centerText='Change Password' arrow>
                <View style={styles.container}>
                <Text style={styles.text}>An OTP is sent to your registered Email</Text>
                    <TextInput
                        value={this.state.data.email}
                        placeholder='demo@example.com'
                        style={emailStyle}
                        onChangeText={(text) => this.onChangeText('email', text)}
                        keyboardType='email-address'
                        placeholderTextColor='#212121'
                    />
                    <TextInput
                        value={this.state.data.otp}
                        placeholder='Enter OTP'
                        style={otpStyle}
                        onChangeText={(text) => this.onChangeText('otp', text)}
                        keyboardType='number-pad'
                        placeholderTextColor='#212121'
                    />
                    <TouchableHighlight underlayColor='#212121' onPress={() => this.props.navigation.navigate('ChangePassword2')} >
                        <View style={styles.submitContainer}>
                            <Text style={styles.submit}>Submit</Text>
                        </View>
                    </TouchableHighlight>
                    <Text style={styles.otp}>Resend OTP</Text>
                </View>
            </BaseScreen>
        );
    }
}
