import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableHighlight, Image } from 'react-native';
import BaseScreen from '../base/BaseScreen';
import { FlatList } from 'react-native-gesture-handler';
import VideoListComponent from '../../components/VideoListComponent';
import { connect } from 'react-redux';

class ArchiveTv extends Component {


  render() {
    return (
      <BaseScreen logo={true} search={true}>
    <FlatList
              data={this.props.archVideos}
              renderItem={({item}) => <VideoListComponent 
              data={item} />}
            />
      </BaseScreen>
    );
  }
}
const mapStateToProps = state => ({
   archVideos: state.channels.archVideos,
});
export default connect(mapStateToProps, null)(ArchiveTv);

