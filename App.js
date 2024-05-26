import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/Router/index';
import RouterPages from './src/Router/PageRouter';
import AsyncStorage from '@react-native-async-storage/async-storage';

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [token, setToken] = useState()
  const [userId, setUserId] = useState()

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.hideAsync();
      const token = await AsyncStorage.getItem('token')
      const user_Id = await AsyncStorage.getItem('userId')
      console.log(token)
      setToken(token)
      setUserId(user_Id)
    };

    prepare();
  }, []);

  //- usuario -> id

  return (
    <NavigationContainer>
     <StatusBar backgroundColor="black" barStyle="light-content"/>
      <RouterPages token={token} userId={userId}/>
    </NavigationContainer>
  );
}