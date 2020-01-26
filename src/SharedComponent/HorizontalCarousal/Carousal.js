import React, { Component } from 'react';
import { View, Text,ScrollView ,Image, TouchableOpacity} from 'react-native';
import {styles} from './Carousal.style';
import { withNavigation } from 'react-navigation';


function Carousal(props) {
    const channelsRow = () => {
        return props.channels && props.channels.map((channel, i) => {
            return (
                <TouchableOpacity
                onPress={ props.onPressVideo?props.onPressVideo:()=>props.navigation.navigate('VideoDetailsScreen',{data:channel})}

                key={i} style={styles.channel}>
                    <Image source={{uri:channel.channel_image}} style={styles.image} />
                </TouchableOpacity>
            )
        })
    }

        return (
            <View style={styles.channelContainer}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {channelsRow()}
                </ScrollView>
            </View>
        )
}


export default withNavigation(Carousal);