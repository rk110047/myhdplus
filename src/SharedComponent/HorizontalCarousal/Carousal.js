import React, { Component } from 'react';
import { View, Text,ScrollView ,Image, TouchableOpacity, Dimensions} from 'react-native';
import {styles} from './Carousal.style';
import { withNavigation } from 'react-navigation';
import { ColorConst } from '../../utils/Constants';


function Carousal(props) {
    const channelsRow = () => {
        return props.channels && props.channels.map((channel, i) => {
            return (
                <TouchableOpacity
                onPress={ props.loginscreen ? props.onPressVideo?()=>props.onPressVideo():()=>props.navigation.navigate('Login') : props.onPressVideo?()=>props.onPressVideo(channel):()=>props.navigation.navigate('VideoDetailsScreen',{data:channel})}
                key={i} style={styles.channel}>
                    <Image source={{uri:channel.channel_image}} style={styles.image} />
                </TouchableOpacity>
                
            )
        })
    }

        return (
            <View style={styles.channelContainer}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {props.channels && props.channels.length>0?channelsRow():<Text style={{color:ColorConst.themeColor}}>No Data Found</Text>}
                </ScrollView>
            </View>
        )
}


export default withNavigation(Carousal);