import React from 'react';
import {StyleSheet, View, TouchableOpacity, ImageBackground, Text, ScrollView, Button} from 'react-native';

const image = { uri: '../../assets/img/bg-01.jpg' };

function HomePage({ navigation }) {
  return(
    <View style={styles.container}>
      <Button
        title="KnowLedgePage"
        onPress={() => navigation.navigate('KnowLedgePage', { name: 'KnowLedgePage' })}
        style={styles.btn01}/>
      <Button
        title="AboutPage"
        onPress={() => navigation.navigate('AboutPage', { name: 'AboutPage' })}/>
      <Button
        title="HelpPage"
        onPress={() => navigation.navigate('HelpPage', { name: 'HelpPage' })}/>
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
    flex: 1,
  },
  img: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default HomePage;