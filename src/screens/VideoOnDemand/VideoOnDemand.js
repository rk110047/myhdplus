import React, { Component } from 'react';
import { View, Text, TouchableHighlight,ScrollView, ImageBackground, Dimensions } from 'react-native';
import BaseScreen from '../base/BaseScreen'
import { styles } from '../LiveTv/LiveTv.style';
import {connect} from 'react-redux';
import VideoListComponent from '../../components/VideoListComponent';
import { getvodChannels, getvodCategories } from '../../redux/action-creators/vod';


class VideoOnDemand extends Component {
    componentDidMount(){
        this.props.getChannels();
        this.props.getCategories();
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
                underlayColor="#0d8ad2"
                onPress={() => this.props.navClickHandler(nav.id)}
                >
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
            let is_adultCategoryArr=this.props.categories.filter((item)=>item.id==sport.category[0])
             return <VideoListComponent 
             image={sport.content_image}
            is_adult={is_adultCategoryArr && is_adultCategoryArr[0].is_adult}
            data={sport} />;
          })
        );
      };

    render() {
        return (
            <BaseScreen logo={true} search={true}>
            <View style={styles.container}>
              <View style={[styles.navContainer]}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  >
                  {this.navbarList()}
                </ScrollView>
              </View>
              <ScrollView>
                <View style={styles.sportList}>{this.sportsList()}</View>
              </ScrollView>
            </View>
          </BaseScreen>
        );
    }
}

function mapStateToProps(state) {
    return {
      categories: state.vod.vodCategories,
      channels: state.vod.vodChannels,
      categoryChannels: state.vod.vodChannels.filter(
        item => item.category[0] == state.vod.selectedCategoryId,
      ),
      selectedCategoryId: state.vod.selectedCategoryId,
    };
  }
  const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      navClickHandler: id =>
        dispatch({type: 'CHANGE_VOD_NAVIGATION_STATUS', payload: id}),
        getChannels:()=>dispatch(getvodChannels()),
        getCategories:()=>dispatch(getvodCategories())
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(VideoOnDemand);
