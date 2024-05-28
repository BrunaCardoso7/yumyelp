import {View,TouchableOpacity,Text,StyleSheet} from 'react-native'
import { UseFontsCostumize } from '../../hooks/useFontsCustomize';
import {useEffect} from 'react'; 
import { useNavigation } from '@react-navigation/native';


const Header = () =>{
  const navigation = useNavigation();
  const {onLayoutRootView, fontsLoaded, fontError} = UseFontsCostumize()

  useEffect(() => {
    onLayoutRootView(); 
  }, [onLayoutRootView]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handlePress = () => {
     navigation.navigate('Home');
  };

  return(
    <View 
    onLayout={onLayoutRootView}
    style={{
        backgroundColor: '#681A1A',
        width: "100%",
        height: 70,
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingTop: 0,
    }}
    >
      <TouchableOpacity onPress={handlePress}>
        <Text style={{
            color: 'white',
            fontFamily: 'Italianno-Regular',
            fontSize: 48,
        }}>YumYelp</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header