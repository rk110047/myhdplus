import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BaseScreen from '../base/BaseScreen';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { styles } from './ChangePassword.style';

export default class ChangePassword2 extends Component {

    state = {
        data: {
            email: '',
            newPassword: '',
            confirmPassword: ''
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
        // const textStyle = [styles.textInput, { backgroundColor: '#E0E0E0' }]
        const textStyle = [styles.textInput, { backgroundColor: '#FFFFFF' }]
        return (
            <BaseScreen centerText='Change Password' arrow >
                <View style={styles.container}>
                    <TextInput
                        value={this.state.data.email}
                        placeholder='demo@example.com'
                        style={textStyle}
                        onChangeText={(text) => this.onChangeText('email', text)}
                        keyboardType='email-address'
                        placeholderTextColor='#212121'
                    />
                    <TextInput
                        value={this.state.data.otp}
                        placeholder='New Password'
                        style={textStyle}
                        onChangeText={(text) => this.onChangeText('newPassword', text)}
                        placeholderTextColor='#212121'
                    />
                     <TextInput
                        value={this.state.data.otp}
                        placeholder='Confirm Password'
                        style={textStyle}
                        onChangeText={(text) => this.onChangeText('confirmPassword', text)}
                        placeholderTextColor='#212121'
                    />
                    <TouchableHighlight underlayColor='#212121' onPress={() => this.props.navigation.navigate('Success')} >
                        <View style={styles.submitContainer}>
                            <Text style={styles.submit}>Change Password</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </BaseScreen>
        );
    }
}
