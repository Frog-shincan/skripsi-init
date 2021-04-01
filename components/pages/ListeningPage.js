import React, {useState,useEffect} from 'react';
import {REACT_APP_HOST_API} from "@env"
import {StyleSheet, View, TouchableOpacity, Text, ScrollView, Button, Image} from 'react-native';
import {WebView} from 'react-native-webview';
import SoundPlayer from 'react-native-sound-player'
import HTML from "react-native-render-html";
import axios from 'axios';

function ListeningPage({ navigation }) {
  const [listeningCourses, setListeningCourses] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.1.7:1337/Listening-courses')
    .then((res) => setListeningCourses(res.data));
  },[]);

  return(
    <View style={styles.container}>
      {
        listeningCourses.map((listeningCourse) => {
          console.log(`${REACT_APP_HOST_API}${listeningCourse.content[0].url}`)
          return (
                  <WebView
                      style={styles.wrapper}
                      javaScriptEnabled={true}
                      domStorageEnabled={true}
                      key={listeningCourse.id}
                      source={{ html: `
                        <img src="`+`${REACT_APP_HOST_API}`+`${listeningCourse.cover[0].url}`+`" alt="`+`${listeningCourse.cover[0].name}`+`" width="100%" height="600" style="border: 5px solid white; border-radius: 20px">
                        <audio style="width: 100%; margin-top: 20px;" controls>
                          <source src="`+`${REACT_APP_HOST_API}`+`${listeningCourse.content[0].url}`+`"type="audio/mpeg">
                        </audio>`}}/>
          )
        })
      }
      <Button
        title="Back"
        onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
    backgroundColor: 'black',
  },
  wrapper: {
    backgroundColor: 'black',
  },
  buttonAudio: {
    width: '100%',
  },
  contentWrapper: {
    marginTop: 10,
    backgroundColor: '#eaeaea',
    padding: 10,
    color: 'red',
    borderRadius: 10,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});

export default ListeningPage;