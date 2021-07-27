import React, { Component } from 'react';
import { View, Text, Dimensions, AsyncStorage } from 'react-native';
import BaseScreen from '../base/BaseScreen';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { styles } from './otp.style';
import Toast from 'react-native-simple-toast';



const width = Dimensions.get('window').width;



export default class Mobile_verification extends Component {

    state = {
        data: {
            hd_plus_number: '',
            otp: ''
        }
    }

    //    async componentDidMount(){
    //         const hd_plus_number = await AsyncStorage.getItem('hd_plus_number')
    //         console.log(hd_plus_number)
    //          this.setState({email_id , email_id_login})
    //     }


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
            mobile_number: this.state.data.otp,
            otp: ""
        }
        fetch('http://196.29.238.110/api/v1/hd+/otp/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then((response) => response.json())
            .then((res) => {
                if (res) {
                    this.props.navigation.navigate('otp', { mobile_number: this.state.data.otp })
                    Toast.show('OTP Sent Successfully!', Toast.LONG);
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
                        <Text style={{ color:"#fff", fontSize:16, textAlign:"justify"}}>Please enter your phone number here. Note that your My HD PLUS  service will only be available on this mobile device number.</Text>
                    </View>
                    <TextInput
                        value={this.state.data.otp}
                        placeholder='Mobile number'
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
                    {/* <Text style={styles.otp}>Resend OTP</Text> */}
                </View>
            </BaseScreen>
        );
    }
}
