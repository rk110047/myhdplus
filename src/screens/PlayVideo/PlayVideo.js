import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  AsyncStorage
} from "react-native";
import { connect } from 'react-redux';
import { NavigationEvents } from "react-navigation";
import styles from "./PlayVideo.style";
import BaseScreen from "../base/BaseScreen";
// import { Video } from "expo-av";
// import { ScreenOrientation } from "expo";
import Carousal from "../../SharedComponent/HorizontalCarousal/Carousal";
import data from "../LiveTv/JsonData";
import {
  getCategories,
  getChannels,
  getVideos
} from "../../redux/action-creators/home";

const channels = [
  { image: require("../../../assets/imgs/channel.png") },
  { image: require("../../../assets/imgs/channel.png") },
  { image: require("../../../assets/imgs/channel.png") },
  { image: require("../../../assets/imgs/channel.png") },
  { image: require("../../../assets/imgs/channel.png") }
];

const Navbar = [
  { name: "Sports", status: true },
  { name: "News", status: false },
  { name: "Infotainment", status: false },
  { name: "Drama", status: false },
  { name: "Kids", status: false },
  { name: "Fashion", status: false }
];

class PlayVideo extends Component {
  state = {
    navbar: [],
    play: false,
    inFullscreen: false,
    orientation: "portrait"
  };

  componentWillMount = async () => {
    this.setState({ navbar: Navbar });
    const api_token = await AsyncStorage.getItem("api_token");
    const renderChannels = await this.props.getChannels(api_token);
    const renderVideos = await this.props.getVideos(api_token);
    const renderCategories = await this.props.getCategories(api_token);
  };

  navClickHandler = (index, navItem) => {
    const x = this.state.navbar.map(item => {
      if (item.name === navItem.name) {
        return {
          ...item,
          status: true
        };
      } else {
        return {
          ...item,
          status: false
        };
      }
    });

    this.setState({ navbar: x });
    this.sportsList();
  };

  navbarList = () => {
    const categories = this.props.categories.data.results
    return categories.map((nav, i) => {
      const navTextStyle =
        this.state.navbar[i].status == true
          ? styles.activeNavText
          : styles.navText;
      const navbarStyle =
        this.state.navbar[i].status == true
          ? styles.activeNavbar
          : styles.navbar;
      return (
        <TouchableHighlight
          key={i}
          underlayColor="#212121"
          onPress={() => this.navClickHandler(i, nav)}
        >
          <View style={navbarStyle}>
            <Text style={navTextStyle}>{nav.name}</Text>
          </View>
        </TouchableHighlight>
      );
    });
  };

  sportsList = () => {
    // const ITEM = this.state.navbar.filter(item => {
    //   if (item.status) {
    //     return item;
    //   }
    // });

    // const categories = this.props.categories.data.results

    // let navName = ITEM[0].name;
    console.log('testsss', this.props)
    const allVideos = this.props.archVideos.data === undefined ? [] : this.props.archVideos.data.results.concat(this.props.recVideos.data.results)
    return allVideos.map((video, i) => {
      return (
        <View key={i} style={styles.sportContainer}>
          <View style={styles.imageContainer}>
            <Image source={video.video_url} style={styles.sportImage} />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.titleText}>{video.name}</Text>
            {/* <Text style={styles.descriptionText}>{sport.description}</Text> */}
          </View>
        </View>
      );
    });
  };

  changeScreenOrientation = async () => {};
  switchToLandscape = async () => {
    console.log("landscape");
    // await ScreenOrientation.lockAsync(
    //   ScreenOrientation.OrientationLock.LANDSCAPE
    // );
    // this.videoRef.presentFullscreenPlayer();
    this.setState({ inFullscreen: true });
  };

  switchToPortrate = async () => {
    console.log("portrait");
    // await ScreenOrientation.lockAsync(
    //   ScreenOrientation.OrientationLock.PORTRAIT
    // );
    // this.videoRef.dismissFullscreenPlayer();
    this.setState({ inFullscreen: false });
  };

  _onFullscreenUpdate = () => {
    console.log("full screen update");
    this.state.inFullscreen
      ? this.switchToPortrate()
      : this.switchToLandscape();
  };

  render() {
    let { play, orientation, inFullscreen } = this.state;
    if (
      this.props.channels === undefined ||
      this.props.recVideos === undefined ||
      this.props.categories === undefined
    ) {
      return <Text>loading...</Text>;
    }

    const video = this.props.recVideos[0];
    const channel = this.props.channels.data.results.filter(channel => channel.id === video.channel)
    return (
      <BaseScreen logo search>
        {/* <NavigationEvents
                onWillFocus ={()=>this.setState({play:true})}
                onWillBlur={()=>this.setState({play:false})}
                /> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.videoContainer}>
              {/* <Video
                // posterSource={require('../../../assets/imgs/maxresdefault.jpg')}
                // source={require('../../../assets/imgs/videoplayback.mp4')}
                source={{ uri: video.video_url }}
                resizeMode="cover"
                ref={ref => {
                  this.videoRef = ref;
                }}
                posterResizeMode="cover"
                useNativeControls
                onFullscreenUpdate={this._onFullscreenUpdate}
                // usePoster
                // isLooping
                switchToLandscape={inFullscreen}
                switchToPortrate={inFullscreen}
                shouldPlay={true}
                style={{ width: "100%", height: "100%" }}
                posterStyle={styles.poster}
              /> */}
            </View>
            <View style={styles.innerContainer}>
              <View style={styles.titleContainer}>
                <View>
                  <Text style={styles.heading}>{video.name}</Text>
                  <Text style={styles.text}>14-09-2019</Text>
                </View>
                <View>
                  <Image
                    source={{uri:channel[0].channel_image}}
                    style={styles.download}
                  />
                </View>
              </View>
              <View style={styles.titleContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{uri:channel[0].channel_image}}
                    style={styles.image}
                  />
                </View>
                <View style={styles.textContainer}>
            <Text style={styles.heading2}>{channel[0].name}</Text>
                  <Text style={styles.text2}>
                    Lorem ipsum dolor sit amet, consetetur sidcing elitr, sed
                    diam nonumy eirmod tepor invidunt ut labore et dolore magna
                    aliquyam erat, sedy diam voluptua. At vero eos justo duo.
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View></View>
              </View>
              <View style={styles.line}></View>
              <View style={styles.titleContainer}>
                <Text style={styles.heading}>Recommended Channels</Text>
                <Text style={styles.viewText}>View All</Text>
              </View>
              <Carousal channels={this.props.channels.data.results} />
              <View style={styles.line}></View>
            </View>
            <View style={styles.navContainer}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {this.navbarList()}
              </ScrollView>
            </View>
            <ScrollView>
              <View style={styles.sportList}>{this.sportsList()}</View>
            </ScrollView>
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
  categories: state.channels.categories
});

export default connect(mapStateToProps, {
  getChannels,
  getVideos,
  getCategories
})(PlayVideo);
