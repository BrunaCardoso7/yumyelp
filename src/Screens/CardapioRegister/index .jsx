import { View, TextInput, TouchableOpacity, Text } from "react-native";
import ImageFile from "../../Components/ImagePicker";
import { UseFontsCostumize } from "../../hooks/useFontsCustomize";
import { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';

function CardapioRegister () {
    const {onLayoutRootView, fontsLoaded, fontError} = UseFontsCostumize()
    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')
    const [descricao, setDescricao] = useState('')

    // const [image, setImage] = useState();

    // const hadleFileName = (prev) => {
    //     setImage(prevData => ({
    //         filename: prev,
    //         ...prevData
    //     }))
    // }
    // const hadleUri = (prev) => {
    //     setImage(prevData => ({
    //         ...prevData,
    //         uri: prev,
    //         ...prevData,
    //     }))
    // }
    // const hadleExtend = (prev) => {
    //     setImage(prevData => ({
    //         ...prevData,
    //         extends: prev,
    //     }))
    // }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
            const name = result.assets[0].uri.substring(result.assets[0].uri.lastIndexOf('/') + 1, result.assets[0].uri.length)
            const extend = name.split('.')[1]
           
           setImage(name)
            // setImage({
            //     filename: name,
            //     uri: result.assets[0].uri,
            //     extends: extend
            // });
        }   
    };
    
    const hadleDataApi = async () => {
        // const response = await createRes
        console.log(nome, endereco, descricao, image)
    }

    useEffect(() => {
      onLayoutRootView(); 
    }, [onLayoutRootView]);
  
    if (!fontsLoaded && !fontError) {
      return null;
    }
    return (
        <View style={{
            backgroundColor: '#1F1C1C',
            flex:1,
            alignItems: 'center',
            width: '100%',
            height: '100%'
        }}>
            <ImageFile pickImage={pickImage} />
            <Text
                style={{
                    color: 'white',
                    fontSize: 18,
                    width: '90%',
                    marginTop: 32,
                    fontFamily: 'Montserrat-Light'
                }}
            >
                Apresente e compatilhe dos seus melhores pratos conosco!
            </Text>
            <View
                style={{
                    width: '100%',
                    height: '60%',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >

                <View style={{
                    width: '100%',
                    height: '50%',
                    alignItems: 'center',
                    marginTop: 50,
                    gap: 14,
                    justifyContent: 'space-around'

                }}>
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
                <TextInput 
                    placeholder="Endereço"
                    style={{
                        height: 50,
                        fontSize: 16,
                        width: '90%',
                        backgroundColor: 'white',
                        padding: 8,
                        borderRadius:14,
                    }}
                    onChangeText={setEndereco}
                />
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
                <TouchableOpacity style={{
                    backgroundColor: '#681A1A',
                    width: '90%',
                    alignItems: 'center',
                    borderRadius: 14,
                    paddingHorizontal: 20,
                    paddingVertical: 10
                }}
                onPress={hadleDataApi} 
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 18
                    }}>Criar restaurante</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default CardapioRegister