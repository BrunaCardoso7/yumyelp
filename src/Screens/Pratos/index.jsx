import React, { useEffect, useState,useCallback } from "react";
import { Text, View, TouchableOpacity, FlatList, Image } from "react-native";
import { getAllProdutos, getRest } from "../../api";
import { UseFontsCostumize } from '../../hooks/useFontsCustomize';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Prato({ item }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <TouchableOpacity style={{ width: '100%', height: 150, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 50, paddingHorizontal: 32 }}>
     
      <Image style={{ height: 120, width: 120, borderRadius: 24 }} source={{ uri: item.imagem }} />
      <View style={{ width: '100%', height: '65%', justifyContent: 'space-between' }}>
        <View>
          <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Montserrat-Light' }}>{item.nome}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Montserrat-Light' }}>Preço: </Text>
          <Text style={{ color: '#fff', fontSize: 14, fontFamily: 'Montserrat-SemiBold' }}>R${item.preco}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Montserrat-Light' }}>inserido em: </Text>
          <Text style={{ color: '#fff', fontSize: 14, fontFamily: 'Montserrat-Light' }}>{formatDate(item.updatedAt)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function PratosView() {
  SplashScreen.preventAutoHideAsync();
  const navigation = useNavigation();
  const { onLayoutRootView, fontsLoaded, fontError } = UseFontsCostumize();
  const [data, setData] = useState([]);
  
    const getPratos = async () => {
      try {
        const user_id = await AsyncStorage.getItem("user_id")

        const restaurante = await getRest(user_id)

        console.log(restaurante.data.restInfo.id)

        const rest_id = restaurante.data.restInfo.id

        await AsyncStorage.setItem("rest_id", rest_id)

        const produto = await getAllProdutos();
        setData(produto.produtos)

        const produtos = produto.produtos
        const produtoArray = Object.values(produtos)
        const filteredProdutos = produtoArray.filter((produto) => produto.rest_id === rest_id);

        console.log(filteredProdutos)

        setData(filteredProdutos)
        
      } catch (error) {
        console.error(error);
      }
    };

  const logOut = async () => {
    await AsyncStorage.removeItem("rest_id")
    navigation.navigate('Login')
  }

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  
  if (!fontsLoaded && !fontError) {
    return null;
  }
  useFocusEffect(
    useCallback(() => {
      getPratos();
    }, [])
  );
  console.log(data)
  return (
    <View onLayout={onLayoutRootView} style={{ backgroundColor: '#1F1C1C', flex: 1, alignItems: 'center', width: '100%', height: '80%', paddingVertical: 20, gap: 32 }}>
       <View style={{
          backgroundColor: '#1F1C1C',
          flex:1,
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row',
          width: '100%',
          height: '80%',
          paddingVertical: 0
        }}>
          <TouchableOpacity 
          onPress={logOut}
            style={{
              position: 'absolute',
              top:0,
              left: 14,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
              
            }}
        >
          <AntDesign name="logout" size={24} color="white" />
          </TouchableOpacity>
            <TouchableOpacity style={{
                position: 'absolute',
                top:0,
                right: 14,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
              <Image style={{
                width: 40,
                height: 40,
                borderRadius: 100,
              }} source={require('../../../assets/user-profile.jpg')}/>
            </TouchableOpacity>
        </View>
      <View style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <Text style={{ color: 'white', fontFamily: 'Italianno-Regular', fontSize: 45 }}>YumYelp</Text>
        <Text style={{ color: 'white', fontFamily: 'Montserrat-Light', fontSize: 20 }}>Seu Cardápio</Text>
      </View>
      <FlatList
        style={{ width: '100%', height: '80%' }}
        data={data}
        renderItem={({ item }) => <Prato item={item} />}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('PratoRegister', {data: data})}
        style={{ backgroundColor: '#C61515', alignItems: 'center', flexDirection: 'row', width: '90%', justifyContent: 'center', gap: 24, paddingHorizontal: 24, paddingVertical: 8, borderRadius: 12 }}
      >
        <AntDesign name="plus" size={24} color="white" />
        <Text style={{ color: '#fff', fontSize: 18 }}>Criar Novo Prato</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PratosView;
