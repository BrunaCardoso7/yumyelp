import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/Router/index';
import RouterPages from './src/Router/PageRouter';

SplashScreen.preventAutoHideAsync();


export default function App() {
  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.hideAsync();
    };

    prepare();
  }, []);

  return (
    <NavigationContainer>
     <StatusBar backgroundColor="black" barStyle="light-content"/>
      <RouterPages />
    </NavigationContainer>
  );
}