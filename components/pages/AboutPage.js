import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, ScrollView, Button} from 'react-native';

function AboutPage({ navigation }) {
  return(
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonStyle}>
        <Text>This is About Page</Text>
      </TouchableOpacity>
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
});

export default AboutPage;