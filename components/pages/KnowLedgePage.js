import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, ScrollView, Button} from 'react-native';

function KnowLedgePage({ navigation }) {
  return(
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonStyle}>
        <Text>This is Knowledge Page</Text>
      </TouchableOpacity>
      <Button
        title="ReadingPage"
        onPress={() => navigation.navigate('ReadingPage', { name: 'ReadingPage' })}/>
      <Button
        title="WritingPage"
        onPress={() => navigation.navigate('WritingPage', { name: 'WritingPage' })}/>
      <Button
        title="ListeningPage"
        onPress={() => navigation.navigate('ListeningPage', { name: 'ListeningPage' })}/>
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

export default KnowLedgePage;