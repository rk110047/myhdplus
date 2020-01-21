import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from "./BaseScreen.style";

class BaseScreenComponent extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#f4511e',
            height: 0,
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Base screen</Text>
            </View>
        );
    }
}

export {
    BaseScreenComponent as BaseScreen
}


