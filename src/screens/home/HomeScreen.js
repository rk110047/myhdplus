import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,  
  Text,
  StatusBar,
  Dimensions,
  Platform,
  TouchableHighlight
} from 'react-native';
import BaseScreen from '../base/BaseScreen';
import {styles} from './HomeScreen.style';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import Carousal from '../../SharedComponent/HorizontalCarousal/Carousal';
import AsyncStorage from '@react-native-community/async-storage';
import {
  getChannels,
  getVideos,
  getRecordVideos,
  getCategories,
  getCategorieshome,
  getHomeSettings,
  getAllFavourites,
  getProfileSettings
} from '../../redux/action-creators/home';
import VideoPlayerComponent from '../../components/VideoPlayerComponent';
import VideoListComponent from '../../components/VideoListComponent';
import Orientation from 'react-native-orientation-locker';
import { getradioChannels, getradioCategories } from '../../redux/action-creators/radio';

const {width,height}=Dimensions.get("window")
class HomeScreenComponent extends Component {
  constructor(props){
    super(props);
    this.state={videoHeight:width > 600 ? 400 : 200,
    hideHeader:false,
    favouritesList:[],
    videoData: {}
    }
  }
  componentDidMount = async () => 
  {
    console.log(Platform)
    const api_token = await AsyncStorage.getItem('api_token');
    this.props.getChannels();
    this.props.getVideos();
    this.props.getRecordVideos();
    this.props.getCategories();
    this.props.getCategorieshome();
    this.props.getHomeSettings();
    this.props.getAllFavourites();
    // this.props.getProfileSettings()
  
   
    var initial = Orientation.getInitialOrientation();
     };
     navbarList = () => {
      let categories = [];
      if (this.state.radio) {
        categories = this.props.categoriesRadio;
      } else {
        categories = this.props.categorieshome;
      }
      return (
        categories &&
        categories.map((nav, i) => { console.log(nav.serial_no,"12333", categories[i])
          const navTextStyle =
            categories[i].status == true ? styles.activeNavText : styles.navText;
          const navbarStyle =
            categories[i].status == true ? styles.activeNavbar : styles.navbar;
          return (
           nav.serial_no != 1 ? <TouchableHighlight
              key={i}
              underlayColor="#212121"
              onPress={() => this.props.navClickHandler(nav.id, this.state.radio)}>
              <View style={navbarStyle}>
                <Text style={navTextStyle}>{nav && nav.name}</Text>
              </View>
            </TouchableHighlight>
            : null 
          );
        })
      );
    };

    top = () => {
      this.scrollView.scrollTo({ x: 0, y: 0, animated: true });
    }

     sportsList = () => {
      let categoryChannels = [];
      if (this.state.radio) {
        categoryChannels = this.props.categoryChannelsRadio;
      } else {
        categoryChannels = this.props.categoryChannels;
      }
      return (
        categoryChannels &&
        categoryChannels.map((sport, i) => {
          // let is_adultCategoryArr = this.props.categories.filter((item) => item.id == sport.category[0])
          return <VideoListComponent
            onPressVideo={() => {
              this.props.navigation.navigate('VideoDetailsScreen',{data:sport})
            }}
            // is_adult={is_adultCategoryArr && is_adultCategoryArr[0].is_adult}
            data={sport}
            radio={this.state.radio ? true : false}
          />;
        })
      );
  
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
      logo 
      search>
        <StatusBar backgroundColor='black' hidden={false}/>
        <ScrollView showsVerticalScrollIndicator={false} >
          <View style={styles.container}>
            <View style={{flex: 1, height: this.state.videoHeight, width: '100%'}}>
              <VideoPlayerComponent 
              disableTimer={true}
              disableBack={true}
              disableSeekbar={true}
              disablePlayPause={true}
              data={
            {
                  channel_url: this.props.homeVideo && this.props.homeVideo.home_page_url,
                  channel_image: this.props.homeVideo && this.props.homeVideo.site_logo,
                  catchup_recording_hours:"0"
           }
           }
           changeHeight={(videoHeight,hideHeader)=>{
            StatusBar.setHidden(hideHeader) 
            this.setState({videoHeight,hideHeader})}}
           />
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.titleText}>HD+ Channels</Text>
              {/* <TouchableOpacity>
                <Text style={styles.titleBtn}>View All</Text>
              </TouchableOpacity> */}
            </View>
            <Carousal channels={this.props.poularChannels} />
            <View style={styles.navContainer}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {this.navbarList()}
              </ScrollView>
            </View>
            <ScrollView >
              <View style={styles.sportList} onPress={this.top} >{this.sportsList()}</View>
            </ScrollView>
            {/* <View style={styles.contentContainer}>
              <Text style={styles.titleText}>HD+ Channels</Text>
            </View>
            <FlatList
              data={this.state.favouritesList}
              renderItem={({item}) => <VideoListComponent data={item} />}
            /> */}
          </View>
        </ScrollView>
      </BaseScreen>
    );
  }
}

const mapStateToProps = state => ({
  channels: state.channels.channels,
  categories: state.channels.categories,
  categorieshome: state.channels.categorieshome,
  categoryChannels: state.channels.channels.filter(
    item => item.category == state.channels.selectedCategoryIdhome,
  ),
  selectedCategoryId: state.channels.selectedCategoryId,
  categoriesRadio: state.radio.radioCategories,
  channelsRadio: state.radio.radioChannels,
  categoryChannelsRadio: state.radio.radioChannels.filter(
    item => item.category == state.radio.selectedCategoryId,
  ),
  selectedCategoryIdRadio: state.radio.selectedCategoryId,
  poularChannels:state.channels.channels.filter((item)=>item.is_popular),
  recVideos: state.channels.recVideos,
  archVideos: state.channels.archVideos,
  recordVideos: state.channels.recordVideos,
  homeVideo:state.channels.homeSettings && state.channels.homeSettings[0]
});
// const mapDispatchToProps = dispatch => {
//   return {
//     navClickHandler: (id, radio) =>
//       dispatch({ type: 'CHANGE_LIVETV_NAVIGATION_STATUS', payload: id }),

//   };

// };
export default connect(mapStateToProps, {
  getChannels,
  getVideos,
  getRecordVideos,
  getCategories,
  getCategorieshome,
  getHomeSettings,
  getAllFavourites,
  getProfileSettings,
  navClickHandler: (id, radio) =>  ({ type: 'CHANGE_LIVETV_NAVIGATION_STATUS', payload: id })
})(HomeScreenComponent);
