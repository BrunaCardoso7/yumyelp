import {View, Image,StyleSheet, Text, TextInput, TouchableOpacity, Alert,} from 'react-native'
import { UseFontsCostumize } from '../../hooks/useFontsCustomize';
import { useEffect, useState } from 'react';
import DimissKeyBoard from '../../config/DimissKeyBoard';
import createUser from '../../api';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Register({route}) {
    const {data} = route.params
    const {onLayoutRootView, fontsLoaded, fontError} = UseFontsCostumize()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigation = useNavigation()

    console.log(data)

    const hadleRegister = async() => {
        try {

            if(!nome || !email || !senha ) {
                Alert.alert('Por favor, preecha todos os campos')
                return;
            }

            const response = await createUser(nome, email, senha, data)

            console.log("response: "+response.data.user.id)
            Alert.alert('Sucesso', 'Usuário criado com sucesso');
            await AsyncStorage.setItem("userId",response.data.user.id)
            
            if( data === 'admin') {
                navigation.navigate('Rest')
            } else if ( data === 'user') {
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

    return (
        <DimissKeyBoard>
                <View style={style.screenConteiner}>
                    <TouchableOpacity 
                        onPress={() => navigation.goBack()}
                        style={{
                            width: '100%',
                            position: 'absolute',
                            top: 18,
                            left: 18,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <AntDesign name="left" size={24} color="white" />
                        <Text style={{
                            color: 'white',
                            fontSize: 18,
                            marginLeft: 20
                        }}>Voltar</Text>
                    </TouchableOpacity>

                <Text style={style.titleLogo}>YumYelp</Text>
                <View style={style.formConteiner}>
                    <View style={style.conteinerFormContent}>
                    <View 
                        style={{
                            display: 'flex',
                            gap: 14,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%'
                        }}
                    >
                        <Text style={style.textSecundaryStyle}>Cadastro</Text>
                    </View>
                    <View style={style.inputConteiner}>
                        <View style={style.label}>
                            <View style={{width: '80%', }}>
                                <Text style={{color: 'white'}}>Usuario</Text>    
                            </View>
                        <TextInput
                            style={style.inputStyle}
                            placeholder='nome de usuario'
                              onChangeText={setNome}
                        />
                        </View>
                    <View style={style.label}>
                    <View style={{width: '80%', }}>
                            <Text style={{color: 'white'}}>email</Text>
                    </View>
                    <TextInput
                            style={style.inputStyle}
                            placeholder='email'
                          onChangeText={setEmail}
                        />
                    </View>
                    <View style={style.label}>
                    <View style={{width: '80%', }}>
                            <Text style={{color: 'white'}}>senha</Text>
                    </View>
                        <TextInput
                            style={style.inputStyle}
                            placeholder='senha'
                          onChangeText={setSenha}
                        />
                        <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
                            <Text style={style.esqpass}>Já possou uma conta</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={style.button} onPress={hadleRegister}>
                        <Text style={{color:'#fff', fontSize: 18}}>Criar conta</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                    </View>   
            </View>
        </DimissKeyBoard>
    );
}

const style = StyleSheet.create({
    conteiner: {
        flex: 1,
    },
    titleLogo: {
        color:'#fff',
        fontSize:50,
        fontFamily:'Italianno',
        textAlign:'center'
    },
    screenConteiner: {
        padding: 24,
        backgroundColor: '#1F1C1C',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    esqpass:{
        color:'#fff',
        width: '100%',
        textAlign: 'center',
        paddingTop: 10
    },
    formConteiner: {
        backgroundColor: '#681A1A',
        height: 600,
        width: '100%',
        borderRadius: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    inputConteiner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '80%',
        width: '100%'
    },
    inputStyle: {
      height: 50,
      fontSize: 16,
      width: '85%',
      backgroundColor: '#D9D9D9',
      padding: 10,
      borderRadius:34,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        fontSize: 28,
        width: '80%',
        borderRadius:24,
        color: 'white',
        backgroundColor: '#C61515'
    },
    label:{
        width: '100%',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    textSecundaryStyle: {
        fontSize:32,
        fontFamily:'Montaga',
        color: 'white',
        fontSize: 28,
    },
    textDefault:{
        fontFamily: 'Montserrat-Regular',
        color: 'white',
        fontSize: 18,
    },
    conteinerFormContent: {
        paddingVertical: 20,
        height: '90%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default Register;
