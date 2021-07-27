import React, { Component } from 'react';
import { View, Text, TouchableHighlight,ScrollView, ImageBackground, Dimensions, FlatList,TouchableOpacity, Alert } from 'react-native';
import BaseScreen from '../base/BaseScreen'
import { styles } from '../LiveTv/LiveTv.style';
import {connect} from 'react-redux';
import VideoListComponent from '../../components/VideoListComponent';
import { getvodChannels, getvodCategories } from '../../redux/action-creators/vod';
import Dialog from 'react-native-dialog';

const {width,height}=Dimensions.get("window")

class VideoOnDemand extends Component {
  constructor(props){
    super(props);
    this.state={
      dialogVisible:false,
      password:"",
      channels:[],
      category:[]
    }
  }
    componentDidMount(){
        this.props.getChannels();
        this.props.getCategories();
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

      openCategoryChannel=(item)=>{
        let channels=this.props.categoryChannels.filter(
          data => data.category[0] == item.id,
        )
        console.log({item})
        if(item.is_adult){
          this.setState({dialogVisible:true,channels,category:item})
        }
        else
        this.props.navigation.navigate("VideoOnDemandChannelScreen",{channels,category:item})
      }
      handleCancel=()=>{
        this.setState({
        dialogVisible:false
        })
      }
      handleConfirm=()=>{
        this.setState({dialogVisible:false})
        if (this.state.password !== '6666') {
          Alert.alert('Gibsat', 'Incorrect Password');
        }
        else{
          this.props.navigation.navigate("VideoOnDemandChannelScreen",{channels:this.state.channels,category:this.state.category})
        }
      }
    render() {
      console.log("121",this.props.categories)
        return (
            <BaseScreen logo={true} search={true}>
               <Dialog.Container
        contentStyle={{backgroundColor: '#bfbfbf'}}
        visible={this.state.dialogVisible}>
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
          onChangeText={text => this.setState({password:text})}
          placeholder="Enter your password"
          keyboardType="number-pad"
          maxLength={4}
        />
        <Dialog.Button label="Ok" onPress={this.handleConfirm} />
        <Dialog.Button label="Cancel" onPress={this.handleCancel} />
      </Dialog.Container>
            <View style={styles.container}>
              <FlatList
              data={this.props.categories}
              renderItem={(data)=>{
                const {item}=data
                return(<TouchableOpacity
                onPress={()=>this.openCategoryChannel(item)}
                >
                  <ImageBackground
                  resizeMode='stretch'
                  style={{width:width*0.85,height:height*0.25,marginVertical:10, elevation:3}}
                  source={{uri:item.background_image}}
                  />
                </TouchableOpacity>)
              }}
              />
            </View>
          </BaseScreen>
        );
    }
}

function mapStateToProps(state) {
    return {
      categories: state.vod.vodCategories,
      channels: state.vod.vodChannels,
      categoryChannels: state.vod.vodChannels,
      selectedCategoryId: state.vod.selectedCategoryId,
    };
  }
  const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      navClickHandler: id =>
        dispatch({type: 'CHANGE_VOD_NAVIGATION_STATUS', payload: id}),
        getChannels:()=>dispatch(getvodChannels()),
        getCategories:()=>dispatch(getvodCategories())
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(VideoOnDemand);
