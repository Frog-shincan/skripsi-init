import React, {useState,useEffect} from 'react';
import {REACT_APP_HOST_API} from "@env"
import {StyleSheet, View, TouchableOpacity, Text, ScrollView, Button} from 'react-native';
import HTML from "react-native-render-html";
import axios from 'axios';

function ReadingContent({ navigation,route }) {
  const [readingCourses, setReadingCourses] = useState([]);

  useEffect(() => {
    axios.get(`${REACT_APP_HOST_API}/Reading-courses?part=${route.params.part}`)
        .then((res) => setReadingCourses(res.data));
  },[]);

  return(
    <View style={styles.container}>
     <ScrollView style={{textAlign: 'center', display: 'flex'}}>
        {
          readingCourses.map((readingCourse) => {
            return (
              <View key={readingCourse.id} style={styles.contentWrapper} >
                <HTML source={{ html: readingCourse.content }} />
              </View>
          )
          })
        }
      </ScrollView>
      <Button
        title="Back"
        onPress={() => navigation.goBack()}/>
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
  textStyle: {
    textTransform: 'capitalize',
  },
});

export default ReadingContent;