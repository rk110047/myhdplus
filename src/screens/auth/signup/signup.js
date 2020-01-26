import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    Text, 
    View, 
    Button, 
    Image,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native';
import {styles} from "./signup.style";
import logo from '../../../../assets/imgs/iptv_logo.png';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { userRegister } from '../../../redux/action-creators/auth'

class SignupScreenComponent extends Component {
    state = {
      email: "",
      password: "",
      confirmed_password: ""
    }

    onChangeText = (key, val) => {
      this.setState({ [key]: val });
    };

    userRegister = async (user) => {
      console.log('user', user)
      const register = await this.props.register(user)
      console.log("register",register)
      this.props.navigation.navigate('Login')
    } 

    render() {
        return (
          <KeyboardAvoidingView  style={styles.container} behavior="padding">
            <View style={styles.container}>
              <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.formContainer}>
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
                placeholderTextColor="rgba(33,33,33,0.5)"
                style={styles.textInput}
                onChangeText={val => this.onChangeText("email", val)}
              />
              <TextInput
                textContentType="password"
                secureTextEntry={true}
                password={true}
                placeholder="Password"
                placeholderTextColor="rgba(33,33,33,0.5)"
                style={styles.textInput}
                onChangeText={val => this.onChangeText("password", val)}
              />
              <TextInput
                textContentType="password"
                secureTextEntry={true}
                password={true}
                placeholder="Confirm Password"
                placeholderTextColor="rgba(33,33,33,0.5)"
                style={styles.textInput}
                onChangeText={val => this.onChangeText("confirmed_password", val)}
              />
              <TouchableOpacity style={styles.textInputBtn}
              onPress={() => this.userRegister(this.state)}
              >
                <Text style={styles.btnText}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={()=>this.props.navigation.navigate('Login')}
              >
                <Text style={styles.linkText2}>Already User? Login</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = (state) => ({
  userRegister : state.user.user
});

export default connect(mapStateToProps, {register: userRegister})(SignupScreenComponent)
