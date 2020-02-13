import {
  HomeScreenComponent,
  LiveTv,
  VideoOnDemand,
  ArchiveTv,
  RecordedVideo,
  Notifications,
  Support,
  Settings,
  About,
  Radio,
} from '../screens';
import {Dimensions} from 'react-native';
import CustomDrawer from './Drawer/CustomDrawer';

import {createAppContainer} from 'react-navigation';

import {createDrawerNavigator} from 'react-navigation-drawer';

import VideoScreen from '../SharedComponent/Screen/VideoScreen';
import ChangePassword from '../screens/ChangePassword/ChangePassword';
import ChangePassword2 from '../screens/ChangePassword/ChangePassword2';
import Success from '../screens/ChangePassword/Success';
import PlayVideo from '../screens/PlayVideo/PlayVideo';
import VideoDetailsScreen from '../screens/video/VideoDetailsScreen';

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
    About: {
      screen: About,
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
      activeTintColor: '#FFC200',
      // activeBackgroundColor: '#FFF2CB',
      inactiveTintColor: '#FFFFFF',
    },
  },
);

const MainNavigator = createAppContainer(DrawerStack);

export default MainNavigator;
