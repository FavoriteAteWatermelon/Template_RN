import * as React from 'react';
import {SafeAreaView,StatusBar, Animated,Button, View, Text , TextInput,Dimensions ,TouchableOpacity,Alert,StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Home extends React.Component {
  constructor (props) {
    super(props)
   
  }
  // navigate  = this.props.navigation.navigate

  render() {
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#ffffff',border: 0 }}>
      <TouchableOpacity onPress={() =>this.props.navigation.navigate("Login")} >
        <View style={{ width: 50,height:50, backgroundColor: 'red'}}>
        <FontAwesome name="home" size={20} color="#4F8EF7" />
          <Text >Home</Text>
        </View>
      </TouchableOpacity>
      </View>


    )
  }

}