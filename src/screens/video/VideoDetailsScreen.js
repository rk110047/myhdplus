import React, { Component } from 'react'
import {View,Text} from "react-native"
import BaseScreen from '../base/BaseScreen'
import VideoPlayer from '../../components/VideoPlayer'

export default class VideoDetailsScreen extends Component {
    constructor(props){
        super(props)
        this.data={}
    }
    componentDidMount(){
       this.data= this.props.navigation.getParam("data")
       console.log("data",this.data)
    }
    render() {
        return (
            <BaseScreen logo={true} search={true}>

            <View style={{flex:1}}>
                <VideoPlayer url={this.data.video_url}/>
            </View>
            <View style={{flex:2,borderWidth:2,borderColor:"white"}}></View>
            </BaseScreen>
        )
    }
}
