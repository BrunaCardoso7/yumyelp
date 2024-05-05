import {View, Image,StyleSheet, Text, ScrollView, TextInput} from 'react-native'
import { useCallback, useEffect, useState} from 'react'; 
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { UseFontsCostumize } from '../../hooks/useFontsCustomize';

const screenWidth = Dimensions.get('window').width;
SplashScreen.preventAutoHideAsync();

function Cardapio () {
    const [inputValue, setInputValue] = useState('')
    const {onLayoutRootView, fontsLoaded, fontError} = UseFontsCostumize()

    useEffect(() => {
      onLayoutRootView(); 
    }, [onLayoutRootView]);
  
    if (!fontsLoaded && !fontError) {
      return null;
    }

    return (
        <ScrollView onLayout={onLayoutRootView} >
            <Image style={styles.imageStyle} source={require('../../../assets/Rectangle 6.png')}/>
            <View style={styles.conteinerInfo}>
              <View style={styles.conteiner}>
                <Text style={styles.textTitle}>
                    Restaurante da chica
                </Text>
                <Text style={styles.textSubTitle}>
                Procurando o restaurante mais tradicional de São 
                Luís? Achou: é o Cabana do Sol. É o melhor lugar 
                para provar a carne de sol com todos os seus acompanhamentos
                </Text>
              </View>
              <View style={styles.conteiner}>
                <Text style={styles.textTiltePrimary}>
                    Endereço
                </Text>
                <Text style={styles.textSubTitle}>
                Av. Raimundo Corrêa da Silva, 547 - Refeição no local
                </Text>
              </View>
              <View style={styles.conteiner}>
                <Text style={styles.textTiltePrimary}>
                    Cardápio e promoções
                </Text>
                <View style={styles.products}>
                  <View style={styles.conteinerProduct}>
                    <Image source={require('../../../assets/Rectangle 8.png')}/>
                    <Text style={styles.moneyStyle}>R$ 5,00</Text>
                  </View>
                  <View style={styles.conteinerProduct}>
                    <Image source={require('../../../assets/Rectangle 8.png')}/>
                    <Text style={styles.moneyStyle}>R$ 5,00</Text>
                  </View>
                  <View style={styles.conteinerProduct}>
                    <Image source={require('../../../assets/Rectangle 8.png')}/>
                    <Text style={styles.moneyStyle}>R$ 5,00</Text>
                  </View>
                  <View style={styles.conteinerProduct}>
                    <Image source={require('../../../assets/Rectangle 8.png')}/>
                    <Text style={styles.moneyStyle}>R$ 5,00</Text>
                  </View>
                  <View style={styles.conteinerProduct}>
                    <Image source={require('../../../assets/Rectangle 8.png')}/>
                    <Text style={styles.moneyStyle}>R$ 5,00</Text>
                  </View>
                </View>
              </View>
              <View style={styles.conteiner}>
                <Text style={styles.textTiltePrimary}>
                  Redes Sociais
                </Text>
                <Text style={styles.textSubTitle}>
                 nenhum cadastrado!
                </Text>
              </View>
              <View style={styles.conteinerAva}>
                <Text style={styles.textTiltePrimary}>
                  Avaliar esse restaurante
                </Text>
                <View style={styles.conteinerStar}>
                  <AntDesign name="staro" size={24} color="yellow" />
                  <AntDesign name="staro" size={24} color="yellow" />
                  <AntDesign name="staro" size={24} color="yellow" />
                  <AntDesign name="staro" size={24} color="yellow" />
                  <AntDesign name="staro" size={24} color="yellow" />
                </View>
                <TextInput
                  style={styles.inputStyle}
                  placeholder='Qual a sua opinião'
                  onChangeText={setInputValue}
                />
              </View>
              <View style={styles.bubbleComent}>
              <View style={styles.conteinerStar}>
                  <AntDesign name="staro" size={20} color="yellow" />
                  <AntDesign name="staro" size={20} color="yellow" />
                  <AntDesign name="staro" size={20} color="yellow" />
                  <AntDesign name="staro" size={20} color="yellow" />
                  <AntDesign name="staro" size={20} color="yellow" />
                </View>
                <View style={styles.profileImage}>
                  <Text>oi</Text>
                </View>
                <View style={styles.comenter}>
                  <Text>
                    não sei se gostei da comida e achei um fio de cabelo na minha comida
                  </Text>
                </View>
              </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    conteinerMain: {
        width: '100%',
        flex: 1,
    },
    imageStyle:{
        width: screenWidth,
        height: 230,
    },
    conteinerInfo:{
        backgroundColor: '#1F1C1C',
        height: '100%',
        padding: 14,
        gap:  28,
    },
    textTitle: {
      fontFamily: 'InriaSerif-Regular',
      color: '#ffffff',
      fontSize: 22,
    },
    textSubTitle: {
      fontFamily: 'Montserrat-Regular',
      color: '#ffffff',
      fontSize: 14,
    },
    textTiltePrimary: {
      fontFamily: 'InriaSerif-Bold',
      color: '#ffffff',
      fontSize: 16,
    },
    conteiner: {
      gap: 6,
    },
    conteinerProduct:{
      display: 'flex',
      margin: 10,
      gap: 6,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    moneyStyle: {
      color: '#00FF38',
    },
    products: {
      display: 'flex',
      flexDirection: 'row',
    },
    conteinerStar: {
      display: 'flex',
      flexDirection: 'row',
      gap: 6,
    },
    conteinerAva:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 12,
      padding: 14,
    },
    inputStyle: {
      height: 42,
      width: '100%',
      backgroundColor: 'white',
      padding: 8,
      borderRadius: 6,
    },
    bubbleComent: {
      backgroundColor: "#D9D9D9",
      width: '100%',
      height: 'fit-content',
      gap: 8,
      borderRadius: 14,
      padding: 10,
    },
    profileImage: {
      width: 40,
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      backgroundColor: '#767676',
    }
})

export default Cardapio