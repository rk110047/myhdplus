import {
  HomeScreenComponent,
  LiveTv,
  VideoOnDemand,
  ArchiveTv,
  Notifications,
  Support,
  Settings,
  About,
  Radio,
  VideoOnDemandChannelScreen,
} from '../screens';
import  { Logout } from '../screens/Settings/Logout';
import { TandC } from '../screens/About/TandC';
import {Dimensions} from 'react-native';
import CustomDrawer from './Drawer/CustomDrawer';

import {createAppContainer} from 'react-navigation';

import {createDrawerNavigator} from 'react-navigation-drawer';

import  RecordedVideo from '../screens/RecordedVideo/RecordedVideo'
import VideoScreen from '../SharedComponent/Screen/VideoScreen';
import ChangePassword from '../screens/ChangePassword/ChangePassword';
import ChangePassword2 from '../screens/ChangePassword/ChangePassword2';
import Search from '../screens/Search/Search';
import Success from '../screens/ChangePassword/Success';
import PlayVideo from '../screens/PlayVideo/PlayVideo';
import VideoDetailsScreen from '../screens/video/VideoDetailsScreen';
import VideoOnDemandDetailsScreen from '../screens/VideoOnDemand/videoOnDemandDetailsScreen';
import { ColorConst } from '../utils/Constants';

// const MainNavigator = createDrawerNavigator(
//     {
//         Drawer: createStackNavigator({
//             Home: HomeScreen
//         }, {
//             headerMode: 'none',
//             initialRouteName: 'Home'
//         }),
//     },
//     {
//         initialRouteName: 'Drawer',
//         unmountInactiveRoutes: true,
//     }
// )

const width = Dimensions.get('window').width;

const DrawerStack = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreenComponent,
    },
    LiveTv: {
      screen: LiveTv,
    },
    VideoOnDemand: {
      screen: VideoOnDemand,
    },
    ArchiveTv: {
      screen: ArchiveTv,
    },
    Radio: {
      screen: Radio,
    },
    RecordedVideo: {
      screen: RecordedVideo,
    },
    Notifications: {
      screen: Notifications,
    },
    Support: {
      screen: Support,
    },
    Settings: {
      screen: Settings,
    },
    Logout: {
      screen: Logout,
    },
    About: {
      screen: About,
    },
    TandC: {
      screen: TandC,
    },
    VideoScreen: {
      screen: VideoScreen,
    },
    ChangePassword: {
      screen: ChangePassword,
    },
    ChangePassword2: {
      screen: ChangePassword2,
    },
    Success: {
      screen: Success,
    },
    PlayVideo: {
      screen: PlayVideo,
    },
    VideoDetailsScreen: {
      screen: VideoDetailsScreen,
    },
    VideoOnDemandChannelScreen:{
      screen:VideoOnDemandChannelScreen
    },
    VideoOnDemandDetailsScreen:{
      screen:VideoOnDemandDetailsScreen
    },
    Search:{
      screen:Search
    },
  },
  {
    drawerBackgroundColor: '#212121',
    initialRouteName: 'HomeScreen',
    drawerWidth: width * 0.6,
    hideStatusBar: true,
    contentComponent: CustomDrawer,
    // overlayColor: '#FAF2C8',
    unmountInactiveRoutes: true,
    contentOptions: {
      activeTintColor: ColorConst.themeColor,
      // activeBackgroundColor: '#FFF2CB',
      inactiveTintColor: '#FFFFFF',
    },
  },
);

const MainNavigator = createAppContainer(DrawerStack);

export default MainNavigator;
