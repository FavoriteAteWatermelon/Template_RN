import * as React from 'react';
import {SafeAreaView,StatusBar, Animated,Button, View, Text , TextInput,Dimensions ,TouchableOpacity,Alert,StyleSheet} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from './home'
import My from './my'
import Player from './player'
import Video from './video'

export default TabNavigator = createBottomTabNavigator({
  
  首页: Home,
  西瓜视频: Video,
  放映厅: Player,
  我的: My,
},
{


  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === '首页') {
        iconName = 'home'
      } else if (routeName === '西瓜视频') {
        iconName = 'play'
      } else if (routeName === '放映厅') {
        iconName = 'video-camera'
      } else if (routeName === '我的'){
        iconName = 'user'
      }
      return <FontAwesome name={iconName} size={20} color={tintColor} />;
    },
  }),

  tabBarOptions: {
    style:{
        // Remove border top on both android & ios
        borderTopWidth: 0,
        borderTopColor: "transparent",
        
        elevation: 0,
        shadowColor : '#5bc4ff',
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
            // backgroundColor:
    },
  
    activeTintColor: '#EA384D',  // 选中项的颜色
    inactiveTintColor: '#909399', // 未选中项的颜色
    // tabStyle:{
   
    // elevation:0, 
    // shadowOffset:{
    //   width:0,
    //   height:0
    // },
    // //  borderTopColor: "#",
    // // borderWidth:0,
    //  backgroundColor: "#efefee"
    // },
    

  },
}
);

