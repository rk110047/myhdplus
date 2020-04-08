import React, { Component } from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import BaseScreen from '../base/BaseScreen'
import VideoListComponent from '../../components/VideoListComponent';
const {width,height}=Dimensions.get("window")
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
                    containerStyle={{height:height*0.22}}
             imageStyle={{height:height*0.2}}
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
