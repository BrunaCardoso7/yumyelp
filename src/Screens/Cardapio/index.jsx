import {View, Image,StyleSheet, Text, ScrollView, TextInput, Dimensions, FlatList} from 'react-native'
import { useCallback, useEffect, useState} from 'react'; 
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { AntDesign } from '@expo/vector-icons';
import { UseFontsCostumize } from '../../hooks/useFontsCustomize';
// import { FlatList } from 'react-native-gesture-handler';
import { produtoData } from '../../mocks/produto-mock';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Header from '../../Components/Header';

const screenWidth = Dimensions.get('window').width;

SplashScreen.preventAutoHideAsync();

function Produto ({uri, preco}) {
  return (
    <>
        <View style={styles.conteinerProduct}>
          <Image source={require('../../../assets/Rectangle 8.png')}/>
          <Text style={styles.moneyStyle}>{preco}</Text>
        </View>
    </>

  )
}

function Cardapio ({ route }) {

    const { data } = route.params;
    const [inputValue, setInputValue] = useState('')
    const {onLayoutRootView, fontsLoaded, fontError} = UseFontsCostumize()

    useEffect(() => {
      onLayoutRootView(); 
    }, [onLayoutRootView]);
  
    if (!fontsLoaded && !fontError) {
      return null;
    }

    

    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Header/>
        <ScrollView onLayout={onLayoutRootView} >
          <View style={styles.fundoImg}>
            <Image style={styles.imageStyle} source={{uri: data.imagem}}/>
            <View style={styles.overlay}></View>
            </View>
            <View style={styles.conteinerInfo}>
              <View style={styles.conteiner}>
                <Text style={styles.textTitle}>
                    {data.nome}
                </Text>
                <Text style={styles.textSubTitle}>
                  {data.descricao}
                </Text>
              </View>
              <View style={styles.conteiner}>
                <Text style={styles.textTiltePrimary}>
                    Endereço
                </Text>
                <Text style={styles.textSubTitle}>
                  {data.endereco}
                </Text>
              </View>
              <View style={styles.conteiner}>
                <Text style={styles.textTiltePrimary}>
                    Cardápio e promoções
                </Text>
                <View style={styles.products}>
                  <ScrollView>
                    <FlatList 
                      horizontal
                      data={produtoData}
                      renderItem={({item}) => <Produto uri={item.uri} preco={item.preco}/>}
                      keyExtractor={item => item.id}
                    />
                  </ScrollView>
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
                <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>
                  <View style={styles.profileImage}>
                    <Text>oi</Text>
                  </View>

                  <View style={styles.conteinerStar}>
                    <AntDesign name="staro" size={20} color="yellow" />
                    <AntDesign name="staro" size={20} color="yellow" />
                    <AntDesign name="staro" size={20} color="yellow" />
                    <AntDesign name="staro" size={20} color="yellow" />
                    <AntDesign name="staro" size={20} color="yellow" />
                  </View>

              </View>
                  <View style={styles.comenter}>
                    <Text>
                      não sei se gostei da comida e achei um fio de cabelo na minha comida
                    </Text>
                  </View>
              </View>
            </View>
        </ScrollView>
      </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    conteinerMain: {
        width: '100%',
        flex: 1,
    },
    fundoImg:{
      width:'100%',
      height:231,
    },
    imageStyle:{
        width: '100%',
        height: '100%',
        resizeMode:'cover',
    },
    
    overlay:{
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      },

    conteinerInfo:{
        backgroundColor: '#1F1C1C',
        height: '100%',
        padding: 14,
        gap:  28,
    },
    textTitle: {
      fontFamily: 'Montserrat-SemiBold',
      color: '#ffffff',
      fontSize: 22,
    },
    textSubTitle: {
      fontFamily: 'Montserrat-Regular',
      color: '#ffffff',
      fontSize: 16,
    },
    textTiltePrimary: {
      fontFamily: 'Montserrat-SemiBold',
      color: '#ffffff',
      fontSize: 14,
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
      backgroundColor: "white",
      width: '100%',
      height: 'fit-content',
      gap: 8,
      borderRadius: 24,
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
    },
    produto: {
      width: 80,
      height: 80,
      backgroundColor: 'white',
    }
})

export default Cardapio