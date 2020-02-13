import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Image, Alert} from 'react-native';
import {styles} from '../screens/LiveTv/LiveTv.style';
import {withNavigation} from 'react-navigation';
import Dialog from 'react-native-dialog';
function VideoListComponent(props) {
  const [dialogVisible, setdialogVisible] = useState(false);
  const [password, setPassword] = useState('');
  const {is_adult, data, image} = props;
  const onVideoClick = () => {
    if (is_adult) {
      setdialogVisible(true);
    } else {
      props.onPressVideo
        ? props.onPressVideo
        : props.navigation.navigate('VideoDetailsScreen', {data});
    }
  };
  const handleConfirm = () => {
    setdialogVisible(false);
    if (password !== '6666') {
      Alert.alert('GiFibre','Incorrect Password');
    } else {
      props.onPressVideo
        ? props.onPressVideo
        : props.navigation.navigate('VideoDetailsScreen', {data});
    }
  };
  const handleCancel=()=>{
    setdialogVisible(false);
  
  }
  return (
    <>
      <Dialog.Container
        contentStyle={{backgroundColor: '#bfbfbf'}}
        visible={dialogVisible}>
        <Dialog.Title>Password</Dialog.Title>
        <Dialog.Description>
          This is locked content. Do you want to access this?.
        </Dialog.Description>
        <Dialog.Input
          wrapperStyle={{backgroundColor: 'white', borderRadius: 15,paddingLeft:20}}
          onChangeText={text => setPassword(text)}
          placeholder="Enter your password"
          keyboardType='number-pad'
          maxLength={4}
        />
        <Dialog.Button label="Ok" onPress={handleConfirm} />
        <Dialog.Button label="Cancel" onPress={handleCancel}/>

      </Dialog.Container>
      <TouchableOpacity
        key={data.id}
        underlayColor="#212121"
        onPress={() => onVideoClick()}>
        <View style={styles.sportContainer}>
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
        </View>
      </TouchableOpacity>
    </>
  );
}
export default withNavigation(VideoListComponent);
