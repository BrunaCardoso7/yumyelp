import * as React from 'react';
import { View } from 'react-native';
import Header from './src/Components/Header';
import { NavigationContainer } from '@react-navigation/native';
import TabNagation from './src/Router';
import Register from './src/Screens/Register';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import CardapioRegister from './src/Screens/CardapioRegister/index ';

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.hideAsync();
    };

    prepare();
  }, []);
  return (
    <View style={{
      flex: 1,
    }}>
      {/* <Register /> */}
        <CardapioRegister />
        {/* <Header/>
        <NavigationContainer>
          <TabNagation/>
        </NavigationContainer> */}
    </View>
  );
}
