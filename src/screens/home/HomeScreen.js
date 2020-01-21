import React, { Component } from "react";
import { connect } from 'react-redux';
import { View, Image, Text, Dimensions, AsyncStorage } from "react-native";

// import { Video } from "expo-av";

import BaseScreen from "../base/BaseScreen";
import { styles } from "./HomeScreen.style";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import Videos from "../../SharedComponent/Videos/Videos";
import Carousal from "../../SharedComponent/HorizontalCarousal/Carousal";
import { getChannels, getVideos } from '../../redux/action-creators/home'


class HomeScreenComponent extends Component {

  componentDidMount = async () => {
    const api_token = await AsyncStorage.getItem('api_token');
     this.props.getChannels()
    const renderVideos = await this.props.getVideos(api_token)
}
  render() {
    if( !this.props.recVideos){
      return <Text>loading...</Text>
    }
    let channelsImages = []
    this.props.channels.map(channel => channelsImages.push(channel.channel_image))
    return (
      <BaseScreen logo search>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.videoContainer}>
              {/* <Video
                // posterSource={require('../../../assets/imgs/maxresdefault.jpg')}
                source={{
                  uri: "http://175.45.180.30:5000/live/nhk_test/playlist.m3u8"
                }}
                resizeMode="cover"
                // useNativeControls
                // usePoster
                // isLooping
                shouldPlay={true}
                style={styles.poster}
                posterStyle={styles.poster}
              /> */}
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.titleText}>Popular channels</Text>
              <TouchableOpacity>
                <Text style={styles.titleBtn}>View All</Text>
              </TouchableOpacity>
            </View>
            <Carousal channels={this.props.channels} />
            <View style={styles.contentContainer}>
              <Text style={styles.titleText}>Popular Content</Text>
            </View>
            <Videos videos={this.props.recVideos} />
          </View>
        </ScrollView>
      </BaseScreen>
    );
  }
}

const mapStateToProps = (state) => ({
  channels : state.channels.channels,
  recVideos: state.channels.recVideos,
  archVideos: state.channels.archVideos
});

export default connect(mapStateToProps, {getChannels, getVideos})(HomeScreenComponent);
