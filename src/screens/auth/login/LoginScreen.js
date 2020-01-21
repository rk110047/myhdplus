import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  Text,
  View,
  Button,
  Image,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import { styles } from "./LoginScreen.style";
import logo from "../../../../assets/imgs/iptv_logo.png";
import {
  TouchableHighlight,
  TouchableOpacity
} from "react-native-gesture-handler";
import { userLogin } from "../../../redux/action-creators/auth";

class LoginScreenComponent extends Component {
  state = {
    email: "test1@gmail.com",
    password: "test12345678"
  };

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  userLogin = async (user) => {
    const login = await this.props.login(user);
    if(login === undefined) {
      alert('please login again')
      return false
    }
    AsyncStorage.setItem('api_token', login.payload.data.data.user.token);
    this.props.navigation.navigate("Main")
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
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
          <TouchableOpacity
            style={styles.textInputBtn}
            onPress={() => this.userLogin(this.state)}
          >
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.linkText}>Forgot password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            <Text style={styles.linkText2}>New User?Sign up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => ({
  userLogin : state.user.user
});

export default connect(mapStateToProps, {login: userLogin})(LoginScreenComponent)
