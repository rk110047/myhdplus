import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {styles} from './BaseScreen.style';
import Header from './Header';
import {withNavigation} from 'react-navigation';

class BaseScreen extends Component {
  render() {
    return (
      <>
        {!this.props.hideHeader && (
          <Header
            arrow={this.props.arrow}
            logo={this.props.logo}
            search={this.props.search}
            centerText={this.props.centerText}
          />
        )}
        <View style={styles.container}>{this.props.children}</View>
      </>
    );
  }
}

export default withNavigation(BaseScreen);
