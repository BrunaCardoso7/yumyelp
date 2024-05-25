import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { UseFontsCostumize } from "../../hooks/useFontsCustomize";
import DimissKeyBoard from "../../config/DimissKeyBoard"
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";

function ContinueWith () {
    const navigation = useNavigation()

    const {onLayoutRootView, fontsLoaded, fontError} = UseFontsCostumize()
    useEffect(() => {
        onLayoutRootView(); 
      }, [onLayoutRootView]);
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
    return (
        <DimissKeyBoard>
            <View style={style.screenConteiner}>
            <Text style={style.titleLogo}>YumYelp</Text>
            <View style={style.buttonsConteiner}>
                <View style={style.conteinerFormContent}>
                    <View 
                        style={{
                            display: 'flex',
                            gap: 14,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            height: '50%'
                        }}
                    >
                    <Text style={style.textSecundaryStyle}>Continue Como:</Text>
                    </View>
                    <View style={{
                        height: '80%',
                        alignItems:'center',
                        justifyContent:'space-between'
                    }}>
                        <View style={style.label}>
                            <View style={{width: '100%', }}>
                                <Text style={{color: 'white'}}>Compartilhe com nossos usuários sua imagem e seus pratos </Text>    
                            </View>
                            <TouchableOpacity 
                                onPress={() => navigation.navigate('CardRegister')}
                                style={style.button}
                            >
                                <View style={{
                                    display: 'flex',
                                    justifyContent: "center",
                                    alignItems: 'center',
                                    width: '100%',
                                    flexDirection: 'row'
                                }}>
                                    <Ionicons name="restaurant" size={22} color="white"/>
                                    <Text style={{color: 'white',  width: '60%', textAlign: 'center'}}> Restaurante</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                 
                        <View style={style.label}>

                            <View style={{width: '100%', }}>
                                <Text style={{color: 'white'}}>Navegue nesse mar de restaurante esperando por você</Text>    
                            </View>
                            <TouchableOpacity 
                                onPress={() => navigation.navigate('Main')}
                                style={style.button}
                            >
                            <View style={{
                                    display: 'flex',
                                    justifyContent: "center",
                                    alignItems: 'center',
                                    width: '100%',
                                    flexDirection: 'row'
                                }}>
                                    <Text style={{color: 'white', width: '60%', textAlign: 'center'}}>Usuario</Text>
                                    <AntDesign name="right" size={22} color="white" />
                                </View>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    
                </View>
            </View>
    </DimissKeyBoard>
    )
}
const style = StyleSheet.create({
    conteiner: {
        flex: 1,
    },
    titleLogo: {
        fontFamily: 'Italianno-Regular',
        color: 'white',
        textAlign: 'center',
        fontSize: 52,
        marginBottom: 50,
    },
    screenConteiner: {
        padding: 24,
        backgroundColor: '#1F1C1C',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonsConteiner: {
        backgroundColor: '#681A1A',
        height: 600,
        width: '100%',
        borderRadius: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50
    },
    inputConteiner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '70%',
        width: '100%'
    },
    inputStyle: {
      height: 50,
      fontSize: 16,
      width: '85%',
      backgroundColor: 'white',
      padding: 10,
      borderRadius:14,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 18,
        fontSize: 24,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        // gap: 20,
        width: '100%',
        borderRadius:24,
        color: 'white',
        backgroundColor: '#C61515'
    },
    label:{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        // justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
    },
    textSecundaryStyle: {
        fontFamily: 'RobotoSerif-Medium',
        color: 'white',
        fontSize: 22,
    },
    textDefault:{
        fontFamily: 'Montserrat-Regular',
        color: 'white',
        fontSize: 18,
    },
    conteinerFormContent: {
        height: '60%',
        width: '90%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 14, 
    }
})

export default ContinueWith