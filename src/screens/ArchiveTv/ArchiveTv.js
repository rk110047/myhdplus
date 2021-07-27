import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableHighlight, Image} from 'react-native';
import BaseScreen from '../base/BaseScreen';
import {styles} from '../LiveTv/LiveTv.style';
import {connect} from 'react-redux';
import VideoListComponent from '../../components/VideoListComponent';
import { getkidsChannels, getkidsCategories } from '../../redux/action-creators/kids';

class ArchiveTv extends Component {
    componentDidMount(){
this.props.getChannels();
this.props.getCategories()
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
    console.log("hiiii1",categoryChannels)
    return (
      categoryChannels &&
      categoryChannels.map((sport, i) => {
        let is_adultCategoryArr=this.props.categories.filter((item)=>item.id==sport.category[0])
        // console.log("test", is_adultCategoryArr[0].is_adult)
        return (
          <VideoListComponent
            // is_adult={is_adultCategoryArr && is_adultCategoryArr[0].is_adult}
            data={sport}
            // radio={true}
          />
        );
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
              showsHorizontalScrollIndicator={false}>
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
  console.log("123321",state)
  return {
    categories: state.kids.kidsCategories,
    channels: state.kids.kidsChannels,
    categoryChannels: state.kids.kidsChannels.filter(
      item => item.category == state.kids.selectedCategoryId,
    ),
    selectedCategoryId: state.kids.selectedCategoryId,
  };
}
const mapDispatchToProps = dispatch => {
  return {
    getChannels:()=>dispatch(getkidsChannels()),
      getCategories:()=>dispatch(getkidsCategories()),
    // dispatching plain actions
    navClickHandler: id =>
      dispatch({type: 'CHANGE_KIDS_NAVIGATION_STATUS', payload: id}),
      
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ArchiveTv);
