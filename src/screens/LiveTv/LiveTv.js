import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableHighlight, Image } from 'react-native';
import BaseScreen from '../base/BaseScreen';
import data from './JsonData';
import { styles } from './LiveTv.style';


const Navbar = [{ name: "Sports", status: true }, { name: "News", status: false }, { name: "Infotainment", status: false }, { name: "Drama", status: false }, { name: "Kids", status: false }, { name: "Fashion", status: false }];

class LiveTv extends Component {

    state = {
        navbar: []
    }

    componentWillMount = () => {
        this.setState({ navbar: Navbar });
    }


    navClickHandler = (index, navItem) => {

        const x = this.state.navbar.map((item) => {
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

        this.setState({ navbar: x });
        this.sportsList()

    }

    navbarList = () => {
        return Navbar.map((nav, i) => {
            const navTextStyle = this.state.navbar[i].status == true ? styles.activeNavText : styles.navText;
            const navbarStyle = this.state.navbar[i].status == true ? styles.activeNavbar : styles.navbar;
            return (
                <TouchableHighlight key={i} underlayColor='#212121' onPress={() => this.navClickHandler(i, nav)}>
                    <View style={navbarStyle}>
                        <Text style={navTextStyle}>{nav.name}</Text>
                    </View>
                </TouchableHighlight>
            )
        })
    }


    sportsList = () => {

        const ITEM = this.state.navbar.filter((item) => {
            if (item.status) {
                return item;
            }
        })

        let navName = ITEM[0].name;
        return data[navName].map((sport, i) => {
            return (
                <TouchableHighlight key={i} underlayColor='#212121' onPress={() => this.props.navigation.navigate('PlayVideo')}>
                    <View style={styles.sportContainer}>
                        <View style={styles.imageContainer}>
                            <Image source={sport.image} style={styles.sportImage} />
                        </View>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.titleText}>{sport.title}</Text>
                            <Text style={styles.descriptionText}>{sport.description}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            )
        })
    }

    render() {
        return (
            <BaseScreen logo={true} search={true}>
                <View style={styles.container}>
                    <View style={styles.navContainer}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {this.navbarList()}
                        </ScrollView>
                    </View>
                    <ScrollView>
                        <View style={styles.sportList}>
                            {this.sportsList()}
                        </View>
                    </ScrollView>
                </View>
            </BaseScreen>
        );
    }
}


export { LiveTv };