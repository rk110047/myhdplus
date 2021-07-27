import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, StatusBar, Image, Dimensions, AsyncStorage } from "react-native"
import BaseScreen from '../base/BaseScreen'
import VideoPlayerComponent from '../../components/VideoPlayerComponent'
import Carousal from '../../SharedComponent/HorizontalCarousal/Carousal'
import { connect } from 'react-redux';
import VideoListComponent from '../../components/VideoListComponent'
import { styles } from '../LiveTv/LiveTv.style';
import EpgComponent from '../../components/common/EpgComponent'
import download from '../../../assets/imgs/download.png';
import downloadstop from '../../../assets/imgs/downloadstop.png';
import live from '../../../assets/imgs/live.png';
import Toast from 'react-native-simple-toast';
import { getradioChannels, getradioCategories } from '../../redux/action-creators/radio';





const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class VideoDetailsScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videoData: {},
      videoHeight: width > 600 ? 400 : 200,
      hideHeader: false,
      downloadview: true,
      downloadstopview: false,
      token: "",
      stop_recording_id: "",
      radio: false,
    }
  }
  async componentDidMount() {
    this.props.getChannels();
    this.props.getCategories()
    const token = await AsyncStorage.getItem('api_token')
    StatusBar.setHidden(true);
    this.setState({
      videoData: this.props.navigation.getParam("data"),
      radio: this.props.navigation.getParam("radio"),
      token
    })
  }

  startrecording = () => {
    Toast.show('Recording Start', Toast.LONG);
    const url = this.state.videoData.channel_url.replace(/^https:\/\//i, 'http://');
    const body = {
      channel_name: this.state.videoData.name,
      input_url: url,
      channel_id: this.state.videoData.id
    }
    console.log(this.state.videoData.name,url,this.state.videoData.id)
    fetch('http://196.29.238.110/api/v1/pvr/', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + this.state.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then((response) => response.json())
      .then((res) => { console.log("res")
        this.setState({ stop_recording_id: res.data.stream.id, downloadview: false })
      })
  }

  stoprecording = () => {
    Toast.show('Recording Stop', Toast.LONG);
    fetch('http://196.29.238.110/api/v1/pvr/' + this.state.stop_recording_id, {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + this.state.token,
        'Content-Type': 'application/json'
      },
    }).then((response) => response.json())
      .then((res) => {
        console.log("byyy", res)
        this.setState({ downloadview: true })
      })
  }
  // navbarListhd = () => {
  //   const {categories} = this.props;
    
  // return (
  //     categories &&
  //     categories.map((nav, i) => {
  //       const navTextStyle =
  //         categories[i].status == true ? styles.activeNavText : styles.navText;
  //       const navbarStyle =
  //         categories[i].status == true ? styles.activeNavbar : styles.navbar;
  //       return (
  //         nav.serial_no == 1 ? <TouchableHighlight
  //           key={i}
  //           underlayColor="#0d8ad2"
  //           onPress={() => this.props.navClickHandler(nav.id)}
  //           >
  //           <View style={navbarStyle}>
  //             <Text style={navTextStyle}>{nav && nav.name}</Text>
  //           </View>
  //         </TouchableHighlight>
  //         :
  //         null
  //       );
  //     })
  //   );
  // };
  
    navbarList = () => {
      const {categories} = this.props;
      
    return (
        categories &&
        categories.map((nav, i) => {
          const navTextStyle =
            categories[i].status == true ? styles.activeNavText : styles.navText;
          const navbarStyle =
            categories[i].status == true ? styles.activeNavbar : styles.navbar;
          return (
            // nav.serial_no != 1 ? 
            <TouchableHighlight
              key={i}
              underlayColor="#0d8ad2"
              onPress={() => this.props.navClickHandler(nav.id)}
              >
              <View style={navbarStyle}>
                <Text style={navTextStyle}>{nav && nav.name}</Text>
              </View>
            </TouchableHighlight>
            // :
            // null
          );
        })
      );
    };

  top = () => {
    this.scrollView.scrollTo({ x: 0, y: 0, animated: true });
  }

  golive = () => {
    const catchup_url_new = this.state.videoData.catchup_url;
    const channel_url_new = this.state.videoData.channel_url;
    let video_data_1 = this.state.videoData;
    video_data_1.catchup_url = channel_url_new;
    video_data_1.channel_url = catchup_url_new;
    this.setState({videoData: video_data_1})
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
            if (sport.id !== this.state.videoData.id) {
              this.setState({ videoData: sport })
            }
          }}
          // is_adult={is_adultCategoryArr && is_adultCategoryArr[0].is_adult}
          data={sport}
          radio={this.state.radio ? true : false}
        />;
      })
    );

  };
  render() {
    return (
      <ScrollView ref={component => { this.scrollView = component }} style={{ backgroundColor: "#0F2D41" }} >
        <BaseScreen
          hideHeader={this.state.hideHeader}
          logo={true} search={true}>

          <View style={{ height: this.state.videoHeight }}>
            {this.state.videoData.catchup_recording_hours == "0" ?
              <VideoPlayerComponent
                disableTimer={true}
                navigator={this.props.navigation}
                disableSeekbar={true}
                disablePlayPause={true}
                data={this.state.videoData}
                changeHeight={(videoHeight, hideHeader) => {
                  StatusBar.setHidden(true)
                  this.setState({ videoHeight, hideHeader })
                }}
              /> :
              <VideoPlayerComponent
                disableTimer={true}
                navigator={this.props.navigation}
                disableSeekbar={false}
                disablePlayPause={false}
                data={this.state.videoData}
                changeHeight={(videoHeight, hideHeader) => {
                  StatusBar.setHidden(true)
                  this.setState({ videoHeight, hideHeader })
                }}
              />
            }
          </View>
          <View style={{ flex: 2, paddingHorizontal: 10 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={[styles.titleText, { marginVertical: 15, fontSize: width > 600 ? 22 : 20 }]}>{this.state.videoData.name}</Text>
              {/* <View style={{ flexDirection: "row" }}>
                { this.state.videoData.catchup_recording_hours != "0" && this.state.videoData.catchup_recording_hours ? 
                  <TouchableHighlight underlayColor='#212121' style={{ marginRight: "2%" }} onPress={() => this.golive()}>
                    <Image source={live} style={{
                      resizeMode: 'contain',
                      height: height * 4 / 100,
                      width: width * 8 / 100,
                      marginRight: 10
                    }} />
                  </TouchableHighlight> 
                  :
                  null 
                }
                {this.state.radio ? null : this.state.downloadview == true ? <TouchableHighlight underlayColor='#212121' onPress={() => this.startrecording()}>
                  <Image source={download} style={{
                    resizeMode: 'contain',
                    height: height * 4 / 100,
                    width: width * 8 / 100,
                    marginRight: 10
                  }} />
                </TouchableHighlight>
                  :
                  <TouchableHighlight underlayColor='#212121' onPress={() => this.stoprecording()}>
                    <Image source={downloadstop} style={{
                      resizeMode: 'contain',
                      height: height * 4 / 100,
                      width: width * 8 / 100,
                      marginRight: 10
                    }} />
                  </TouchableHighlight>
                }
              </View> */}
            </View>
            <Text style={[styles.titleText, { marginBottom: 8, fontSize: width > 600 ? 20 : 14 }]}>{this.state.videoData.description}</Text>
            {this.state.videoData.EPG_file && <EpgComponent epgLink={this.state.videoData.EPG_file} />}
            {/* <Text style={styles.titleText}>Popular channels</Text>

            <Carousal
              onPressVideo={(sport) => {
                if (sport.id !== this.state.videoData.id) {
                  this.setState({ videoData: sport })
                }
              }}
              channels={this.state.radio ? this.props.channelsRadio : this.props.channels} /> */}
            <View style={styles.navContainer}>
            {/* <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              >
              {this.navbarListhd()}
            </ScrollView> */}
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {this.navbarList()}
              </ScrollView>
            </View>
            <ScrollView >
              <View style={styles.sportList} onPress={this.top} >{this.sportsList()}</View>
            </ScrollView>
          </View>
        </BaseScreen>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  channels: state.channels.channels,
  categories: state.channels.categories,
  categoryChannels: state.channels.channels.filter(
    item => item.category == state.channels.selectedCategoryId,
  ),
  selectedCategoryId: state.channels.selectedCategoryId,
  categoriesRadio: state.radio.radioCategories,
  channelsRadio: state.radio.radioChannels,
  categoryChannelsRadio: state.radio.radioChannels.filter(
    item => item.category == state.radio.selectedCategoryId,
  ),
  selectedCategoryIdRadio: state.radio.selectedCategoryId,

});
const mapDispatchToProps = dispatch => {
  return {
    getChannels: () => dispatch(getradioChannels()),
    getCategories: () => dispatch(getradioCategories()),
    navClickHandler: (id, radio) =>
      radio ? dispatch({ type: 'CHANGE_RADIO_NAVIGATION_STATUS', payload: id }) : dispatch({ type: 'CHANGE_LIVETV_NAVIGATION_STATUS', payload: id }),

  };

};
export default connect(mapStateToProps, mapDispatchToProps)(VideoDetailsScreen);
