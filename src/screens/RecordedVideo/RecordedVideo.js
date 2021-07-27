import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BaseScreen from '../base/BaseScreen';
import { FlatList } from 'react-native-gesture-handler';
import VideoListComponent from '../../components/VideoListComponent';
import { connect } from 'react-redux';
import {
    getRecordVideos,
  } from '../../redux/action-creators/home';


class RecordedVideo extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount = async () => 
    {
      this.props.getRecordVideos();
    }

    render() {
        console.log("hiii",this.props.recordVideos)
        return (
            <BaseScreen>
                <FlatList
                    data={this.props.recordVideos}
                    renderItem={({ item }) => <VideoListComponent
                        data={item} />}
                />
            </BaseScreen>
        );
    }
}


const mapStateToProps = state => ({
    recordVideos: state.channels.recordVideos,
});
export default connect(mapStateToProps, {getRecordVideos})(RecordedVideo);