import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import Header from '../../Components/Header';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const User =  () =>{
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Conta');
  };

  const handlePress2 = () => {
    navigation.navigate('Seguranca');
  };

   const handlePress3 = () => {
    navigation.navigate('Notificacao');
  };
  const Return = () =>{
    navigation.navigate('Perfil')
  }

  const logout = async () => {
    await AsyncStorage.removeItem("token")
    await AsyncStorage.removeItem("userId")
    navigation.navigate("Login")
  }
  return(
    <View style={styles.container}> 
       <Header/>
       <TouchableOpacity style={styles.retornar} onPress={Return}>
              <AntDesign name="doubleleft" size={38} color="white" />
              <Text style={{color:"#fff",fontSize:15,marginLeft:5}}>Voltar</Text>
            </TouchableOpacity>

       <View style={styles.controles}>
            <View style={styles.sequenciaComandos}>
                <View style={styles.containerTextos}>
                  
                    <TouchableOpacity onPress={handlePress} style={styles.opacity}>
                        <FontAwesome5 name="user" size={24} color="white" />
                        <Text style={styles.edit}>Conta</Text>
                        <FontAwesome5 style={styles.icone} name="chevron-right" size={24} color="white" />
                    </TouchableOpacity>

                        <View style={styles.linha}></View>

                    <TouchableOpacity  onPress={handlePress2} style={styles.opacity}>
                        <FontAwesome5 name="shield-alt" size={24} color="white" />
                        <Text style={styles.edit}>Privacida e segurança</Text>
                        <FontAwesome5 style={styles.icone} name="chevron-right" size={24} color="white" />
                    </TouchableOpacity>

                        <View style={styles.linha}></View>

                    <TouchableOpacity onPress={handlePress3} style={styles.opacity}>
                        <FontAwesome5 name="bell" size={24} color="white" />
                        <Text style={styles.edit}>Notificações</Text>
                        <FontAwesome5 style={styles.icone} name="chevron-right" size={24} color="white" />
                    </TouchableOpacity>

                        <View style={styles.linha}></View>

                    <TouchableOpacity onPress={logout}>
                    <Text style={styles.sair}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </View>
      </View>
    </View>
  )
}
export default User

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#1F1C1C',
    },


    retornar:{
      margin:15,
      width:60,
      flexDirection:'row',
      alignItems:'center',
    },
      

    sequenciaComandos:{
      flexDirection:'row',
      backgroundColor:'#3D3D3D',
      borderRadius:15,
      justifyContent:'center',
      alignItems:'center',
      marginHorizontal:10,
    },

    containerTextos:{
      width:'95%',
    },

    opacity:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      height:65,      
    },

    edit:{
      color:'white',
      flex:1,
      fontSize:17,
      textAlign:'left',
      marginLeft:15,
      fontFamily:'Montserrat',
    },

    linha:{
      backgroundColor:'#747373',
      width:'95%',
      height:0.6,
      marginHorizontal:10,
    },
    icone:{
      marginRight:15,
    },
    sair:{
      color:'red',
      fontSize:17,
      fontFamily:'Montserrat',
      margin:20,
    },
    
})