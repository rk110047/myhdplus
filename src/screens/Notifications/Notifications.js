import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import BaseScreen from '../base/BaseScreen';
import data from './JsonData';
import styles from './Notifications.style';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';

const height = Dimensions.get('window').height;

class Notifications extends Component {
  state = {
    active: []
  }

  componentDidMount = () => {
    var active = []
    for (let i = 0; i < data.notifications.length; i++) {
      active[i] = false
    }
    this.setState({ active })
  }

  clickHandler = (index) => {
    var active = this.state.active;
    for (let i = 0; i < active.length; i++) {
      if (i == index && active[i] == false) {
        active[i] = true;
      } else if (i == index && active[i] == true) {
        active[i] = false;
      }
    }
    this.setState({ active })
  }

  renderData = () => {
    return data.notifications.map((notification, i) => {
      return (
        <View key={i} style={styles.notificationContainer}>
          <View style={styles.imageContainer}>
            <Image source={notification.image} style={styles.image} />
          </View>
          <TouchableHighlight underlayColor='#212121' onPress={() => this.clickHandler(i)}>
            <View style={styles.descriptionContainer}>
              <Text style={styles.titleText}>{notification.title}</Text>
              <Text style={styles.descriptionText}>{notification.description}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='#212121' onPress={() => this.clickHandler(i)}>
            <View style={styles.starContainer}>
              <Image source={this.state.active[i]? require('../../../assets/imgs/star.png'):require('../../../assets/imgs/emptyStar.png')} style={this.state.active[i] == true ? styles.activeImage : styles.starImage} />
            </View>
          </TouchableHighlight>
        </View>
      )
    })
  }

  render() {
    return (
      <BaseScreen centerText='Notifications'>
        <ScrollView style={{ flex: 1, height }}>
          <View style={styles.container}>
            {this.renderData()}
          </View>
        </ScrollView>
      </BaseScreen>
    );
  }
}


export { Notifications };