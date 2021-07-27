import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableHighlight, Image, TextInput } from 'react-native';
import BaseScreen from '../base/BaseScreen';
import { FlatList } from 'react-native-gesture-handler';
import VideoListComponent from '../../components/VideoListComponent';
import { connect } from 'react-redux';
import { styles } from './Search.style'
import searchImg from '../../../assets/imgs/search.png';
import AsyncStorage from '@react-native-community/async-storage';


class Search extends Component {


  state = {
    data: {
        search: ''
    },
    Videos_1:[]
}


  onChangeText = (name, value) => {
    this.setState(prevState => ({
        data: {
            ...prevState.data,
            [name]: value
        }
    }))
}

submitsearch = () => {
  console.log(this.state.data.search)
  AsyncStorage.getItem('api_token').then(async value => {
    console.log(value)
        fetch('http://196.29.238.110/api/v1/livetv/channels/?name='+this.state.data.search, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + value,
          'Content-Type': 'application/json'
        }
      }).then((response) => response.json())
      .then((res) => {
           console.log(res)
           this.setState({Videos_1:res})
            })
          })
}


  render() {
    const textStyle = [styles.textInput, { backgroundColor: '#E0E0E0', fontSize:22 }]

    return (
      <BaseScreen centerText='Search' >
        <View style={{width:"100%", justifyContent:"space-around", alignItems:"center", flexDirection:"row"}}>
           <TextInput
            value={this.state.data.search}
                        placeholder='Search'
                        style={textStyle}
                        onChangeText={(text) => this.onChangeText('search', text)}
                        placeholderTextColor='#212121'
                    />
                     <TouchableHighlight underlayColor='#212121' onPress={() => this.submitsearch()}>
                <Image source={searchImg} style={styles.image}  />
            </TouchableHighlight>
        </View>
        <View style={{width:"90%", height:"100%", paddingHorizontal:"2.5%"}}> 
    <FlatList
              data={this.state.Videos_1}
              renderItem={({item}) => <VideoListComponent 
              data={item} />}
            />
            </View>
      </BaseScreen>
    );
  }
}
// const mapStateToProps = state => ({
//    archVideos: state.channels.archVideos,
// });
export default Search;

