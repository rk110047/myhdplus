import React, { Component } from 'react'
import {View,Text,StyleSheet,ScrollView,TouchableHighlight} from "react-native"
import BaseScreen from '../base/BaseScreen'
import VideoPlayerComponent from '../../components/VideoPlayerComponent'
import Carousal from '../../SharedComponent/HorizontalCarousal/Carousal'
import {connect} from 'react-redux';
import VideoListComponent from '../../components/VideoListComponent'
import {styles} from '../LiveTv/LiveTv.style';

 class VideoDetailsScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            videoData:{}
        }
    }
    componentDidMount(){
        this.setState({
            videoData:this.props.navigation.getParam("data")
        })
    }
    navbarList = () => {
        const {categories} = this.props;
        return (
          categories &&
          categories.map((nav, i) => {
            const navTextStyle =
              categories[i].status == true ? styles.activeNavText : styles.navText;
            const navbarStyle =
              categories[i].status == true ? styles.activeNavbar : styles.navbar;
            return (
              <TouchableHighlight
                key={i}
                underlayColor="#212121"
                onPress={() => this.props.navClickHandler(nav.id)}>
                <View style={navbarStyle}>
                  <Text style={navTextStyle}>{nav && nav.name}</Text>
                </View>
              </TouchableHighlight>
            );
          })
        );
      };

      sportsList = () => {
        const {categoryChannels} = this.props;
        return (
          categoryChannels &&
          categoryChannels.map((sport, i) => {
            return <VideoListComponent 
            onPressVideo={()=>{
                if(sport.id!==this.state.videoData.id){
                this.setState({videoData:sport})
                }
            }}
            data={sport} />;
          })
        );
      };
    render() {
        return (
            <BaseScreen logo={true} search={true}>

            <View style={{flex:1}}>
                <VideoPlayerComponent
                disableTimer={true}
                navigator={this.props.navigation}
                // disableBack={true}
                disableSeekbar={true}
                data={this.state.videoData}/>
            </View>
            <View style={{flex:2}}>
            <Text style={styles.titleText}>Popular channels</Text>

            <Carousal 
            onPressVideo={(sport)=>{
              if(sport.id!==this.state.videoData.id){
              this.setState({videoData:sport})
              }
          }}
            channels={this.props.channels} />
            {/* <View style={styles.navContainer}> */}
            <ScrollView
            contentContainerStyle={styles.navContainer}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {this.navbarList()}
            </ScrollView>
          {/* </View> */}
          <ScrollView>
            <View style={styles.sportList}>{this.sportsList()}</View>
          </ScrollView>
        
      
            </View>
            </BaseScreen>
        )
    }
}

const mapStateToProps = state => ({
    channels: state.channels.channels,
    categories: state.channels.categories,
    categoryChannels: state.channels.channels.filter(
      item => item.category == state.channels.selectedCategoryId,
    ),
    selectedCategoryId: state.channels.selectedCategoryId,
  
  });
  const mapDispatchToProps = dispatch => {
    return {
      navClickHandler: id =>
        dispatch({type: 'CHANGE_LIVETV_NAVIGATION_STATUS', payload: id}),
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(VideoDetailsScreen);
  