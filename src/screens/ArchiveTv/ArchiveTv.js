import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableHighlight, Image } from 'react-native';
import BaseScreen from '../base/BaseScreen';
import data from './JsonData';
import { styles } from '../LiveTv/LiveTv.style';
import Carousal from '../../SharedComponent/HorizontalCarousal/Carousal';
import moment from 'moment';
import Videos from '../../SharedComponent/Videos/Videos';



const Navbar = [{ name: "Browse", status: true }, { name: "Popular Today", status: false }, { name: "Popular This Week", status: false }]

const channels = [{ image: require('../../../assets/imgs/channel1.png') }, { image: require('../../../assets/imgs/channel.png') }, { image: require('../../../assets/imgs/channel1.png') }, { image: require('../../../assets/imgs/channel.png') }, { image: require('../../../assets/imgs/channel1.png') }]

const date = moment(new Date())
let day1 = date.subtract(1, 'day').format('DD MMM')
let day2 = date.subtract(1, 'day').format('DD MMM')
let day3 = date.subtract(1, 'day').format('DD MMM')
let day4 = date.subtract(1, 'day').format('DD MMM')
let day5 = date.subtract(1, 'day').format('DD MMM')

const Navbar2 = [{ name: "Today", status: true }, { name: day1, status: false }, { name: day2, status: false }, { name: day3, status: false }, { name: day4, status: false }, { name: day5, status: false }]

class ArchiveTv extends Component {

  state = {
    navbar: [],
    navbar2: [],
    show: true
  }

  componentWillMount = () => {
    this.setState({ navbar: Navbar, navbar2: Navbar2 });

  }


  navClickHandler = (index, navItem, prop) => {
    if (prop == 'navbar') {
      if (index > 0) {
        this.setState({ show: false })
      } else {
        this.setState({ show: true })
      }
    }

    const x = this.state[prop].map((item) => {
      if (item.name === navItem.name) {
        return {
          ...item,
          status: true
        }
      } else {
        return {
          ...item,
          status: false
        }
      }

    })

    this.setState({ [prop]: x });
    this.List()

  }

  navbarList = (Nav, prop) => {
    return Nav.map((nav, i) => {
      const navTextStyle = this.state[prop][i].status == true ? styles.activeNavText : styles.navText;
      const navbarStyle = this.state[prop][i].status == true ? styles.activeNavbar : styles.navbar;
      return (
        <TouchableHighlight key={i} underlayColor='#212121' onPress={() => this.navClickHandler(i, nav, prop)}>
          <View style={navbarStyle}>
            <Text style={navTextStyle}>{nav.name}</Text>
          </View>
        </TouchableHighlight>
      )
    })
  }



  List = () => {

    const ITEM = this.state.navbar.filter((item) => {
      if (item.status) {
        return item;
      }
    })

    let navName = ITEM[0].name;
    console.log(data[navName])
    return (
      <Videos screen='archiveVideo' data={data[navName]} />
    )
  }

  render() {
    return (
      <BaseScreen logo={true} search={true}>
        {/* <View style={styles.container}>
          <View style={styles.navContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {this.navbarList(Navbar, 'navbar')}
            </ScrollView>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Carousal channels={channels} />
          </View>
          {this.state.show && <View style={styles.navContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {this.navbarList(Navbar2, 'navbar2')}
            </ScrollView>
          </View>}
          <ScrollView showsVerticalScrollIndicator={false} style={{ marginVertical: 20 }}>
            {this.List()}
          </ScrollView>
        </View> */}
      </BaseScreen>
    );
  }
}


export { ArchiveTv };