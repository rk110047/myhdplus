import React, {Component} from 'react';
import VideoPlayer from 'react-native-video-controls';
import {View, StyleSheet, Dimensions, ActivityIndicator, BackHandler} from 'react-native';
import KeepAwake from 'react-native-keep-awake';
import Orientation from 'react-native-orientation-locker';



const {width, height} = Dimensions.get('window');
export default class VideoPlayerComponent extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      videoLoading: false,
      videodata:{}
    };
    
  }
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}
componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}
handleBackButtonClick() {
  if( Dimensions.get('window').width > Dimensions.get('window').height )
  {
  this.props.changeHeight(200, false);
  Orientation.unlockAllOrientations();
  return true;
  }
}

gocatchup = () =>{
  this.state.videodata = this.props.data;
  this.state.videodata.catchup_url = this.props.data.catchup_url;
  this.state.videodata.channel_url = this.props.data.channel_url;
  this.setState({ data : this.state.videodata})
}

  render() {
    let channel_url;
    const { channel_image } = this.props.data;
    if(this.props.data.catchup_recording_hours > 0) {
    channel_url = this.props.data.catchup_url;
    }
    else
    {
    channel_url = this.props.data.channel_url;
    }
    return (
      <>
        {this.state.videoLoading && (
          <View>
            <ActivityIndicator size="large" />
          </View>
        )}
        <View style={{flex: 1, width: '100%'}}>
          <VideoPlayer
            poster={channel_image}
            posterResizeMode="stretch"
            source={{
              uri: channel_url, type:"m3u8"
            }}
            currentPlaybackTime={10000}
            // Can be a URL or a local file.
            // resizeMode="stretch"
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
            disablePlayPause={
              this.props.disablePlayPause ? this.props.disablePlayPause : false
            }
            onBack={()=>{
              this.handleBackButtonClick();
            }}
            onEnterFullscreen={() => {

              this.props.changeHeight(width, true);
              Orientation.lockToLandscapeLeft();
            }}
            onExitFullscreen={() => {
              this.props.changeHeight(200, false);
              Orientation.unlockAllOrientations();
            }}
            onPlay = {() => {
              this.gocatchup()
            }}
            // disableBack={
            //   this.props.disableBack ? this.props.disableBack : false
            // }
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
    width: '100%',
  },
});
