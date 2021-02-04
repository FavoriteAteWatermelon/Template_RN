import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator,TransitionPresets} from 'react-navigation-stack'
import TabNavigator from './src/pages/tabbar'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PageAll = createStackNavigator({
  Tab: {screen: TabNavigator} ,
  // HomeScreenDetail:{screen:HomeScreenDetail}

},
{
  // mode: 'modal',
  headerMode: 'none',
  
  // gestureEnabled:true,
  defaultNavigationOptions: {
    ...TransitionPresets.SlideFromRightIOS,
  }
})

export default createAppContainer(PageAll);