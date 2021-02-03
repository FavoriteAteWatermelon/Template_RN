import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator,TransitionPresets} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text onPress={()=>{
          this.props.navigation.navigate('HomeScreenDetail')
        }}>Home!</Text>
      </View>
    );
  }
}


class HomeScreenDetail extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>HomeScreenDetail!</Text>
      </View>
    );
  }
}


class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});

const PageAll = createStackNavigator({
  Tab: {screen: TabNavigator} ,
  HomeScreenDetail:{screen:HomeScreenDetail}

},
{
  // mode: 'modal',
  // headerMode: 'none',
  // gestureEnabled:true,
  defaultNavigationOptions: {
    ...TransitionPresets.SlideFromRightIOS,
  }
})

export default createAppContainer(PageAll);