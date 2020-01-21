import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import BaseScreen from '../base/BaseScreen';
// import { styles } from './RecordedVideo.style';
// import Videos from '../../SharedComponent/Videos/Videos';
import VideoScreen from '../../SharedComponent/Screen/VideoScreen';


class RecordedVideo extends Component {

    render() {
        return (
                <VideoScreen screen='recordedVideo' /> 
        );
    }
}


export { RecordedVideo };