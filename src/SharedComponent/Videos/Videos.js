import React, { Component } from 'react';
import { View, Text, Image,TouchableHighlight, AsyncStorage } from 'react-native';
import { styles } from './Videos.style';
import { ScrollView } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
// import { Video } from 'expo-av';


//this is dummy for various screen which after comes from api call

//dummy data for videoOnDemand Screen


// const popularContent = [
//     {
//         image: require('../../../assets/imgs/maxresdefault.jpg'),
//         title: 'Video_Title_Here',
//         date: '17th Sept, 2019 | 10:30 PM',
//         description: 'Lorem ipsum dolor sit amet, calori consetetur sadipscing elitr, sed oli diam nonum atnei eior.'
//     },
//     {
//         image: require('../../../assets/imgs/maxresdefault.jpg'),
//         title: 'Video_Title_Here',
//         date: '17th Sept, 2019 | 10:30 PM',
//         description: 'Lorem ipsum dolor sit amet, calori consetetur sadipscing elitr, sed oli diam nonum atnei eior.'
//     },
//     {
//         image: require('../../../assets/imgs/maxresdefault.jpg'),
//         title: 'Video_Title_Here',
//         date: '17th Sept, 2019 | 10:30 PM',
//         description: 'Lorem ipsum dolor sit amet, calori consetetur sadipscing elitr, sed oli diam nonum atnei eior.'
//     },
//     {
//         image: require('../../../assets/imgs/maxresdefault.jpg'),
//         title: 'Video_Title_Here',
//         date: '17th Sept, 2019 | 10:30 PM',
//         description: 'Lorem ipsum dolor sit amet, calori consetetur sadipscing elitr, sed oli diam nonum atnei eior.'
//     },
//     {
//         image: require('../../../assets/imgs/maxresdefault.jpg'),
//         title: 'Video_Title_Here',
//         date: '17th Sept, 2019 | 10:30 PM',
//         description: 'Lorem ipsum dolor sit amet, calori consetetur sadipscing elitr, sed oli diam nonum atnei eior fedf sfesf fdg sddfg gfdgb'
//     },
//     {
//         image: require('../../../assets/imgs/maxresdefault.jpg'),
//         title: 'Video_Title_Here',
//         date: '17th Sept, 2019 | 10:30 PM',
//         description: 'Lorem ipsum dolor sit amet, calori consetetur sadipscing elitr, sed oli diam nonum atnei eior fedf sfesf fdg sddfg gfdgb'
//     },
// ]

// // Dummy Data for recorded video

// const recordedContent = [
//     {
//         image: require('../../../assets/imgs/video.jpeg'),
//         title: 'Video_Title_Here',
//         date: '17th Sept, 2019 | 10:30 PM',
//         description: 'Lorem ipsum dolor sit amet, calori consetetur sadipscing elitr, sed oli diam nonum atnei eior.'
//     },
//     {
//         image: require('../../../assets/imgs/video.jpeg'),
//         title: 'Video_Title_Here',
//         date: '17th Sept, 2019 | 10:30 PM',
//         description: 'Lorem ipsum dolor sit amet, calori consetetur sadipscing elitr, sed oli diam nonum atnei eior.'
//     },
//     {
//         image: require('../../../assets/imgs/video.jpeg'),
//         title: 'Video_Title_Here',
//         date: '17th Sept, 2019 | 10:30 PM',
//         description: 'Lorem ipsum dolor sit amet, calori consetetur sadipscing elitr, sed oli diam nonum atnei eior.'
//     },
//     {
//         image: require('../../../assets/imgs/video.jpeg'),
//         title: 'Video_Title_Here',
//         date: '17th Sept, 2019 | 10:30 PM',
//         description: 'Lorem ipsum dolor sit amet, calori consetetur sadipscing elitr, sed oli diam nonum atnei eior.'
//     },
//     {
//         image: require('../../../assets/imgs/video.jpeg'),
//         title: 'Video_Title_Here',
//         date: '17th Sept, 2019 | 10:30 PM',
//         description: 'Lorem ipsum dolor sit amet, calori consetetur sadipscing elitr, sed oli diam nonum atnei eior.'
//     },

// ]

// // Dummy data for home screen

// homeContent = [
//     {
//         image: require('../../../assets/imgs/song.jpg'),
//         title: 'Video_Title_Here',
//         date: '17th Sept, 2019 | 10:30 PM',
//         description: 'Lorem ipsum dolor sit amet, calori consetetur sadipscing elitr, sed oli diam nonum atnei eior.'
//     },
//     {
//         image: require('../../../assets/imgs/song.jpg'),
//         title: 'Video_Title_Here',
//         date: '17th Sept, 2019 | 10:30 PM',
//         description: 'Lorem ipsum dolor sit amet, calori consetetur sadipscing elitr, sed oli diam nonum atnei eior.'
//     },
//     {
//         image: require('../../../assets/imgs/song.jpg'),
//         title: 'Video_Title_Here',
//         date: '17th Sept, 2019 | 10:30 PM',
//         description: 'Lorem ipsum dolor sit amet, calori consetetur sadipscing elitr, sed oli diam nonum atnei eior.'
//     },
//     {
//         image: require('../../../assets/imgs/song.jpg'),
//         title: 'Video_Title_Here',
//         date: '17th Sept, 2019 | 10:30 PM',
//         description: 'Lorem ipsum dolor sit amet, calori consetetur sadipscing elitr, sed oli diam nonum atnei eior.'
//     },
//     {
//         image: require('../../../assets/imgs/song.jpg'),
//         title: 'Video_Title_Here',
//         date: '17th Sept, 2019 | 10:30 PM',
//         description: 'Lorem ipsum dolor sit amet, calori consetetur sadipscing elitr, sed oli diam nonum atnei eior.'
//     },
//     {
//         image: require('../../../assets/imgs/song.jpg'),
//         title: 'Video_Title_Here',
//         date: '17th Sept, 2019 | 10:30 PM',
//         description: 'Lorem ipsum dolor sit amet, calori consetetur sadipscing elitr, sed oli diam nonum atnei eior.'
//     },
// ]

// dummy data for archive screen

// archiveContent=[
//     {
//         image: require('../../../assets/imgs/channel1.png'),
//         title: 'Video_Title_Here',
//         date: '17th Sept, 2019 | 10:30 PM',
//         description: 'Lorem ipsum dolor sit amet, calori consetetur sadipscing elitr, sed oli diam nonum atnei eior.'
//     },
//     {
//         image: require('../../../assets/imgs/channel1.png'),
//         title: 'Video_Title_Here',
//         date: '17th Sept, 2019 | 10:30 PM',
//         description: 'Lorem ipsum dolor sit amet, calori consetetur sadipscing elitr, sed oli diam nonum atnei eior.'
//     },
//     {
//         image: require('../../../assets/imgs/channel1.png'),
//         title: 'Video_Title_Here',
//         date: '17th Sept, 2019 | 10:30 PM',
//         description: 'Lorem ipsum dolor sit amet, calori consetetur sadipscing elitr, sed oli diam nonum atnei eior.'
//     },
//     {
//         image: require('../../../assets/imgs/channel1.png'),
//         title: 'Video_Title_Here',
//         date: '17th Sept, 2019 | 10:30 PM',
//         description: 'Lorem ipsum dolor sit amet, calori consetetur sadipscing elitr, sed oli diam nonum atnei eior.'
//     },
//     {
//         image: require('../../../assets/imgs/channel1.png'),
//         title: 'Video_Title_Here',
//         date: '17th Sept, 2019 | 10:30 PM',
//         description: 'Lorem ipsum dolor sit amet, calori consetetur sadipscing elitr, sed oli diam nonum atnei eior.'
//     },
// ]

class Videos extends Component {
    constructor(props){
        super(props)
    }

    popularContent = () => {

        const video = this.props.videos

        return video.map((video, i) => {
            const message = 'This is the description'
            return (
                <TouchableHighlight key={i} underlayColor='#212121' onPress={() => this.props.navigation.navigate('PlayVideo')}>
                    <View style={styles.popularContainer}>
                        <View style={styles.innerContainer}>
                            {/* <Video source={{url:video.video_url}} style={styles.videoImage} /> */}
                            <Image source={require('../../../assets/imgs/video.png')} style={styles.playIcon} />
                        </View>
                        <View style={styles.descripContainer}>
                            <Text style={styles.title}>{video.name}</Text>
                            {/* <Text style={styles.title}>{video.title}</Text>
                            <Text style={styles.date}>{video.date}</Text>
                            <Text style={styles.description} >{message}</Text> */}
                            <Text style={styles.description} >{message}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            )
        })
    }

    render() {
        return (

            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    {this.popularContent()}
                </ScrollView>
            </View>

        );
    }
}

export default withNavigation( Videos);