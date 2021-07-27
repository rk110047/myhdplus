import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import BaseScreen from '../base/BaseScreen';
import {styles} from './Settings.style';
import key from '../../../assets/imgs/key.png';
import status from '../../../assets/imgs/status.png';
import update from '../../../assets/imgs/update.png';
import {Dialog} from 'react-native-simple-dialogs';
import {TextInput} from 'react-native-gesture-handler';
import ChangePassword from '../ChangePassword/ChangePassword';
import AsyncStorage from '@react-native-community/async-storage';

class Settings extends Component {
  state = {
    data: {
      digit1: '',
      digit2: '',
      digit3: '',
      digit4: '',
    },
    pin: '6666',
    wrongPin: false,
    enable: false,
    token: ""
  };

  async componentDidMount() {
    const token = await AsyncStorage.getItem('api_token')
    this.setState({
      token
    })
  }

  openDialog = show => {
    this.setState({showDialog: show});
  };

  openEnableDialog = show => {
    this.setState({showEnableDialog: show});
    this.openDialog(false);
    // this.textInputRef.focus()
  };

  onChangeText = (name, value) => {
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [name]: value,
      },
    }));
  };

  onClickEnableButton = () => {
    if (this.state.enable == false) {
      this.openDialog(true);
    } else {
      this.setState({enable: false});
    }
  };

  // For wrong Pin

  wrongPin = () => {
    this.setState({
      data: {
        digit1: '',
        digit2: '',
        digit3: '',
        digit4: '',
      },
      wrongPin: true,
    });
  };

  //check wether the enter pin is correct or not

  pinHandler = () => {
    const data = this.state.data;
    var arr = data.digit1 + data.digit2 + data.digit3 + data.digit4;
    if (arr == this.state.pin) {
      this.openEnableDialog(false);
      this.setState({wrongPin: false, enable: true});
    } else {
      this.wrongPin();
    }
  };

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
    const _pinStyle =
      this.state.wrongPin == true
        ? [styles.textInput, {borderColor: 'red'}]
        : [styles.textInput, {borderColor: 'white'}];
    const enable =
      this.state.enable == true
        ? [styles.clickImage, {alignItems: 'flex-end'}]
        : [styles.clickImage, {alignItems: 'flex-start'}];
    return (
      <BaseScreen centerText="Settings">
        <View style={styles.container}>
          {/* <View style={styles.innerContainer}>
            <Text style={styles.text}>Enable Strict Content</Text>
            <TouchableHighlight
              underlayColor="#212121"
              onPress={this.onClickEnableButton}>
              <View style={enable}>
                <View style={styles.innerImage}></View>
              </View>
            </TouchableHighlight>
          </View> */}
          {/* <TouchableHighlight
            underlayColor="#212121"
            onPress={() => this.props.navigation.navigate('ChangePassword')}>
            <View style={styles.changeContainer}>
              <Image source={key} style={styles.icon} />
              <Text style={styles.text}>Change Password</Text>
            </View>
          </TouchableHighlight> */}
          {/* <TouchableHighlight
            underlayColor="#212121"
            // onPress={() => {
            //   // AsyncStorage.clear();
            //   // this.props.navigation.navigate('Login');
            //   this.logoutuser()
            // }}
            >
            <View style={styles.changeContainer}>
              <Image source={status} style={styles.icon} />
              <Text style={styles.text}>Subscription status</Text>
            </View>
          </TouchableHighlight> */}
          <TouchableHighlight
            underlayColor="#212121"
            // onPress={() => {
              // AsyncStorage.clear();
              // this.props.navigation.navigate('Login');
              // this.logoutuser()
            // }
            // }
            >
            <View style={styles.changeContainer}>
              <Image source={update} style={styles.icon} />
              <Text style={styles.text}>Check for new update</Text>
            </View>
          </TouchableHighlight>
        </View>

        <Dialog
          onTouchOutside={() => this.openDialog(false)}
          visible={this.state.showDialog}
          titleStyle={styles.modalTitle}
          onRequestClose={() => this.openDialog(false)}
          dialogStyle={styles.dialog}
          animationType="fade">
          <View style={styles.dialogContainer}>
            <Text style={styles.dialogHeading}>Enable Strict Content?</Text>
            <Text style={styles.dialogPara}>
              This content may not be suitable for some audience. Please make
              sure that your age is above 18 years.
            </Text>
            <View style={styles.box}>
              <TouchableHighlight
                underlayColor="#313131"
                onPress={() => this.openDialog(false)}>
                <View style={styles.box1}>
                  <Text style={styles.discard}>Discard</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor="#313131"
                onPress={() => this.openEnableDialog(true)}>
                <View style={styles.box2}>
                  <Text style={styles.enable}>Enable</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </Dialog>

        <Dialog
          onTouchOutside={() => this.openEnableDialog(false)}
          visible={this.state.showEnableDialog}
          onRequestClose={() => this.openEnableDialog(false)}
          dialogStyle={styles.dialog}
          animationType="fade">
          <View style={styles.dialogContainer}>
            <Text style={styles.dialogHeading}>Enter Pin</Text>
            <Text style={styles.dialogPara}>
              Please enter your security PIN. This may be given to you by your
              Admin. If not, then ask your admin or contact via support
            </Text>
            <View style={styles.textInputContainer}>
              <TextInput
                value={this.state.data.digit1}
                maxLength={1}
                style={_pinStyle}
                onChangeText={text => this.onChangeText('digit1', text)}
                keyboardType="number-pad"
                onChange={() => this.secondDigit.focus()}
              />
              <TextInput
                value={this.state.data.digit2}
                maxLength={1}
                style={_pinStyle}
                onChangeText={text => this.onChangeText('digit2', text)}
                keyboardType="number-pad"
                ref={ref => (this.secondDigit = ref)}
                onChange={() => this.thirdDigit.focus()}
              />
              <TextInput
                value={this.state.data.digit3}
                maxLength={1}
                style={_pinStyle}
                onChangeText={text => this.onChangeText('digit3', text)}
                keyboardType="number-pad"
                ref={ref => (this.thirdDigit = ref)}
                onChange={() => this.fourthDigit.focus()}
              />
              <TextInput
                value={this.state.data.digit4}
                maxLength={1}
                style={_pinStyle}
                onChangeText={text => this.onChangeText('digit4', text)}
                keyboardType="number-pad"
                ref={ref => (this.fourthDigit = ref)}
                // onChange={()=>this.openEnableDialog(false)}
              />
            </View>
            {this.state.wrongPin == true && (
              <View>
                <Text style={styles.wrongPin}>Wrong PIN</Text>
              </View>
            )}
            <View style={styles.box}>
              <TouchableHighlight
                underlayColor="#313131"
                onPress={this.pinHandler}>
                <View style={styles.box3}>
                  <Text style={styles.enable}>Enable Strict Content</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </Dialog>
      </BaseScreen>
    );
  }
}

export {Settings};
