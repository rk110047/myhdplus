import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,  
  Text,
  AsyncStorage,
} from 'react-native';
import BaseScreen from '../base/BaseScreen';
import {styles} from './HomeScreen.style';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import Carousal from '../../SharedComponent/HorizontalCarousal/Carousal';
import {
  getChannels,
  getVideos,
  getCategories,
} from '../../redux/action-creators/home';
import VideoPlayerComponent from '../../components/VideoPlayerComponent';
import VideoListComponent from '../../components/VideoListComponent';
import Orientation from 'react-native-orientation-locker';

class HomeScreenComponent extends Component {
  constructor(props){
    super(props)
    this.state={videoHeight:200,
    hideHeader:false
    }
  }
  componentDidMount = async () => {
    const api_token = await AsyncStorage.getItem('api_token');
    this.props.getChannels();
    this.props.getCategories();
    const renderVideos = await this.props.getVideos(api_token);
    var initial = Orientation.getInitialOrientation();
  };
  render() {
    if (!this.props.recVideos) {
      return <Text>loading...</Text>;
    }
    let channelsImages = [];
    this.props.channels && this.props.channels.map(channel =>
      channelsImages.push(channel.channel_image),
    );
    return (
      <BaseScreen 
      hideHeader={this.state.hideHeader}
      logo search>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={{flex: 1, height: this.state.videoHeight, width: '100%'}}>
              <VideoPlayerComponent 
              disableTimer={true}
              disableBack={true}
              data={
            {
                  channel_url: "http://185.94.77.110/live/antena3-hd.mp4",
                  channel_image: "https://www.rapidtvnews.com/images/2019/Mar_2019/Star-Sports-logo_6_March_2019.png",
           }
           }
           changeHeight={(videoHeight,hideHeader)=>{this.setState({videoHeight,hideHeader})}}
           />
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.titleText}>Popular channels</Text>
              {/* <TouchableOpacity>
                <Text style={styles.titleBtn}>View All</Text>
              </TouchableOpacity> */}
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
