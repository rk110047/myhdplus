import React, {Component} from 'react';
import VideoPlayer from 'react-native-video-controls';
import {View, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import KeepAwake from 'react-native-keep-awake';
import Orientation from 'react-native-orientation-locker';

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
    console.log("video inn",this.props.data)

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
            }}
            // Can be a URL or a local file.
            resizeMode="stretch"
            toggleResizeModeOnFullscreen={true}
            mute={false}
            volume={1}
            audioOnly={true}
            navigator={this.props.navigator}
            fullscreen={true}
            fullscreenOrientation="landscape"
            disableVolume={true}
            disableTimer={
              this.props.disableTimer ? this.props.disableTimer : false
            }
            disableSeekbar={
              this.props.disableSeekbar ? this.props.disableSeekbar : false
            }
            onEnterFullscreen={() => {
              this.props.changeHeight(width, true);
              Orientation.lockToLandscapeLeft();
            }}
            onExitFullscreen={() => {
              this.props.changeHeight(200, false);
              Orientation.unlockAllOrientations();
            }}
            disableBack={
              this.props.disableBack ? this.props.disableBack : false
            }
            onReadyForDisplay={() => KeepAwake.activate()}
            onError={error => {
              KeepAwake.deactivate();
            }} // Callback when video cannot be loaded
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
    right: 0,
  },
});
