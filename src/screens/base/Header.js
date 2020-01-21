import React from 'react';
import {
    View,
    Image,
    Text,
    Dimensions
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './Header.style'

import headerLogo from '../../../assets/imgs/logo.png';
import searchImg from '../../../assets/imgs/search.png';
import toggleBtnImg from '../../../assets/imgs/toggleBtn.png';
import arrow from '../../../assets/imgs/arrow.png';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Header = (props) =>
    <View style={styles.container}>
        {props.arrow ?
            <TouchableHighlight underlayColor='#212121' onPress={() => props.navigation.goBack()} >
                <Image source={arrow} style={styles.image} />
            </TouchableHighlight> :
            <TouchableHighlight underlayColor='#212121' onPress={() => props.navigation.openDrawer()} >
                <Image source={toggleBtnImg} style={styles.image} />
            </TouchableHighlight>}
        {props.logo && <Image source={headerLogo} style={styles.logo} />}
        {props.search && <Image source={searchImg} style={styles.image} />}

        {props.centerText &&
            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.centerText}</Text>
            </View>}
    </View>

export default withNavigation(Header);