import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity 
} from 'react-native'
import {useEffect, useState} from 'react'; 
import { UseFontsCostumize } from '../../hooks/useFontsCustomize';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import DimissKeyBoard from '../../config/DimissKeyBoard';
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '../../api';

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

            navigation.navigate('Main')

            Alert.alert('Sucesso', 'Usuário criado com sucesso');
            navigation.navigate('Continue')
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
                        <TouchableOpacity  onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.esqpass}>Criar conta</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width:'100%', alignItems:'center'}}>
                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={{color:'#fff', fontSize: 18}}>Entrar</Text>
                        </TouchableOpacity>
                            <TouchableOpacity >
                                <Text style={styles.esqpass}>Esqueceu a senha?</Text>
                            </TouchableOpacity>
                    </View>
                    <View style={styles.icones}>
                        <TouchableOpacity>
                            <FontAwesome5 name="google-plus" size={38} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome5 name="facebook" size={38} color="white" />
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
        justifyContent: 'space-evenly'
    },
    logo:{
        color:'#fff',
        fontSize:50,
        fontFamily:'Italianno',
        textAlign:'center'
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
        textAlign: 'center',
        paddingTop: 10
    },
    button:{
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        fontSize: 28,
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