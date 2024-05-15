import {View, Image,StyleSheet, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import { UseFontsCostumize } from '../../hooks/useFontsCustomize';
import { useEffect } from 'react';
function Register() {
    const {onLayoutRootView, fontsLoaded, fontError} = UseFontsCostumize()

    useEffect(() => {
      onLayoutRootView(); 
    }, [onLayoutRootView]);
  
    if (!fontsLoaded && !fontError) {
      return null;
    }

    return (
        <View style={style.screenConteiner}>
            <Text style={style.titleLogo}>YumYelp</Text>
            <View style={style.formConteiner}>
                <Text>Cadastro</Text>
                <Text>Conta de usuário</Text>
                <View style={style.inputConteiner}>
                    <View style={style.label}>
                        <Text>Usuario</Text>
                    <TextInput
                        style={style.inputStyle}
                        placeholder='nome de usuario'
                        //   onChangeText={setInputValue}
                    />
                    </View>
                   <View style={style.label}>
                   <Text>email</Text>
                   <TextInput
                        style={style.inputStyle}
                        placeholder='email'
                    //   onChangeText={setInputValue}
                    />
                   </View>
                  <View style={style.label}>
                  <Text>senha</Text>
                    <TextInput
                        style={style.inputStyle}
                        placeholder='senha'
                    //   onChangeText={setInputValue}
                    />
                  </View>
                </View>
                <TouchableOpacity style={style.button}>
                    <Text style={{color: 'white'}}>Criar conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
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
        height: '45%',
        width: '100%'
    },
    inputStyle: {
      height: 42,
      width: '85%',
      backgroundColor: 'white',
      padding: 10,
      borderRadius:24,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
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
    }
})

export default Register;
