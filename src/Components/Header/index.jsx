import {View, Text} from 'react-native'
import { UseFontsCostumize } from '../../hooks/useFontsCustomize'
import { Dimensions } from 'react-native';
import { useEffect } from 'react';
const screenWidth = Dimensions.get('window').width;
function Header () {
    const {onLayoutRootView, fontsLoaded, fontError} = UseFontsCostumize()
    useEffect(() => {
        onLayoutRootView(); 
    }, [onLayoutRootView]);

    if (!fontsLoaded && !fontError) {
    return null;
    }
    return (
        <View 
        onLayout={onLayoutRootView}
        style={{
            backgroundColor: '#681A1A',
            width: screenWidth,
            height: 90,
            display: 'flex',
            justifyContent: 'center',
            padding: 12,
            paddingTop: 24,
        }}
        >
        <Text style={{
            color: 'white',
            fontFamily: 'Italianno-Regular',
            fontSize: 38,
        }}>YumYelp</Text>
        </View>
    )
}
export default Header