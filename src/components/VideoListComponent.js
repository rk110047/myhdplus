import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, Image, Alert, TouchableHighlight, Dimensions } from 'react-native';
import { styles } from '../screens/LiveTv/LiveTv.style';
import { withNavigation } from 'react-navigation';
import Dialog from 'react-native-dialog';
import Favourites from './common/Favourites';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import deleteicon from '../../assets/imgs/deleteicon.png';
import { addToFavourites, removeFromFavourites, getRecordVideos } from "../redux/action-creators/home";
import moment from "moment";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


function VideoListComponent(props) {
  const [dialogVisible, setdialogVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [favouritesList, setFavouritesList] = useState([]);



  useEffect(() => {
    AsyncStorage.getItem('favourites').then(async value => {
      if (value) setFavouritesList(JSON.parse(value));
    });
  }, []);
  const { is_adult, data, image, screen, radio } = props;
  const onVideoClick = () => {
    console.log(is_adult)
    if (is_adult) {
      setdialogVisible(true);
    } else {
      props.onPressVideo
        ? props.onPressVideo()
        : props.navigation.navigate(
          screen == 'videoOnDemandChannel'
            ? 'VideoOnDemandDetailsScreen'
            : 'VideoDetailsScreen',
          { data, radio },
        );
    }
  };
  const handleConfirm = () => {
    setdialogVisible(false);
    if (password !== '6666') {
      Alert.alert('GiFibre', 'Incorrect Password');
    } else {
      props.onPressVideo
        ? props.onPressVideo
        : props.navigation.navigate(
          screen == 'videoOnDemandChannel'
            ? 'VideoOnDemandDetailsScreen'
            : 'VideoDetailsScreen',
          { data },
        );
    }
  };
  const handleCancel = () => {
    setdialogVisible(false);
  };

  const deleterecording = (id) => {
    console.log(id)
    AsyncStorage.getItem('api_token').then(async value => {
      // Toast.show('Recording delete', Toast.LONG);
      fetch('http://144.91.118.174/api/v1/pvr/' + id, {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + value,
          'Content-Type': 'application/json'
        },
      }).then((response) => props.getRecordVideos())

    });
  }
  console.log(data,"121212")

  return (
    <>
      <Dialog.Container
        contentStyle={{ backgroundColor: '#bfbfbf' }}
        visible={dialogVisible}>
        <Dialog.Title>Password</Dialog.Title>
        <Dialog.Description>
          This is locked content. Do you want to access this?.
        </Dialog.Description>
        <Dialog.Input
          wrapperStyle={{
            backgroundColor: 'white',
            borderRadius: 15,
            paddingLeft: 20,
          }}
          onChangeText={text => setPassword(text)}
          placeholder="Enter your password"
          keyboardType="number-pad"
          maxLength={4}
        />
        <Dialog.Button label="Ok" onPress={handleConfirm} />
        <Dialog.Button label="Cancel" onPress={handleCancel} />
      </Dialog.Container>

      <View style={[{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }, props.containerStyle]}>
        <TouchableOpacity
          key={data.id}
          style={[styles.sportContainer]}
          underlayColor="#212121"
          onPress={() => onVideoClick()}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: image ? image : data.channel_image }}
              resizeMode="contain"
              onError={(error) => console.log({ error })}
              style={[styles.sportImage, props.imageStyle]}
            />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.titleText}>{data.name || data.channel_name}</Text>
            <Text numberOfLines={3} ellipsizeMode={'tail'} style={styles.descriptionText}>{data.description || moment(data.created_at).utc().format("DD-MM-YYYY")}</Text>
            {data.channel_name ? <Text numberOfLines={3} ellipsizeMode={'tail'} style={styles.descriptionText}>{moment(data.created_at).utc().format("HH:MM A")}</Text> : null}
          </View>
        </TouchableOpacity>
        {/* {data.channel_name ?
          <TouchableHighlight underlayColor='#212121' onPress={() => deleterecording(data.id)}>
            <Image source={deleteicon} style={{
              resizeMode: 'contain',
              height: height * 4 / 100,
              width: width * 8 / 100,
              marginRight: 10
            }} />
          </TouchableHighlight>
          :
          <Favourites
            isFavourite={
              props.favouritesList && props.favouritesList.length > 0 &&
              props.favouritesList.findIndex(item => item.id == data.id)
            }
            addToFavourites={() => props.addToFavourites(data)}
            removeFromFavourites={() => props.removeFromFavourites(data)}
          />
        } */}
      </View>
    </>
  );
}
const videoListWithNav = withNavigation(VideoListComponent)
const mapStateToProps = state => ({
  favouritesList: state.channels.favouriteChannels,
  recordVideos: state.channels.recordVideos
});
export default connect(mapStateToProps, { addToFavourites, removeFromFavourites, getRecordVideos })(videoListWithNav)
