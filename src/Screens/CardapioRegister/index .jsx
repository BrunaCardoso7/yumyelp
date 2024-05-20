import { View, TextInput, TouchableOpacity, Text } from "react-native";
import ImageFile from "../../Components/ImagePicker";
import { UseFontsCostumize } from "../../hooks/useFontsCustomize";
import { useEffect } from "react";

function CardapioRegister () {
    const {onLayoutRootView, fontsLoaded, fontError} = UseFontsCostumize()

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
            <ImageFile />
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
                    
                />
                </View>
                <TouchableOpacity style={{
                    backgroundColor: '#681A1A',
                    width: '90%',
                    alignItems: 'center',
                    borderRadius: 14,
                    paddingHorizontal: 20,
                    paddingVertical: 10
                }} >
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