import React from 'react';
import {
    View,
    Image,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './Header.style'

import headerLogo from '../../../assets/imgs/gibstat.jpeg';
import searchImg from '../../../assets/imgs/search.png';
import toggleBtnImg from '../../../assets/imgs/toggleBtn.png';
import arrow from '../../../assets/imgs/arrow.png';



const Header = (props) =>
    props.arrow ?
        <View style={styles.container}>
                <TouchableHighlight style={{ position: 'absolute', left:15 }} underlayColor='#212121' onPress={() => props.navigation.navigate('About')} >
                    <Image source={arrow} style={styles.image} />
                </TouchableHighlight>
            <Image source={headerLogo} style={styles.logo} />
        </View>
        :
        <View style={styles.container}>
            {props.drawer && props.centerText == 'Register' || props.centerText == 'Login' ?
                null :
                <TouchableHighlight style={{ paddingRight: 100 }} underlayColor='#212121' onPress={() => props.navigation.openDrawer()} >
                    <Image source={toggleBtnImg} style={styles.image} />
                </TouchableHighlight>}
            {<Image source={headerLogo} style={styles.logo} />}
            {/* {props.search && <Image source={searchImg} style={styles.image} />} */}

            {/* {props.centerText != 'Login' &&
            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.centerText}</Text>
            </View>} */}
            {props.drawer && props.centerText == 'Register' || props.centerText == 'Login' ? null
                :
                <TouchableHighlight style={{ paddingLeft: 100 }} underlayColor='#212121' onPress={() => props.navigation.navigate('Search')}>
                    <Image source={searchImg} style={styles.image} />
                </TouchableHighlight>}
        </View>

export default withNavigation(Header);