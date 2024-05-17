import {View, Image,StyleSheet, Text, TextInput, TouchableOpacity, Alert,} from 'react-native'
import { UseFontsCostumize } from '../../hooks/useFontsCustomize';
import { useEffect, useState } from 'react';
import DimissKeyBoard from '../../config/DimissKeyBoard';
import createUser from '../../api';


function Register() {
    const {onLayoutRootView, fontsLoaded, fontError} = UseFontsCostumize()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    // const getUser = async() => {
    //     try {
    //         const user = await createUser()
    //          console.log(user)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    useEffect(async()=>{
        const user = await createUser()
        console.log(user)
    }, [])
    // getUser()

    const hadleRegister = async() => {
        try {
            const formData = new FormData()

            if(!nome || !email || !senha ) {
                Alert.alert('Por favor, preecha todos os campos')
                return;
            }

            formData.append("nome", nome) 
            formData.append("email", email)
            formData.append("senha", senha)

            const response = await createUser(formData)

            console.log(response)
            Alert.alert('Sucesso', 'Usuário criado com sucesso');
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
                <Text style={style.titleLogo}>YumYelp</Text>
                <View style={style.formConteiner}>
                    <View style={style.conteinerFormContent}>
                    <View 
                        style={{
                            display: 'flex',
                            gap: 14,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Text style={style.textSecundaryStyle}>Cadastro</Text>
                        <Text style={style.textDefault}>Conta de usuário</Text>
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
                    </View>
                    </View>
                    <TouchableOpacity style={style.button} onPress={hadleRegister}>
                        <Text style={{color: 'white'}}>Criar conta</Text>
                    </TouchableOpacity>
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
        fontFamily: 'Italianno-Regular',
        color: 'white',
        textAlign: 'center',
        fontSize: 52,
        marginBottom: 50,
    },
    screenConteiner: {
        padding: 24,
        backgroundColor: '#1F1C1C',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
        height: '55%',
        width: '100%'
    },
    inputStyle: {
      height: 50,
      fontSize: 16,
      width: '85%',
      backgroundColor: 'white',
      padding: 10,
      borderRadius:14,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 18,
        fontSize: 24,
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
        fontFamily: 'RobotoSerif-Medium',
        color: 'white',
        fontSize: 28,
    },
    textDefault:{
        fontFamily: 'Montserrat-Regular',
        color: 'white',
        fontSize: 18,
    },
    conteinerFormContent: {
        height: '90%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default Register;
