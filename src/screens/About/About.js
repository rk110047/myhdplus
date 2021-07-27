import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import BaseScreen from '../base/BaseScreen';
import { styles } from './About.style';
import logo from '../../../assets/imgs/gibstat.jpeg';
import { ColorConst } from "../../utils/Constants";


class About extends Component {


    render() {
        return (
            <BaseScreen>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={logo} style={styles.logo} />
                    </View>
                    <View style={[styles.innerContainer, { flex: 1 }]}>
                        {/* <Text style={styles.text}>IPtv v2.3.05</Text> */}
                        <Text style={[styles.about, { color: ColorConst.themeColor }]}>About Ghana HD+</Text>
                        <View style={styles.line}></View>
                        <Text style={styles.description}>Ghana HD+ brings you all your favourite TV shows. Just download the latest app, create an account and start watching instantly on your device.</Text>
                        <Text style={styles.description}>Browse all your favourite shows.</Text>
                        <Text style={styles.description}>Stream over a Wi-Fi or mobile connection, or download to Watch offline.</Text>
                        <View style={{ position: "absolute", bottom: 70 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("TandC")} >
                                <Text style={[styles.text, { color: "red" }]}>Ghana HD+ Terms and Conditions.</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ position: "absolute", bottom: 20, flexDirection: "row" }}>
                            <Text style={[styles.text, { color: "grey" }]}>Developed by </Text>
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.leanvia.com/')}>
                                <Text style={[styles.text, { color: "grey" }]}>LEANVIA</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </BaseScreen>
        );
    }
}



export { About };