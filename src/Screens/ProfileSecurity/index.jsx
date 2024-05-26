import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
    } from 'react-native';
    import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
    import { UseFontsCostumize } from '../../hooks/useFontsCustomize';
    import {useEffect} from 'react'; 
    import AntDesign from '@expo/vector-icons/AntDesign';
    import { useNavigation } from '@react-navigation/native';
    
    const Seguranca = () => {
      const {onLayoutRootView, fontsLoaded, fontError} = UseFontsCostumize()
      const navigation= useNavigation();
      useEffect(() => {
        onLayoutRootView(); 
      }, [onLayoutRootView]);
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
      const Return = () =>{
        return navigation.navigate('User')
      }
      return(
        <View onLayout={onLayoutRootView} style={styles.container}>
              
            <TouchableOpacity style={styles.retornar} onPress={Return}>
              <AntDesign name="doubleleft" size={38} color="white" />
              <Text style={{color:"#fff",fontSize:15,marginLeft:5}}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.config}>
                <View style={{gap:10}}>
                  <Text style={styles.letras}>E-mail seguro</Text>
                  <Text style={styles.letrasMini}>Será enviado um código de verificação ao seu  e-mail</Text>
                  <View style={styles.linha}></View>
                  <Text style={styles.letras}>Mensagem</Text>
                  <Text style={styles.letrasMini}>Será enviado uma mensagem de verificação ao seu  telefone</Text>
                  <View style={styles.linha}></View>    
                </View>
                <View style={styles.icones}>
                    <FontAwesome5 name="toggle-on" size={32} color="white" />
                    <FontAwesome5 name="toggle-on" size={32} color="white" />
                </View>
            </View>
        </View>
      )
    }
    export default Seguranca
    
    const styles =StyleSheet.create({
      container:{
        flex:1,
        backgroundColor:'#1F1C1C',
      },
    
      config:{
        marginLeft:10,
        flexDirection:'row',
      },
      
       retornar:{
        marginTop:40,
        marginLeft:15,
        width:60,
        flexDirection:'row',
        alignItems:'center',
      },
    
      letras:{
        fontSize:16,
        marginTop:35,
        fontFamily:'Montserrat',
        color:'white'
        },
    
        letrasMini:{
          fontSize:12,
          fontFamily:'Montserrat',
          color:'white'
        },
    
        linha:{
          width:320,
          height:0.5,
          backgroundColor:'#fff'
        },
        
        icones:{
          marginTop:37,
          gap:65,
          position:'relative',
          right:20
        }
    })