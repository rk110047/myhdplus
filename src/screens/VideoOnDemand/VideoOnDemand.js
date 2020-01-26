import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ImageBackground, Dimensions } from 'react-native';
import BaseScreen from '../base/BaseScreen'
import { styles } from './VideoOnDemand.style';
import { ScrollView } from 'react-native-gesture-handler';


const categories = [{ name: 'Category1' }, { name: 'Category2' }, { name: 'Category3' }, { name: 'Category4' }]

class VideoOnDemand extends Component {

    onPressHandler = () => {
        this.props.navigation.navigate('VideoScreen', { screen: 'VideoOnDemand' })

    }
    renderData = () => {
        return categories.map((category, i) => {
            return (
                    <View style={styles.categoryContainer}>
                        <View style={styles.category}>
                            <ImageBackground
                                source={require('../../../assets/imgs/maxresdefault.jpg')}
                                style={styles.backgroundImage}
                                imageStyle={{ borderRadius: 10, }}
                                resizeMode='cover'
                            >
                                <Text style={styles.categoryText}>{category.name}</Text>
                            </ImageBackground>
                        </View>
                    </View>
            )
        })
    }

    render() {
        return (
            <BaseScreen logo search>
                <View style={styles.container}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {this.renderData()}
                    </ScrollView>
                </View>
            </BaseScreen>
        );
    }
}


export { VideoOnDemand };