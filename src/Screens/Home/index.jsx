import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'
import {useEffect} from 'react'; 
import { UseFontsCostumize } from '../../hooks/useFontsCustomize';
import * as SplashScreen from 'expo-splash-screen';
import SectionList from './Components/ListCard/index';
import FlatList from './Components/Slide/index';
import Header from '../../Components/Header/index'
    
    const Home = () => {
      
    SplashScreen.preventAutoHideAsync();
    
    const {onLayoutRootView, fontsLoaded, fontError} = UseFontsCostumize()
    
    useEffect(() => {
      onLayoutRootView(); 
    }, [onLayoutRootView]);
    
    if (!fontsLoaded && !fontError) {
      return null;
    }
     
      return(
        <View style={styles.container}>
        <Header/>
            <ScrollView style={styles.space}>
            <FlatList/>
            <SectionList/>
            </ScrollView>
        </View>
    
      )
    }
    const styles = StyleSheet.create({
        container:{
        flex:1,
        backgroundColor:'#1F1C1C',
        // marginTop:'7%'
        },    
        space:{
        flex:1,
        height:500,
        },
    })
    
export default Home