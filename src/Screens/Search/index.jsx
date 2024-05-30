import {View,TextInput,StyleSheet,TouchableOpacity, Text} from  'react-native';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform} from "react-native";
import {useState} from 'react'
import Feather from '@expo/vector-icons/Feather';
import Header from '../../Components/Header';

const Search = () =>{
  const [exib,setExib] = useState(true)
  const limpa = () => {
  return(
    setExib(false)
  )
  }
  const mostra = () =>{
    return(
      setExib(true)
    )
  }
  return(
     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{
                    flex: 1,
                }}
            >
                <View style={styles.container}>
                <Header/>
                  <View style={styles.searchContainer}>
                        <TextInput
                        placeholder='Pesquise algum restaurante'
                        style={styles.busca}
                        onFocus={limpa}
                        onBlur={mostra}
                        >
                        </TextInput>
                        <TouchableOpacity>
                          <Feather style={styles.iconSearch} name="search" size={24} color="white" />
                        </TouchableOpacity>
                  </View>
                  <View style={styles.conteinerContent} >
                    <Text style={styles.titleSearch}>Nenhum restaurante foi pesquisado...</Text>
                  </View>
                </View>   
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
  )
}

export default Search

const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#1F1C1C',
    },
    busca:{
      backgroundColor: '#D9D9D9',
      borderRadius:15,
      width:'80%',
      height:40,
      justifyContent: 'center',
      paddingHorizontal: 14,
    },
    searchContainer:{
      alignItems:'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: 14,
      marginTop:30,
    },
    iconSearch: {
      backgroundColor: "#681A1A",
      padding: 10,
      borderRadius: 100
    },
    titleSearch: {
      color: 'white',
      fontFamily: 'Montserrat-SemiBold'
    },
    conteinerContent: {
      padding: 32,
      flex: 2,
      alignItems: 'center'
    }

  }
)