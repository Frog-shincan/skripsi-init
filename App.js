import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/pages/HomePage';
import KnowLedgePage from './components/pages/KnowLedgePage';
import AboutPage from './components/pages/AboutPage';
import HelpPage from './components/pages/HelpPage';
import ReadingPage from './components/pages/ReadingPage';
import ReadingContent from './components/pages/ReadingContent';
import WritingPage from './components/pages/WritingPage';
import ListeningPage from './components/pages/ListeningPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage}/>
        <Stack.Screen name="KnowLedgePage" component={KnowLedgePage}/>
        <Stack.Screen name="AboutPage" component={AboutPage}/>
        <Stack.Screen name="HelpPage" component={HelpPage}/>
        <Stack.Screen name="ReadingPage" component={ReadingPage}/>
        <Stack.Screen name="ReadingContent" component={ReadingContent} />
        <Stack.Screen name="WritingPage" component={WritingPage} />
        <Stack.Screen name="ListeningPage" component={ListeningPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;