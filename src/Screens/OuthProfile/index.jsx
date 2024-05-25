import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { UseFontsCostumize } from '../../hooks/useFontsCustomize';
import Header from '../../Components/Header';
import { useNavigation } from '@react-navigation/native';
import {useEffect} from 'react'; 
  
const Perfil =  () =>{
    const navigation = useNavigation();
    const {onLayoutRootView, fontsLoaded, fontError} = UseFontsCostumize();
  
    useEffect(() => {
      onLayoutRootView(); 
    }, [onLayoutRootView]);
  
    if (!fontsLoaded && !fontError) {
      return null;
    }
    
  
    const gear = () => {
      navigation.navigate('User');
    };
  
    return(
      <View style={styles.container}>
          <Header/>
            <View style={styles.infos}>
                <View style={styles.perfil}>
                   <Image style={styles.imagePerfil} source={require('../../../assets/images/imagesIcons/dgsgt03-7da011d4-e515-4664-ae67-6d4a498917d3.jpg')}/>
                </View>
                <Text style={styles.nomePerfil} >Leozin das panela</Text>
                <FontAwesome5 style={styles.gear} name="cog" size={25} color="white" onPress={gear} />
            </View>
             <View style={styles.opcoesPerfil}>
                <TouchableOpacity style={styles.primeiraOpcao}>
                  <Text style={styles.textoOpcao}>Restaurantes salvos</Text>
                  <FontAwesome5 style={{marginRight:10}} name="chevron-right" size={26} color="white" />
                </TouchableOpacity>
  
                <TouchableOpacity style={styles.primeiraOpcao}>
                  <Text style={styles.textoOpcao}>Comentarios postados</Text>
                  <FontAwesome5 style={{marginRight:10}} name="chevron-right" size={26} color="white" />
                </TouchableOpacity>
  
                <TouchableOpacity style={styles.primeiraOpcao}>
                  <Text style={styles.textoOpcao}>Restaurantes curtidos</Text>
                  <FontAwesome5 style={{marginRight:10}} name="chevron-right" size={26} color="white" />
                </TouchableOpacity>
  
            </View>
      </View>
    )
  }
  export default Perfil
  
  const styles = StyleSheet.create({
      container:{
        flex:1,
        backgroundColor:'#303030',
      },
  
      infos:{
        flexDirection:'row',
      },
  
      gear:{  
        position:'relative',
        right:15,
        top:7,
       },
      perfil:{
        width:130,
        height:130,
        margin:20,
        borderRadius:100,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 6 },
        shadowOpacity: 0.45,
        shadowRadius: 11.84,
      },
  
      imagePerfil:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        borderRadius:100,
      },
  
      nomePerfil:{
        fontSize:27,
        color:'#fff',
        marginTop:50,
        
      },
  
      opcoesPerfil:{
        width:'100%',
        height:300,
        alignItems:'center'
      },
  
      primeiraOpcao:{
      width:'95%',
      height:50,
      borderRadius:15,
      backgroundColor:'#4B4B4B',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop:15,
      },
  
      textoOpcao:{
        fontSize:17,
        color:'#fff',
        marginLeft:10,
      },
    
      
      
  })