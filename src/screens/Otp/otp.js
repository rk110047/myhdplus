import React, { Component } from 'react';
import { View, Text, Dimensions, AsyncStorage } from 'react-native';
import BaseScreen from '../base/BaseScreen';
import { TextInput, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './otp.style';
import Toast from 'react-native-simple-toast';



const width = Dimensions.get('window').width;



export default class otp extends Component {

    state = {
        data: {
            hd_plus_number: '',
            mobile_number: '',
            otp: '',
        }
    }

    async componentDidMount() {
        const { params } = this.props.navigation.state;
        const mobile_number = params ? params.mobile_number : null;
        const hd_plus_number = await AsyncStorage.getItem('hd_plus_number');
        console.log(mobile_number, hd_plus_number)
        this.setState({ mobile_number, hd_plus_number })
    }


    onChangeText = (name, value) => {
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [name]: value
            }
        }))
    }

    submitotp = () => {
        const body = {
            mobile_number: this.state.mobile_number,
            otp: this.state.data.otp
        }
        fetch('http://196.29.238.110/api/v1/hd+/otp/validaton/?hd_plus_number=' + this.state.hd_plus_number, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then((response) => response.json())
            .then((res) => {
                console.log(res)
                if (res.status == 200) {
                    AsyncStorage.setItem('number_verified', "verified!");
                    this.props.navigation.navigate('Main')
                    Toast.show('Login Successful', Toast.LONG);
                } else {
                    Toast.show('OTP Incorrect', Toast.LONG);
                }
            })

    }


    render() {
        const otpStyle = [styles.textInput, { backgroundColor: '#FFFFFF', fontSize: width > 600 ? 22 : 14 }]
        return (
            <BaseScreen centerText={this.state.email_id ? 'Register' : 'Login'} >
                <View style={styles.container}>
                    <View style={{ width: "90%", marginBottom: 10, paddingHorizontal: "2.5%" }}>
                        <Text style={{ color:"#fff", fontSize:16, textAlign:"justify"}}>An OTP is sent to your registered Mobile number</Text>
                    </View>
                    <TextInput
                        value={this.state.data.otp}
                        placeholder='Enter OTP'
                        style={otpStyle}
                        onChangeText={(text) => this.onChangeText('otp', text)}
                        keyboardType='number-pad'
                        placeholderTextColor='#212121'
                    />
                    <TouchableHighlight underlayColor='#212121' onPress={() => this.submitotp()} >
                        <View style={styles.submitContainer}>
                            <Text style={styles.submit}>Submit</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
                        <Text style={styles.otp}>Resend OTP</Text>
                    </TouchableHighlight>
                </View>
            </BaseScreen>
        );
    }
}
