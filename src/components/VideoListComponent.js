import React from 'react'
import { TouchableOpacity,View,Text ,Image} from "react-native";
import {styles} from "../screens/LiveTv/LiveTv.style"
export default function VideoListComponent(props){
    const {channel_image,name,description,id}=props
    return(
        <TouchableOpacity key={id} underlayColor='#212121' 
                // onPress={() => this.props.navigation.navigate('PlayVideo')}
                >
                    <View style={styles.sportContainer}>
                        <View style={styles.imageContainer}>
                            <Image source={{uri:channel_image}} style={styles.sportImage} />
                        </View>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.titleText}>{name}</Text>
                            <Text style={styles.descriptionText}>{description}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
    )
}