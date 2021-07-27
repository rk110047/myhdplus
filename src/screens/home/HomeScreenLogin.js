import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    AsyncStorage,
    Image,
    StatusBar,
    Dimensions,
    Platform,
    TouchableOpacity
} from 'react-native';
import BaseScreen from '../base/BaseScreen';
import { styles } from './HomeScreen.style';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import Carousal from '../../SharedComponent/HorizontalCarousal/Carousal';
import { ColorConst } from "../../utils/Constants";
import {
    getChannels,
    getVideos,
    getRecordVideos,
    getCategories,
    getHomeSettings,
    getAllFavourites,
    getProfileSettings
} from '../../redux/action-creators/home';
import VideoPlayerComponent from '../../components/VideoPlayerComponent';
import VideoListComponent from '../../components/VideoListComponent';
import Orientation from 'react-native-orientation-locker';
// import { SliderBox } from "react-native-image-slider-box";
import Carousel from 'react-native-snap-carousel';
const { width, height } = Dimensions.get("window")
class HomeScreenLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoHeight: width > 600 ? 400 : 200,
            hideHeader: false,
            favouritesList: [],
            images: []
        }
    }
    async componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Login');
        }, 15000);
        const api_token = await AsyncStorage.getItem('api_token');

        this.props.getChannels();
        // this.props.getVideos();
        // this.props.getRecordVideos();
        // this.props.getCategories();
        this.props.getHomeSettings();
        // this.props.getAllFavourites();
        // this.props.getProfileSettings()
        // AsyncStorage.getItem('favourites').then( value => {
        //   if (value) {
        //     this.setState({favouritesList:JSON.parse(value)})
        //   }
        // });
        const renderVideos = await this.props.getVideos(api_);
        var initial = Orientation.getInitialOrientation();
    };

    _renderItem({ item, index }) {
        return (
            <View style={{
                backgroundColor: 'floralwhite',
                borderRadius: 5,
                height: 150,
                padding: 25,
                marginLeft: 25,
                marginRight: 25,
            }}>
                <Image resizeMode={"contain"} source={{ uri: item }}
                    style={{ width: 100, height: 100 }} />
            </View>

        )
    }

    render() {
        if (!this.props.recVideos) {
            return <Text>loading...</Text>;
        }
        let channelsImages = [];
        this.props.channels && this.props.channels.map(channel =>
            channelsImages.push(channel.channel_image),
        );
        return (
            <BaseScreen centerText='Login'
                hideHeader={this.state.hideHeader}
                logo search>
                {/* <StatusBar backgroundColor='black' hidden={false} /> */}
                <View style={{ height: 30 }} />
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={styles.container}>
                        <View style={{ flex: 1, height: this.state.videoHeight, width: '100%' }}>
                            <VideoPlayerComponent
                                disableTimer={true}
                                disableBack={true}
                                disableFullscreen={true}
                                disableSeekbar={true}
                                disablePlayPause={true}
                                data={
                                    {
                                        channel_url: this.props.homeVideo && this.props.homeVideo.home_page_url,
                                        channel_image: this.props.homeVideo && this.props.homeVideo.site_logo,
                                        catchup_recording_hours: "0"
                                    }
                                }
                                changeHeight={(videoHeight, hideHeader) => {
                                    StatusBar.setHidden(hideHeader)
                                    this.setState({ videoHeight, hideHeader })
                                }}
                            />
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.titleText}>HD+ Channels</Text>
                            {/* <TouchableOpacity>
                <Text style={styles.titleBtn}>View All</Text>
              </TouchableOpacity> */}
                        </View>
                        <View style={{
                            marginVertical: 16,
                            width: "95%",
                            marginHorizontal: "2.5%"
                        }}>
                            <Carousel
                                ref={(c) => { this._carousel = c; }}
                                data={channelsImages}
                                renderItem={this._renderItem}
                                sliderWidth={width}
                                sliderHeight={100}
                                itemWidth={200}
                                layout={"default"}
                                autoplay={true}
                                loop={true}
                            />
                            {/* <SliderBox
                            autoplay={true}
                            images={channelsImages}
                            resizeMode={"contain"}
                            dotStyle={{height:0}}
                            sliderBoxHeight={100}
                            imageLoadingColor={"transparent"}
                        /> */}
                        </View>
                        {/* <Carousal loginscreen={true} channels={this.props.poularChannels} /> */}
                        {/* <View style={styles.contentContainer}>
              <Text style={styles.titleText}>Favourite Channels</Text>
            </View>
            <FlatList
              data={this.state.favouritesList}
              renderItem={({item}) => <VideoListComponent data={item} />}
            /> */}
                    </View>
                </ScrollView>
                <View style={{ marginHorizontal: 20 }}>
                    <TouchableOpacity
                        style={{
                            borderRadius: 8,
                            opacity: 1,
                            width: "100%",
                            height: 52,
                            backgroundColor: ColorConst.themeColor,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 16,
                        }}
                        onPress={() => this.props.navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: width > 600 ? 20 : 18,
                            color: 'white'
                        }}>Login</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        style={{
                            borderRadius: 8,
                            opacity: 1,
                            width: "100%",
                            height: 52,
                            backgroundColor: ColorConst.themeColor,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 16,
                        }}
                        onPress={() => this.props.navigation.navigate("Signup")}
                    >
                        <Text style={{
                            fontSize: width > 600 ? 20 : 18,
                            color: 'white'
                        }}>Register</Text>
                    </TouchableOpacity> */}
                </View>
            </BaseScreen>
        );
    }
}

const mapStateToProps = state => ({
    channels: state.channels.channels,
    poularChannels: state.channels.channels.filter((item) => item.is_popular),
    recVideos: state.channels.recVideos,
    archVideos: state.channels.archVideos,
    recordVideos: state.channels.recordVideos,
    homeVideo: state.channels.homeSettings && state.channels.homeSettings[0]
});

export default connect(mapStateToProps, {
    getChannels,
    getVideos,
    getRecordVideos,
    getCategories,
    getHomeSettings,
    getAllFavourites,
    getProfileSettings
})(HomeScreenLogin);
