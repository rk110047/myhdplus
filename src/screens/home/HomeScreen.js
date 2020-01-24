import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Image,
  Text,
  Dimensions,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';

// import { Video } from "expo-av";

import BaseScreen from '../base/BaseScreen';
import {styles} from './HomeScreen.style';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import Videos from '../../SharedComponent/Videos/Videos';
import Carousal from '../../SharedComponent/HorizontalCarousal/Carousal';
import {
  getChannels,
  getVideos,
  getCategories,
} from '../../redux/action-creators/home';
import VideoPlayer from '../../components/VideoPlayer';
import VideoListComponent from '../../components/VideoListComponent';

class HomeScreenComponent extends Component {
  componentDidMount = async () => {
    const api_token = await AsyncStorage.getItem('api_token');
    this.props.getChannels();
    this.props.getCategories();
    const renderVideos = await this.props.getVideos(api_token);
  };
  render() {
    if (!this.props.recVideos) {
      return <Text>loading...</Text>;
    }
    let channelsImages = [];
    this.props.channels.map(channel =>
      channelsImages.push(channel.channel_image),
    );
    return (
      <BaseScreen logo search>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={{flex: 1, height: 150, width: '100%'}}>
              <VideoPlayer />
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
            <FlatList
              data={this.props.archVideos}
              renderItem={({item}) => <VideoListComponent data={item} />}
            />
          </View>
        </ScrollView>
      </BaseScreen>
    );
  }
}

const mapStateToProps = state => ({
  channels: state.channels.channels,
  recVideos: state.channels.recVideos,
  archVideos: state.channels.archVideos,
});

export default connect(mapStateToProps, {
  getChannels,
  getVideos,
  getCategories,
})(HomeScreenComponent);
