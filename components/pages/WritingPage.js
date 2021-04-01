import React, {useState,useEffect} from 'react';
import {REACT_APP_HOST_API} from "@env"
import {StyleSheet, View, Text, Image, ScrollView, Button} from 'react-native';
import HTML from "react-native-render-html";
import axios from 'axios';

function WritingPage({ navigation }) {
  const [writingCourses, setWritingCourses] = useState([]);

  useEffect(() => {
    axios.get(`${REACT_APP_HOST_API}/Writing-courses`)
        .then((res) => setWritingCourses(res.data));
  },[]);

  return(
     <ScrollView style={{textAlign: 'center', display: 'flex'}}>
        <View style={styles.container}>
            {
              writingCourses.map((writingCourse) => {
                return (
                  <View key={writingCourse.id} style={styles.contentWrapper}>
                    <Image
                      style={styles.tinyLogo}
                      source={{
                        uri: `${REACT_APP_HOST_API}${writingCourse.content[0].url}`,
                      }}
                    />
                  </View>
              )
              })
            }
          <Button
            title="Back"
            style={styles.buttonStyle}
            onPress={() => navigation.goBack()}/>
        </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentWrapper: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#eaeaea',
    paddingRight: 10,
    paddingLeft: 10,
    color: 'red',
    borderRadius: 10,
    width: '100%',
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
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: '100%',
    height: 500
  },
});

export default WritingPage;