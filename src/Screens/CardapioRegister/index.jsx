import { View, TextInput, TouchableOpacity, Text } from "react-native";
import ImageFile from "../../Components/ImagePicker";
import { UseFontsCostumize } from "../../hooks/useFontsCustomize"; 
import { useEffect, useState, useCallback, useId } from "react";
import * as ImagePicker from 'expo-image-picker';
import { createRestaurante } from "../../api";
import { Alert } from "react-native";
import DimissKeyBoard from "../../config/DimissKeyBoard";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function CardapioRegister () {
    const { onLayoutRootView, fontsLoaded, fontError } = UseFontsCostumize();
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('')
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
      if (!image) {
        Alert.alert("Error", "Please select an image first.");
        return;
      }

      const userId = await AsyncStorage.getItem("userId")
  
      const formData = new FormData()
      formData.append("nome", nome)
      formData.append("endereco", endereco)
      formData.append("descricao", descricao)
      formData.append("categoria", categoria)
      formData.append("file", {
        uri: image.uri,
        type: image.type,
        name: image.name,
      });
  
      try {
        const response = await createRestaurante(formData, userId)
        
        console.log('Response:', response)
        if (response.status === 200) {
          console.log('Requisição bem-sucedida!')
          Alert.alert('Success', 'Restaurante criado com sucesso!')
        } else {
          console.log('Status da resposta:', response.status)
          Alert.alert('Error', `Erro na criação do restaurante: ${response.status}`)
        }

        console.log(response.data.retaurante.id)
        await AsyncStorage.setItem("rest_id", response.data.retaurante.id)

        navigation.navigate('Rest')
      } catch (error) {
        console.error('Error during API call:', error);
      }
    }, [nome, endereco, categoria,descricao, image]);
 
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
          <Text style={{
            color: 'white',
            fontFamily: 'Italianno-Regular',
            fontSize: 50,
          }}>YumYelp</Text>
          <Text style={{
            color: 'white',
            fontFamily: 'Montserrat-Light',
            fontSize: 20,
          }}>Compartilhe Seu Restaurante</Text>
          <View
            style={{
              alignItems: 'center',
              width: '100%',
              height: '80%'
          }}
          >
            <ImageFile imagem={image ? image.uri : null} pickImage={pickImage} height={200} /> 
            <View
                style={{
                    width: '100%',
                    height: '80%',
                    alignItems: 'center',
                    gap: 40,
                }}
            >
              <View style={{
                  width: '100%',
                  height: '60%',
                  alignItems: 'center',
                  marginTop: 50,
                  gap: 14,
                  justifyContent: 'space-around'

              }}>
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
                      }}>Nome do Restaurante</Text>

                  </View>
                  <TextInput 
                    placeholder="Nome do restaurante"
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
                      }}>Categoria</Text>
                  </View>
                  <TextInput 
                    placeholder="Categoria"
                    style={{
                        height: 50,
                        fontSize: 16,
                        width: '90%',
                        backgroundColor: 'white',
                        padding: 8,
                        borderRadius:14,
                    }}
                    onChangeText={setCategoria}
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
                      }}>Endereço</Text>
                  </View>
                  <TextInput 
                      placeholder="Endereço"
                      style={{
                          height: 50,
                          fontSize: 16,
                          width: '90%',
                          backgroundColor: 'white',
                          padding: 8,
                          borderRadius:16,
                      }}
                      onChangeText={setEndereco}
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
                        fontSize: 14,
                        fontFamily: 'Montserrat-Light'
                      }}>Descrição</Text>

                    </View>
                    <TextInput 
                      placeholder="Descrição"
                      numberOfLines={5}
                      style={{
                          height: 70,
                          fontSize: 16,
                          width: '90%',
                          backgroundColor: 'white',
                          padding: 8,
                          borderRadius:14,
                          textAlignVertical: 'top'
                      }}
                      onChangeText={setDescricao}
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
                    }}>Criar restaurante</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </DimissKeyBoard>
    )
}
export default CardapioRegister