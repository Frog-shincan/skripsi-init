import React, {useState,useEffect} from 'react';
import {REACT_APP_HOST_API} from "@env"
import {StyleSheet, View, TouchableOpacity, Text, ScrollView, Button} from 'react-native';
import HTML from "react-native-render-html";
import axios from 'axios';

function ReadingPage({ navigation }) {
  const [readingCategories, setReadingCategories] = useState([]);

  useEffect(() => {
    axios.get(`${REACT_APP_HOST_API}/Reading-categories`)
    .then((res) => setReadingCategories(res.data));
  },[]);

  return(
    <View style={styles.container}>
      <ScrollView style={{textAlign: 'center', display: 'flex'}}>
        {
          readingCategories.map((readingCategory) => {
            return (
            <TouchableOpacity
              style={styles.buttonStyle}
              key={readingCategory.id}
              onPress={() => navigation.navigate('ReadingContent', { part: readingCategory.part })}>
                <Text style={styles.textStyle}>{readingCategory.part}</Text>
            </TouchableOpacity>
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

export default ReadingPage;