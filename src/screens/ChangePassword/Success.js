import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './Success.style';

class Success extends Component {

    componentDidMount(){
       
        
         this.props.navigation.addListener(
            'willFocus',
            () => {
            this.timeoutHandle = setTimeout(()=>{
                this.props.navigation.navigate('Settings') 
            }, 1000)
            }
          );
          
    }

    componentWillUnmount(){
        clearTimeout(this.timeoutHandle); 
        willFocusSubscription.remove();
    }9643339747

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.circle1}>
                    <View style={styles.circle2}>
                        <View style={styles.circle3}>
                            <View style={styles.circle4}></View>
                        </View>
                    </View>
                </View>
                <Text style={styles.text}>Password Changed Succesfully</Text>
            </View>
        );
    }
}


export default Success;