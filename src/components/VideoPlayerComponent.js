import React, {Component} from 'react';
import VideoPlayer from 'react-native-video-controls';

import {View, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import KeepAwake from 'react-native-keep-awake';

const {width, height} = Dimensions.get('window');
export default class VideoPlayerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoLoading: false,
    };
  }
  render() {
    const {channel_url, channel_image} = this.props.data;
    return (
      <>
        {this.state.videoLoading && (
          <View>
            <ActivityIndicator size="large" />
          </View>
        )}
        <View style={{flex: 1, width: '100%'}}>
          <VideoPlayer
            poster={
              channel_image
                ? channel_image
                : 'https://www.rapidtvnews.com/images/2019/Mar_2019/Star-Sports-logo_6_March_2019.png'
            }
            posterResizeMode="stretch"
            source={{
              uri: channel_url
                ? channel_url
                : 'http://185.94.77.110/live/vamoshd.m3u8',
            }} // Can be a URL or a local file.
            resizeMode="stretch"
            navigator={this.props.navigator}
            fullscreen={true}
            fullscreenOrientation="landscape"
            disableVolume={true}
            disableTimer={
              this.props.disableTimer ? this.props.disableTimer : false
            }
            disableBack={
              this.props.disableBack ? this.props.disableBack : false
            }
            onEnterFullscreen={()=>console.log("full Screen")}
            onBuffer={() => {
              console.log('buffer');
            }} // Callback when remote video is buffering
            onReadyForDisplay={()=>KeepAwake.activate()}
            onError={error =>{
              console.log("Error in running",error)
              KeepAwake.deactivate()}} // Callback when video cannot be loaded
            style={styles.backgroundVideo}
          />
        </View>
      </>
    );
  }
}
let styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0  },
});
