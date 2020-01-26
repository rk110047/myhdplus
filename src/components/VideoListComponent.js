import React from 'react'
import { TouchableOpacity,View,Text ,Image} from "react-native";
import {styles} from "../screens/LiveTv/LiveTv.style"
import { withNavigation } from 'react-navigation';

 function VideoListComponent(props){
    const {channel_image,name,description,id,data}=props
    return(
        <TouchableOpacity 
        key={data.id} underlayColor='#212121' 
                onPress={ props.onPressVideo?props.onPressVideo:()=>props.navigation.navigate('VideoDetailsScreen',{data})}
                >
                    <View style={styles.sportContainer}>
                        <View style={styles.imageContainer}>
                            <Image source={{uri:data.channel_image}} 
                            resizeMode='stretch'
                            style={styles.sportImage} />
                        </View>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.titleText}>{data.name}</Text>
                            <Text style={styles.descriptionText}>{data.description}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
    )
}
export default withNavigation(VideoListComponent);

