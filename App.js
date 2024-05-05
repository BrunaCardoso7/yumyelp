import * as React from 'react';
import { View } from 'react-native';
import Header from './src/Components/Header';
import { NavigationContainer } from '@react-navigation/native';
import TabNagation from './src/Router';
export default function App() {
  return (
    <View style={{
      flex: 2,
    }}>
       <Header/>
       <NavigationContainer>
          <TabNagation/>
       </NavigationContainer>
    </View>
  );
}
