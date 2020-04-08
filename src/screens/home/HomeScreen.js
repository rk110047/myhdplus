import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,  
  Text,
  AsyncStorage,
  StatusBar,
  Dimensions
} from 'react-native';
import BaseScreen from '../base/BaseScreen';
import {styles} from './HomeScreen.style';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import Carousal from '../../SharedComponent/HorizontalCarousal/Carousal';
import {
  getChannels,
  getVideos,
  getCategories,
  getHomeSettings,
  getAllFavourites,
  getProfileSettings
} from '../../redux/action-creators/home';
import VideoPlayerComponent from '../../components/VideoPlayerComponent';
import VideoListComponent from '../../components/VideoListComponent';
import Orientation from 'react-native-orientation-locker';
const {width,height}=Dimensions.get("window")
class HomeScreenComponent extends Component {
  constructor(props){
    super(props)
    this.state={videoHeight:200,
    hideHeader:false,
    favouritesList:[]
    }
  }
  componentDidMount = async () => 
  {
    const api_token = await AsyncStorage.getItem('api_token');
    this.props.getChannels();
    this.props.getCategories();
    this.props.getHomeSettings();
    this.props.getAllFavourites();
    // this.props.getProfileSettings()
    AsyncStorage.getItem('favourites').then( value => {
      if (value) {
        this.setState({favouritesList:JSON.parse(value)})
      }
    });
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
                  channel_url: this.props.homeVideo && this.props.homeVideo.home_page_url,
                  channel_image: this.props.homeVideo && this.props.homeVideo.site_logo,
           }
           }
           changeHeight={(videoHeight,hideHeader)=>{
            StatusBar.setHidden(true) 
            this.setState({videoHeight,hideHeader})}}
           />
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.titleText}>Popular channels</Text>
              {/* <TouchableOpacity>
                <Text style={styles.titleBtn}>View All</Text>
              </TouchableOpacity> */}
            </View>
            <Carousal channels={this.props.poularChannels} />
            <View style={styles.contentContainer}>
              <Text style={styles.titleText}>Favourite Channels</Text>
            </View>
            <FlatList
              data={this.state.favouritesList}
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
  poularChannels:state.channels.channels.filter((item)=>item.is_popular),
  recVideos: state.channels.recVideos,
  archVideos: state.channels.archVideos,
  homeVideo:state.channels.homeSettings && state.channels.homeSettings[0]
});

export default connect(mapStateToProps, {
  getChannels,
  getVideos,
  getCategories,
  getHomeSettings,
  getAllFavourites,
  getProfileSettings
})(HomeScreenComponent);
