import * as React from 'react';
import {SafeAreaView,StatusBar, Animated,Button, View, Text , TextInput,Dimensions ,TouchableOpacity,Alert,StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class Video extends React.Component {
  constructor (props) {
    super(props)
   
  }
  // navigate  = this.props.navigation.navigate

  render() {
    
    return (
      <TouchableOpacity onPress={() =>this.props.navigation.navigate("Login")} >
        <View style={{ width: 50,height:50, backgroundColor: 'red'}}>
          <Text >Video</Text>
        </View>
      </TouchableOpacity>

    )
  }

}