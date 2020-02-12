import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableHighlight, Image} from 'react-native';
import BaseScreen from '../base/BaseScreen';
import {styles} from './LiveTv.style';
import {connect} from 'react-redux';
import VideoListComponent from '../../components/VideoListComponent';

class LiveTv extends Component {
  constructor(props) {
    super(props);
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
        return <VideoListComponent data={sport} />;
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
    categories: state.channels.categories,
    channels: state.channels.channels,
    categoryChannels: state.channels.channels.filter(
      item => item.category[0] == state.channels.selectedCategoryId,
    ),
    selectedCategoryId: state.channels.selectedCategoryId,
  };
}
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    navClickHandler: id =>
      dispatch({type: 'CHANGE_LIVETV_NAVIGATION_STATUS', payload: id}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LiveTv);
