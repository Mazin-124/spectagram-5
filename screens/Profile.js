import React, { Component } from "react";
import {  View,Text,StyleSheet,SafeAreaView,Platform,StatusBar,Image,Switch
} from "react-native";

 import firebase from "firebase";

export default class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isEnabled: false, 
      light_theme: true,
      profile_image: "",
      name: ""
    }
  }

 

  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile</Text>
      </View>
    );
  }
}
