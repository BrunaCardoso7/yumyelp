import {View, Image,StyleSheet, Text, ScrollView, TextInput, Dimensions, FlatList} from 'react-native'
import {useEffect, useState} from 'react'; 
import * as SplashScreen from 'expo-splash-screen';
import { AntDesign } from '@expo/vector-icons';
import { UseFontsCostumize } from '../../hooks/useFontsCustomize';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Header from '../../Components/Header';
import { getAllProdutos } from '../../api';


const screenWidth = Dimensions.get('window').width;

SplashScreen.preventAutoHideAsync();

function Produto ({imagem, nome, preco}) {
  return (
    <>
        <View style={styles.conteinerProduct}>
          <Image  style={{
            width: 120,
            height: 120,
            borderRadius: 14
          }} source={{uri: imagem}}/>
          <Text style={styles.nomeProd}>{nome}</Text>
          <Text style={styles.moneyStyle}>{preco}</Text>
        </View>
    </>

  )
}
function Comenter ({nome, comentario}) {
  return (
    <>
      <View style={styles.bubbleComent}>
        <View style={{
          display: 'flex',
          flexDirection: 'collumn',
          justifyContent: 'space-between',
          gap: 14,
          paddingHorizontal: 12
        }}>
          <View style={styles.conteinerStar}>
            <AntDesign name="star" size={20} color="yellow" />
            <AntDesign name="star" size={20} color="yellow" />
            <AntDesign name="star" size={20} color="yellow" />
            <AntDesign name="star" size={20} color="yellow" />
            <AntDesign name="staro" size={20} color="yellow" />
          </View>
          <View style={{
            flexDirection: 'row',
            gap: 24
          }}>
            <View style={styles.profileImage}>
              <Text>oi</Text>
            </View>
            <View>
              <Text style={{
                color: 'white',
                fontSize: 14,
                fontFamily: 'Montserrat-SemiBold'
              }}>
                  {nome}
              </Text>
            </View>
          </View>
      </View>
          <View style={styles.comenter}>
            <Text style={{
              color: 'white',
              paddingHorizontal: 14,
            }}>
              {comentario}
            </Text>
          </View>
      </View>
    </>
  )
}

const datas = [
  { id: 1, nome: "Ana Lucia Cristal", comentario: "Ótimo atendimento e comida deliciosa!" },
  { id: 2,nome: "Bruno Silva", comentario: "Ambiente agradável, recomendo a visita." },
  { id: 3,nome: "Carla Santos", comentario: "Pratos bem servidos, mas o serviço foi lento." },
  { id: 4,nome: "Daniel Oliveira", comentario: "Adorei a variedade do cardápio." },
  { id: 5,nome: "Eduarda Pereira", comentario: "O restaurante estava lotado, mas valeu a espera." },
  { id: 6,nome: "Fernando Souza", comentario: "Preço justo e comida de qualidade." },
  { id: 7,nome: "Gabriela Lima", comentario: "Melhor sobremesa que já provei!" },
  { id: 8,nome: "Henrique Costa", comentario: "Boa localização, mas achei o atendimento mediano." },
  { id: 9,nome: "Isabela Ribeiro", comentario: "Ótimo para ir com a família, espaço kids é excelente." },
  { id: 10,nome: "João Pedro Almeida", comentario: "Sabor autêntico e ingredientes frescos." }
];


function Cardapio ({ route }) {

    const { data } = route.params;
    const [inputValue, setInputValue] = useState('')
    const [infoApi, setInfoApi] = useState()
    const {onLayoutRootView, fontsLoaded, fontError} = UseFontsCostumize()
    const rest_id = data.id

    const handleData = async() => {
      try {
        const result = await getAllProdutos()
          console.log(result.produtos)
        const produtos = Object.values(result.produtos)
        const filteredProdutos = produtos.filter((produto) => produto.rest_id === rest_id)

        setInfoApi(filteredProdutos)
      } catch (error) {
          console.error(error)
      }
    }

    useEffect(() => {
      onLayoutRootView(); 
    }, [onLayoutRootView]);
    useEffect(()=>{
      handleData()
    }, [])
  
    if (!fontsLoaded && !fontError) {
      return null;
    }

    
    console.log("info api: ",infoApi)
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Header/>
        <ScrollView onLayout={onLayoutRootView} >
            <View style={styles.imageStyle}>
              <Image style={styles.imageStyle} source={{uri: data.imagem}}/>  
              <Text style={{
                zIndex: 999,
                position: 'absolute',
                bottom:0,
                right: 10,
                fontSize:24,
                color: 'white'
              }}><AntDesign name="star" size={24} color="yellow" />4.1</Text>
              <View style={styles.overlay} />
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
                      data={infoApi}
                      renderItem={({item}) => <Produto imagem={item.imagem} nome={item.nome} preco={item.preco}/>}
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
                  Instagram: @RestaurantesBrasil
                </Text>
              </View>
              <View style={styles.conteinerAva}>
        
                <Text style={styles.textTilte}>
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
                  <FlatList 
                    horizontal
                    style={{
                      width: '100%',
                      height: '12%',
                      // padding:10,
                      marginVertical: 50
                    }}
                    data={datas}
                    renderItem={({item}) => <Comenter nome={item.nome} comentario={item.comentario} />}
                    keyExtractor={item => item.id}
                  />
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
        marginVertical: 50
    },
    fundoImg:{
      width:'100%',
      height:231,
    },
    imageStyle:{
        position: 'relative',
        width: screenWidth,
        height: 231,
    },
    
    overlay:{
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      },

    conteinerInfo:{
        backgroundColor: '#1F1C1C',
        height: '100%',
        padding: 14,
        gap:  24,
    },
    textTitle: {
      fontFamily: 'Montserrat-SemiBold',
      color: '#ffffff',
      fontSize: 22,
    },
    textSubTitle: {
      fontFamily: 'Montserrat-Regular',
      color: '#ffffff',
      fontSize: 14,
      textAlign: 'justify'
    },
    textTiltePrimary: {
      fontFamily: 'Montserrat-SemiBold',
      color: '#ffffff',
      fontSize: 14,
    },
    textTilte: {
      fontFamily: 'Montserrat-SemiBold',
      color: '#ffffff',
      fontSize: 14,
    },
    conteiner: {
      gap: 24,
    },
    conteinerProduct:{
      display: 'flex',
      margin: 10,
      gap: 6,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    moneyStyle: {
      color: '#D9D9D9',
      fontFamily: 'InriaSerif-Bold'
    },
    nomeProd: {
      color: '#D9D9D9',
      fontFamily: 'Montserrat-SemiBold'
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
      backgroundColor: "#3F3838",
      width: 350,
      height: '100%',
      gap: 8,
      borderRadius: 24,
      padding: 10,
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 }, 
      shadowOpacity: 0.1, 
      shadowRadius: 4, 
      elevation: 5, 
      marginRight: 10
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
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
})

export default Cardapio