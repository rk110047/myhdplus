import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import BaseScreen from '../base/BaseScreen';
import { styles } from './About.style';
import logo from '../../../assets/imgs/iptv_logo.jpg';

class About extends Component {


    render() {
        return (
            <BaseScreen>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={logo} style={styles.logo} />
                    </View>
                    <View style={styles.innerContainer}>
                        <Text style={styles.text}>IPtv v2.3.05</Text>
                        <Text style={styles.about}>About IPtv</Text>
                        <View style={styles.line}></View>
                        <Text style={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utbore et dolore magna aliquyam erat, sed diam voluu. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</Text>
                    </View>
                </View>
            </BaseScreen>
        );
    }
}


export { About };