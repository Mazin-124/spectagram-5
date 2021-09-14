import React from 'react';
import { Text, View, StyleSheet, SafeAreaView ,Platform,StatusBar,Image ,TouchableOpacity} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class PostCard extends React.Component{

      render() {
         
          return (
            <TouchableOpacity style={styles.container}
            onPress={()=>{
              this.props.navigation.navigate('StoryScreen',{story:this.props.story})
            }}>

            <View style={styles.container}>
              <View style={styles.cardContainer}>
                <Image
                  source={require("../assets/image_4.jpg")}
                  style={styles.postImage}
                />
    
            <View style={styles.titleContainer}>
                  <Text style={styles.postTitleText}>
                    {this.props.post.title}
                  </Text>
                  <Text style={styles.postAuthorText}>
                    {this.props.post.author}
                  </Text>
                  <Text style={styles.descriptionText}>
                    {this.props.post.caption}
                  </Text>
                </View>
                <View style={styles.actionContainer}>
                  <View style={styles.likeButton}>
                    <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                    <Text style={styles.likeText}>12k</Text>
                  </View>
                </View>
              </View>
            </View>
            </TouchableOpacity>
          );
        }
     
    }



const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    cardContainer: {
      margin: RFValue(13),
      backgroundColor: "#2f345d",
      borderRadius: RFValue(20)
    },
    postImage: {
      resizeMode: "contain",
      width: "50%",
      alignSelf: "center",
      height: RFValue(250)
    },
    titleContainer: {
      paddingLeft: RFValue(20),
      justifyContent: "center"
    },
    postTitleText: {
      fontSize: RFValue(25),
      fontFamily: "Bubblegum-Sans",
      color: "white"
    },
    postAuthorText: {
      fontSize: RFValue(18),
      fontFamily: "Bubblegum-Sans",
      color: "white"
    },
    descriptionText: {
      fontFamily: "Bubblegum-Sans",
      fontSize: 13,
      color: "white",
      paddingTop: RFValue(10)
    },
    actionContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: RFValue(10)
    },
    likeButton: {
      width: RFValue(160),
      height: RFValue(40),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#eb3948",
      borderRadius: RFValue(30)
    },
    likeText: {
      color: "white",
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(25),
      marginLeft: RFValue(5)
    }
  });
    