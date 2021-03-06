import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
import styles from './CustomDrawer.style';
import { ColorConst } from '../../utils/Constants';


const List = [
    {
        image: require('../../../assets/imgs/home.png'),
        name: 'Home',
        screen:'HomeScreen'
    }, {
        image: require('../../../assets/imgs/liveTv.png'),
        name: 'Live Tv',
        screen:'LiveTv'
    }, 
    // {
    //     image: require('../../../assets/imgs/videoOnDemand.png'),
    //     name: 'Video On Demand',
    //     screen:'VideoOnDemand'
    // }, 
    {
        image: require('../../../assets/imgs/archiveTv.png'),
        name: 'Kids',
        screen:'ArchiveTv'
    }, 
    {
        image: require('../../../assets/imgs/radio.png'),
        name: 'Radio',
        screen:'Radio'
    }, 
    // {
    //     image: require('../../../assets/imgs/recordedVideo.png'),
    //     name: 'Recorded Video',
    //     screen:'RecordedVideo'
    // }, 
    // {
    //     image: require('../../../assets/imgs/notifications.png'),
    //     name: 'Notifications',
    //     screen:'Notifications'
    // },
    //  {
    //     image: require('../../../assets/imgs/support.png'),
    //     name: 'Support',
    //     screen:'Support'
    // }, 
    {
        image: require('../../../assets/imgs/settings.png'),
        name: 'Settings',
        screen:'Settings'
    }, 
    {
        image: require('../../../assets/imgs/about.png'),
        name: 'About',
        screen:'About'
    },
    {
        image: require('../../../assets/imgs/videoOnDemand.png'),
        name: 'Logout',
        screen:'Logout'
    }, 
]
export default class CustomDrawer extends Component {

    state = {
        active: []
    }

    componentDidMount = () => {
        var active = []
        for (let i = 0; i <= List.length; i++) {
            active.push("false")
        }
        this.setState({ active })
    }

    // On click the Drawer List items 

    clickHandler = (index,screen) => {
        var active = this.state.active
        for (let k = 0; k <= List.length; k++) {
            if (active[k] === 'true') {
                active[k] = 'false'
            }
        }
        for (let i = 0; i <= List.length; i++) {
            if (i === index) {
                if (active[i] == 'false') {
                    active[i] = 'true'
                    this.props.navigation.closeDrawer();
                    this.props.navigation.navigate(screen)
                } else  {
                    active[i] = 'false'
                }
            }
        }
        this.setState({ active })
     
    }

    renderData = () => {

        return List.map((list, i) => {

            const containerStyle = this.state.active[i] === 'true' ? [styles.innerContainer, styles.activeContainer] : styles.innerContainer;
            const imageStyle = this.state.active[i] === 'true' ? styles.activeImage : styles.inactiveImage;
            const textStyle = this.state.active[i] === 'true' ? [styles.listName, styles.activeListName] : styles.listName;

            return (
                <TouchableHighlight key={i} 
                onPress={() => this.clickHandler(i,list.screen)} underlayColor={ColorConst.textColor}>
                    <View style={containerStyle}>
                        <Image source={list.image} style={imageStyle} resizeMode='contain' />
                        <Text style={textStyle}>{list.name}</Text>
                    </View>
                </TouchableHighlight>
            )
        })
    }

    render() {
        return (
                <ScrollView style={{backgroundColor:"#0D2434"}}>
                    <View style={[styles.logoContainer]}>
                        <Image source={require('../../../assets/imgs/gibstat.jpeg')} style={styles.logo}></Image>
                    </View>
                    {this.renderData()}
                </ScrollView>
        );
    }
}

