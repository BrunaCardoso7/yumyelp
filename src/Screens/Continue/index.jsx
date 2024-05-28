import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { UseFontsCostumize } from "../../hooks/useFontsCustomize";
import DimissKeyBoard from "../../config/DimissKeyBoard"
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useCallback, useEffect, useState } from 'react';
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

    const handleRestaurante = useCallback(() => {
        const tipo = "admin";
        navigation.navigate("Register", { data: tipo });
    }, [navigation]);
    
    const handleUsuario = useCallback(() => {
        const tipo = "user";
        navigation.navigate("Register", { data: tipo });
    }, [navigation]);

    return (
        <DimissKeyBoard>
            <View style={style.screenConteiner}>
            <Text style={style.titleLogo}>YumYelp</Text>
            <View style={style.buttonsConteiner}>
                <View style={style.conteinerFormContent}>
                    <View 
                        style={{
                            display: 'flex',
                            height: '20%',
                            alignItems:'center',
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
                                <Text style={{color: 'white',fontFamily:'Montserrat',fontSize:15}}>Cadastre e exiba seu restaunte para todos</Text>    
                            </View>
                            <TouchableOpacity 
                                onPress={handleRestaurante}
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
                                    <Text style={{color: 'white',  width: '60%', textAlign: 'center',fontSize:17}}> Restaurante</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                 
                        <View style={style.label}>

                            <View style={{width: '100%', }}>
                                <Text style={{color: 'white',fontFamily:'Montserrat',fontSize:15}}>Navegue na plataforma e descubra restaurantes incríveis</Text>    
                            </View>
                            <TouchableOpacity 
                                onPress={handleUsuario}
                                style={style.button}
                            >
                            <View style={{
                                    display: 'flex',
                                    justifyContent: "center",
                                    alignItems: 'center',
                                    width: '100%',
                                    flexDirection: 'row'
                                }}>
                                    <AntDesign name="user" size={22} color="white" />
                                    <Text style={{color: 'white', width: '60%', textAlign: 'center',fontSize:17}}>Usuário</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    
                            <TouchableOpacity style={{flexDirection:'row'}} onPress={() => navigation.navigate('Login')}>
                               <AntDesign name="left" size={22} color="white" />
                                <Text style={{color:'#fff',fontSize:15,marginLeft:10}}>já possuo conta</Text>
                            </TouchableOpacity>
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
        fontSize: 50,
        margin:20 ,
    },
    screenConteiner: {
        flex:1,
        backgroundColor: '#1F1C1C',
        display: 'flex',
        alignItems: 'center',
    },
    buttonsConteiner: {
        backgroundColor: '#681A1A',
        height: 600,
        width: '90%',
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
      fontSize: 15,
      width: '85%',
      backgroundColor: 'white',
      padding: 10,
      borderRadius:14,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 18,
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
        fontFamily: 'Montaga',
        color: 'white',
        fontSize: 28,
    },
    // textDefault:{
    //     fontFamily: 'Montserrat-Regular',
    //     color: 'white',
    //     fontSize: 18,
    // },
    conteinerFormContent: {
        height: '80%',
        width: '90%',
        display: 'flex',
        paddingHorizontal: 14, 
    }
})

export default ContinueWith