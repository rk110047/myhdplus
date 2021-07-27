import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import { styles } from "./LoginScreen.style";
import logo from "../../../../assets/imgs/gibstat.jpeg";
import { userLogin } from "../../../redux/action-creators/auth";
import Toast from 'react-native-simple-toast';


class LoginScreenComponent extends Component {
  state = {
    hd_plus_number: "",
    ott_password: ""
    // hd_plus_number:'',
    // ott_password:''
  };

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  onPressLogin = () => {
    if (!this.state.hd_plus_number)
      // alert("please enter hd_plus_number")
      Toast.show('Please Enter HD+ Number', Toast.LONG);
    else if (!this.state.ott_password)
      // alert("please enter ott_password")
      Toast.show("Please enter Password", Toast.LONG);
    else
      this.props.login(this.state, this.props.navigation)
  }


  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.container}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.formContainer}>
          <View style={{ width:"90%", marginBottom:40, paddingHorizontal:"2.5%"}}>
            <Text style={{ color:"#fff", fontSize:16, textAlign:"justify"}}>
              Please enter your HD+ Number and My HD PLUS password here. You can find both on the HD+ Subscriptions Status page on your HD+ Decoder.
          </Text>
          </View>
          <TextInput
            placeholder="HD+ number"
            keyboardType="email-address"
            placeholderTextColor="rgba(33,33,33,0.5)"
            style={styles.textInput}
            autoCapitalize='none'
            onChangeText={val => this.onChangeText("hd_plus_number", val)}
          />
          <TextInput
            textContentType="ott_password"
            secureTextEntry={true}
            password={true}
            placeholder="Password"
            placeholderTextColor="rgba(33,33,33,0.5)"
            style={styles.textInput}
            autoCapitalize='none'
            onChangeText={val => this.onChangeText("ott_password", val)}
          />
          <TouchableOpacity
            style={styles.textInputBtn}
            onPress={this.onPressLogin}
          >
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Text style={styles.linkText}>Forgot ott_password ?</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            {/* <Text style={styles.linkText2}>New User?Sign up</Text> */}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => ({
  userLogin: state.user.user
});

export default connect(mapStateToProps, { login: userLogin })(LoginScreenComponent)
