import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BaseScreen from '../../screens/base/BaseScreen';
import Videos from '../Videos/Videos';

class VideoScreen extends Component {


    render() {
        return (
            <BaseScreen logo search>
                <Videos  screen={this.props.screen}/>
            </BaseScreen>
        );
    }
}



export default VideoScreen;