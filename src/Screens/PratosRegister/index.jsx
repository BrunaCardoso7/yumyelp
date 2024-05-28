import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import ImageFile from "../../Components/ImagePicker";
import { UseFontsCostumize } from "../../hooks/useFontsCustomize"; 
import { useEffect, useState, useCallback } from "react";
import * as ImagePicker from 'expo-image-picker';
import { Alert } from "react-native";
import DimissKeyBoard from "../../config/DimissKeyBoard";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import { createProduto } from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

function PratoRegister() {
    const { onLayoutRootView, fontsLoaded, fontError } = UseFontsCostumize();
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [image, setImage] = useState(null);
    const navigation = useNavigation()

    const pickImage = useCallback(async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled) {
        const uri = result.assets[0].uri;
        const name = uri.split('/').pop();
        const type = `image/${name.split('.').pop()}`;
  
        setImage({
          uri,
          name,
          type,
        });
      }
    }, [image])
  
    const handleDataApi = useCallback(async () => {
        const restId = await AsyncStorage.getItem("rest_id")
        console.log('função foi chamada')
      if (!image) {
        Alert.alert("Error", "Please select an image first.");
        return;
      }
  
      const formData = new FormData();
      formData.append("nome", nome);
      formData.append("preco", preco);
      formData.append("file", {
        uri: image.uri,
        type: image.type,
        name: image.name,
      });
  
      try {
        const response = await createProduto(formData, restId);

        console.log('Response:', response);
        if (response.status === 200) {
          console.log('Requisição bem-sucedida!');
          Alert.alert('Success', 'Restaurante criado com sucesso!');
          navigation.navigate('PratosView')
        } else {
          console.log('Status da resposta:', response.status);
          Alert.alert('Error', `Erro na criação do restaurante: ${response.status}`);
        }
      } catch (error) {
        console.error('Error during API call:', error);
      }
    }, [nome, preco, image]);

    useEffect(() => {
      onLayoutRootView(); 
    }, [onLayoutRootView]);
  
    if (!fontsLoaded && !fontError) {
      return null;
    }
  return (
    <DimissKeyBoard>

    <View style={{
      backgroundColor: '#1F1C1C',
      flex:1,
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '100%',
      height: '80%',
      paddingVertical: 0
    }}>
      <TouchableOpacity 
        onPress={() => navigation.goBack()}
        style={{
            width: '100%',
            position: 'absolute',
            top:28,
            left: 8,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        }}
    >
        <AntDesign name="left" size={24} color="white" />
        <Text style={{
            color: 'white',
            fontSize: 18,
            marginLeft: 20
        }}>Voltar</Text>
      </TouchableOpacity>
      <Text style={{
        color: 'white',
        fontFamily: 'Italianno-Regular',
        fontSize: 50,
      }}>YumYelp</Text>
      <Text style={{
        color: 'white',
        fontFamily: 'Montserrat-Light',
        fontSize: 20,
      }}>Compartilhe Seus Pratos</Text>
      <View
        style={{
          alignItems: 'center',
          width: '100%',
          height: '80%'
      }}
      >
        <ImageFile imagem={image ? image.uri : null} pickImage={pickImage} height={300} /> 
        <View
            style={{
                width: '100%',
                height: '40%',
                alignItems: 'center',
                gap: 40,
            }}
        >
          <View style={{
              width: '100%',
              height: '60%',
              alignItems: 'center',
              marginTop: 50,
              gap: 44,
              justifyContent: 'space-around'

          }}>
            <View style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}>
              <View style={{width: '90%'}}>
                  <Text style={{
                    color: 'white',
                    fontFamily: 'Montserrat-Light',
                    fontSize: 14,
                  }}>Nome do Prato</Text>

              </View>
              <TextInput 
                placeholder="Nome do Prato"
                style={{
                    height: 50,
                    fontSize: 16,
                    width: '90%',
                    backgroundColor: 'white',
                    padding: 8,
                    borderRadius:14,
                }}
                onChangeText={setNome}
              />
            </View>
          
            <View style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}>
              <View style={{width: '90%'}}>
                  <Text style={{
                    color: 'white',
                    fontFamily: 'Montserrat-Light',
                    fontSize: 14,
                  }}>Preço</Text>
              </View>
              <TextInput 
                  placeholder="Preco do produto"
                  style={{
                      height: 50,
                      fontSize: 16,
                      width: '90%',
                      backgroundColor: 'white',
                      padding: 8,
                      borderRadius:16,
                  }}
                  onChangeText={setPreco}
              />
            </View>
            </View>
            <TouchableOpacity style={{
                backgroundColor: '#C61515',
                width: '90%',
                alignItems: 'center',
                borderRadius: 14,
                paddingHorizontal: 20,
                paddingVertical: 10
            }}
            onPress={handleDataApi} 
            >
                <Text style={{
                    color: 'white',
                    fontSize: 18
                }}>Criar Prato</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  </DimissKeyBoard>
  );
}

export default PratoRegister;
