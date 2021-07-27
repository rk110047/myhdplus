import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  Dimensions,
  StatusBar,
} from 'react-native';
import BaseScreen from '../base/BaseScreen';
import VideoPlayerComponent from '../../components/VideoPlayerComponent';
import EpgComponent from '../../components/common/EpgComponent';
import {styles} from '../LiveTv/LiveTv.style';
const {width, height} = Dimensions.get('window');
export default class VideoOnDemandDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoData: {},
      videoHeight: width > 600 ? 400 : 200,
      hideHeader: false,
    };
  }
  async componentDidMount() {
    let data = await this.props.navigation.getParam('data');
    let radio = await this.props.navigation.getParam('radio');
    StatusBar.setHidden(true);
    if (!radio) {
      data.channel_image = await data.content_image;
      data.channel_url = await data.content_url;
    }
    this.setState({
      videoData: data,
    });
  }
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <BaseScreen
          hideHeader={this.state.hideHeader}
          logo={true}
          search={true}>
          <View style={{height: this.state.videoHeight}}>
            <VideoPlayerComponent
              disableTimer={true}
              navigator={this.props.navigation}
              disableSeekbar={true}
              data={this.state.videoData}
              changeHeight={(videoHeight, hideHeader) => {
                StatusBar.setHidden(true) 
                this.setState({videoHeight, hideHeader});
              }}
            />
          </View>
          <View style={{height: height - 200, paddingHorizontal: 10}}>
            <Text
              style={[styles.titleText, {marginVertical: 15, fontSize: width > 600 ? 22 : 20}]}>
              {this.state.videoData.name}
            </Text>
            <Text style={[styles.titleText, {marginBottom: 8, fontSize: width > 600 ? 20 : 14}]}>
              {this.state.videoData.description}
            </Text>
            {this.state.videoData.EPG_file && (
              <EpgComponent epgLink={this.state.videoData.EPG_file} />
            )}
          </View>
        </BaseScreen>
      </ScrollView>
    );
  }
}
