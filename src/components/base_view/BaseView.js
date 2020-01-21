import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigation} from 'react-navigation'
import {styles} from "./BaseView.style";

class BaseViewComponent extends Component {
    static navigationOptions = {
        // title: 'Base screen',
        headerStyle: {
            backgroundColor: '#f4511e',
            height: 0,
        },
    };

    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        );
    }
}

export {
    BaseViewComponent as BaseView
}


