import {View,TextInput,StyleSheet,TouchableOpacity} from  'react-native';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform} from "react-native";
import {useState} from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
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
                                />
                              {exib ? (
                                <View style={styles.icones}>
                                <FontAwesome5 name="search" size={24} color="black" />
                                </View>
                              ):null}
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
      width:'90%',
      height:40,
      alignItems: 'center',
      paddingHorizontal: 14,
      marginTop:30,
    },
    icones:{
      bottom:33,
      left:140,
    },

    searchContainer:{
      alignItems:'center',
    },
  }
)