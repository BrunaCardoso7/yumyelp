import * as React from 'react';
import { View } from 'react-native';
import Header from './src/Components/Header';
import { NavigationContainer } from '@react-navigation/native';
import TabNagation from './src/Router';
import Register from './src/Screens/Register';
export default function App() {
  return (
    <View style={{
      flex: 2,
    }}>
      {/* <Register /> */}
      <Header/>
      <NavigationContainer>
        <TabNagation/>
      </NavigationContainer>
    </View>
  );
}
