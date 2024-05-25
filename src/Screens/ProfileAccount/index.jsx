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
    
    const Conta = () => {
      const {onLayoutRootView, fontsLoaded, fontError} = UseFontsCostumize();
      const navigation = useNavigation();
    
      useEffect(() => {
        onLayoutRootView(); 
      }, [onLayoutRootView]);
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
    
      const Return = () =>{
        navigation.navigate('User')
      }
    
      const IconEdit = () =>{
          navigation.navigate('Icones')
      }
    
      return(
        <View onLayout={onLayoutRootView} style={styles.container}>
            <View style={styles.retornar} >
              <FontAwesome5 name="angle-double-left" size={44} color="white" onPress={Return} />
            </View>
    
            <View style={styles.selectIcon}>
                <TouchableOpacity style={styles.iconConta} onPress={IconEdit}>
                    <FontAwesome5 name="image" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.textPerfil}>Selecione um icone para o seu perfil</Text>
            </View>
    
            <View style={styles.config}>
                    <View  style={styles.infos}>
                        <View style={styles.edit}>
                            <Text style={styles.letras}>Nome de usuário:</Text>
                            <TouchableOpacity style={styles.icons}>
                                 <FontAwesome5 name="edit" size={20} color="white" />
                            </TouchableOpacity>         
                        </View>
                           <Text style={styles.letras2}>Leonzinho</Text>
                    </View>
    
                    <View  style={styles.infos}>
                        <View style={styles.edit}>
                            <Text style={styles.letras}>Endereço de e-mail:</Text>
                            <TouchableOpacity style={styles.icons}>
                                 <FontAwesome5 name="edit" size={20} color="white" />
                            </TouchableOpacity>         
                        </View>
                           <Text style={styles.letras2}>fãdaInesBrasil@gmail.com</Text>
                    </View>
    
                    <View  style={styles.infos}>
                        <View style={styles.edit}>
                            <Text style={styles.letras}>Senha:</Text>
                            <TouchableOpacity style={styles.icons}>
                                 <FontAwesome5 name="edit" size={20} color="white" />
                            </TouchableOpacity>         
                        </View>
                           <Text style={styles.letras2}>***********</Text>
                    </View>
            </View>
            <TouchableOpacity style={styles.bottom}>
            <Text style={{color:'red'}}>Deletar conta</Text>
            </TouchableOpacity>
        </View>
      )
    }
    export default Conta
    
    const styles =StyleSheet.create({
      container:{
        flex:1,
        backgroundColor:'#303030',
      },
      retornar:{
        marginTop:40,
        marginLeft:15,
        width:40,
      },
    
      selectIcon:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        width:'100%',
      },
    
      iconConta:{
        width:120,
        height:120,
        borderRadius:100,
        marginHorizontal:15,
        backgroundColor:'#BCBCBC',
        alignItems:'center',
        justifyContent:'center',
      },
    
      textPerfil:{
        fontFamily:'Montserrat',
        fontSize:17,
        color:'#fff',
        flexShrink:1,
        marginRight:5,
      },
    
      config:{
        marginVertical:20,
        marginHorizontal:10,
        borderRadius:15,
        height:230,
        alignItems:'space-between',
        justifyContent:'space-evenly',
        backgroundColor:'#3D3D3D',
      },
      infos:{
    
      },
      edit:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginHorizontal:10,
        width:'95%',
      },
    
      letras:{
        fontSize:17,
        color:'#fff',
        fontFamily:'Montserrat',
      },
      letras2:{
        fontSize:17,
        color:'#BCBCBC',
        fontFamily:'Montserrat',
        marginLeft:10,
    
      },
    
      bottom:{
        width:116,
        height:37,
        borderRadius:15,
        marginLeft:20,
        marginTop:60,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
    
      }
    
    })