import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import BaseScreen from '../base/BaseScreen'
import VideoListComponent from '../../components/VideoListComponent';

export default class VideoOnDemandChannelScreen extends Component {
    constructor(props){
        super(props)

    }
    render() {
        const { params } = this.props.navigation.state;
        return (
            <BaseScreen>
            <View style={{flex:1,padding:20}}>
                <FlatList
                data={params.channels}
                renderItem={(video)=>{
                    return <VideoListComponent
                    image={video.item.content_image}
                   is_adult={params.category.is_adult}
                   data={video.item} 
                   screen="videoOnDemandChannel"
                   />;
                }}
                />
            </View>
            </BaseScreen>
        )
    }
}
