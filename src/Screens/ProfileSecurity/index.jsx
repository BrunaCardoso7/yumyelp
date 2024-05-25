import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
    } from 'react-native';
    import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
    import { UseFontsCostumize } from '../../hooks/useFontsCustomize';
    import {useEffect} from 'react'; 
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
              <View style={styles.retornar} >
                <FontAwesome5 name="angle-double-left" size={44} color="white" onPress={Return} />
              </View>
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
        backgroundColor:'#303030',
      },
    
      config:{
        marginLeft:10,
        flexDirection:'row',
      },
      
       retornar:{
        marginTop:40,
        marginLeft:15,
        width:40,
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