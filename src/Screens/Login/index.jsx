import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity ,
    Alert
} from 'react-native'
import {useEffect, useState} from 'react'; 
import { UseFontsCostumize } from '../../hooks/useFontsCustomize';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import DimissKeyBoard from '../../config/DimissKeyBoard';
import { useNavigation } from '@react-navigation/native';
import { getUserById, loginUser } from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const {onLayoutRootView, fontsLoaded, fontError} = UseFontsCostumize()

    const navigation = useNavigation()

    const handleLogin = async() => {
        try {
            if( !email || !senha ) {
                Alert.alert('Por favor, preecha todos os campos')
                return;
            }

            const response = await loginUser(email, senha)
            
            const tipo = response.user.tipo
            const user_id = response.user.id

            await AsyncStorage.setItem("user_id", user_id)

            console.log("usuário logado com id: ",user_id)

            Alert.alert('Sucesso', 'Usuário logado com sucesso');

            if( tipo === 'admin') {
                navigation.navigate('Rest')
            } else if ( tipo === 'user') {
                navigation.navigate('Main')
            }

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        onLayoutRootView(); 
    }, [onLayoutRootView]);
    
    if (!fontsLoaded && !fontError) {
        return null;
    }
    return(
    <DimissKeyBoard>
        <View style={styles.container}>
            <View style={styles.dalogo}>
                <Text style={styles.logo}>YumYelp</Text>
            </View>
            <View style={styles.login}>
                <Text style={styles.logintitle}>Login</Text>
                <View style={styles.form}> 
                    <View style={styles.boxInput}>
                        <Text style={styles.label}>Usuário</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Digite seu email'
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={styles.boxInput}>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Digite seu senha'
                            onChangeText={setSenha}
                        />
                            <View style={styles.localEsqSenhaOpacity}>
                                <TouchableOpacity style={styles.localEsqSenha}>
                                    <Text style={styles.esqpass}>Esqueceu a senha?</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                    <View style={{ width:'100%', alignItems:'center'}}>
                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={{color:'#fff', fontSize: 18,fontFamily:'Montserrat'}}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',width:320}}>
                        <Text style={styles.esqpass2}>Não tem uma conta?</Text>
                        
                        <TouchableOpacity style={{}} onPress={() => navigation.navigate('Continue')}>
                            <Text style={styles.esqpass3}> Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.icones}>
                        <TouchableOpacity>
                            <FontAwesome5 onPress={()=> navigation.navigate('Home')} name="google-plus" size={38} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome5 onPress={() => navigation.navigate('Home')} name="facebook" size={38} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </DimissKeyBoard>
)}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1F1C1C',
        alignItems:'center',
        // justifyContent: 'space-evenly'
    },
    logo:{
        color:'#fff',
        fontSize:50,
        fontFamily:'Italianno',
        textAlign:'center',
        margin:20
    },
    dalogo:{
        width:'100%',
        // marginTop:35,
    },
    login:{
        backgroundColor: '#681A1A',
        height: 600,
        width: '90%',
        borderRadius: 14,
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 20, 
        justifyContent: 'space-around'
    },
    logintitle:{
        fontSize:32,
        fontFamily:'Montaga',
        color:'#fff',
        // margin:20,
    },
    label:{
        color:'#fff',
        margin:5,
        fontFamily:'Montserrat'
    },
    input:{
        height: 50,
        fontSize: 16,
        width: '100%',
        backgroundColor: '#D9D9D9',
        padding: 14,
        borderRadius:24,
    },
    boxInput:{
        marginBottom:35,
        width: '85%'
    },
    icones:{
        flexDirection:'row',
        gap:10,
        justifyContent:'center',
        marginTop:20,
    },
    esqpass:{
        color:'#fff',
        width: '100%',
        paddingTop: 10,
        fontFamily:'Montserrat',
        textAlign:'center',
        fontSize: 12
    },
    esqpass2:{
        color:'#fff',
        paddingTop: 18,
        marginLeft:30,
        fontFamily:'Montserrat',
        fontSize:14,
    },
    esqpass3:{
        color:'red',
        paddingTop: 18,
        fontFamily:'Montserrat',
        fontSize:16,
    },
    localEsqSenhaOpacity:{
        alignItems:'flex-end',
        width: '100%'
    },
    localEsqSenha:{
        width:150,
    },
    button:{
        alignItems: 'center',
        padding: 10,
        width: '80%',
        borderRadius:24,
        color: 'white',
        backgroundColor: '#C61515'
    },
    form: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: '80%',
        justifyContent: 'center'
    }
}) 
export default Login