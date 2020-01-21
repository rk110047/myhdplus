import React, { Component } from 'react';
import { View, Text,ScrollView ,Image} from 'react-native';
import {styles} from './Carousal.style';

// const channels = ['1', '2', '3', '4', '5', '6', '7', '8'];

class Carousal extends Component {
    channelsRow = () => {
        return this.props.channels.map((channel, i) => {
            return (
                <View key={i} style={styles.channel}>
                    <Image source={{uri:channel.channel_image}} style={styles.image} />
                </View>
            )
        })
    }

    render() {
        return (
            <View style={styles.channelContainer}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {this.channelsRow()}
                </ScrollView>
            </View>
        );
    }
}


export default Carousal;