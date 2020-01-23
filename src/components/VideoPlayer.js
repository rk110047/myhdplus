import React, { Component } from 'react'
import Video from 'react-native-video';
import {View,StyleSheet,Dimensions} from 'react-native'
const {width,height}=Dimensions.get("window")
export default class VideoPlayer extends Component {
    render() {
        return (
            <View style={{flex:1,width:'100%'}}>
     <Video source={{uri: "http://185.94.77.110/live/vamoshd.m3u8"}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
       onBuffer={()=>{console.log("buffer")}}                // Callback when remote video is buffering
       onError={(error)=>console.log("error",error)}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} 
       />
         </View>
        )
    }
}
let styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
        width:'100%'
          },
  });
