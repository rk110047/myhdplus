import React, {useState,useEffect} from 'react';
import {TouchableOpacity, View, Text, Image, Alert} from 'react-native';
import {styles} from '../screens/LiveTv/LiveTv.style';
import {withNavigation} from 'react-navigation';
import Dialog from 'react-native-dialog';
import Favourites from './common/Favourites';
import AsyncStorage from '@react-native-community/async-storage';
function VideoListComponent(props) {
  const [dialogVisible, setdialogVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [favouritesList,setFavouritesList]=useState([])
 
  useEffect(() => {
     AsyncStorage.getItem('favourites').then(async value => {
    if (value) setFavouritesList(JSON.parse(value));
    console.log({favouritesList})
  });
  }, [])
  const {is_adult, data, image, screen} = props;
  const onVideoClick = () => {
    if (is_adult) {
      setdialogVisible(true);
    } else {
      props.onPressVideo
        ? props.onPressVideo
        : props.navigation.navigate(
            screen == 'videoOnDemandChannel'
              ? 'VideoOnDemandDetailsScreen'
              : 'VideoDetailsScreen',
            {data},
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
            {data},
          );
    }
  };
  const handleCancel = () => {
    setdialogVisible(false);
  };
  const addToFavourite = async () => {
    await setFavouritesList(favouritesList.push(data));
    AsyncStorage.setItem('favourites', JSON.stringify(favouritesList));
  };
  const removeFromFavourites = async () => {
    console.log({favouritesList});

    let index = favouritesList && favouritesList.findIndex(item => item.id == data.id);
    if(index!==-1){
      console.log("heeeee")
      setFavouritesList(favouritesList.splice(index, 1))
      console.log("heeeee1111",favouritesList)
      AsyncStorage.setItem('favourites', JSON.stringify(favouritesList));
    }
    console.log({favouritesList});
  };
  return (
    <>
    {console.log("hello")}
      <Dialog.Container
        contentStyle={{backgroundColor: '#bfbfbf'}}
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

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          key={data.id}
          style={[styles.sportContainer]}
          underlayColor="#212121"
          onPress={() => onVideoClick()}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: image ? image : data.channel_image}}
              resizeMode="stretch"
              style={styles.sportImage}
            />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.titleText}>{data.name}</Text>
            <Text style={styles.descriptionText}>{data.description}</Text>
          </View>
        </TouchableOpacity>
        {console.log("favouritesList1111",favouritesList)}
        {/* <Favourites
          isFavourite={
            favouritesList &&
            favouritesList.findIndex(item => item.id == data.id)
          }
          addToFavourites={addToFavourite}
          removeFromFavourites={removeFromFavourites}
        /> */}
      </View>
    </>
  );
}
export default withNavigation(VideoListComponent);
