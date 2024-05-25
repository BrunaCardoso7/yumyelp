import { useCallback, useEffect} from 'react'; 
import { useFonts } from 'expo-font';
export const UseFontsCostumize = () => {
    const [fontsLoaded, fontError] = useFonts({
        'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'), 
        'InriaSerif-Regular': require('../../assets/fonts/InriaSerif-Regular.ttf'),
        'InriaSerif-Bold': require('../../assets/fonts/InriaSerif-Bold.ttf'),
        'Italianno-Regular': require('../../assets/fonts/Italianno-Regular.ttf'),
        'RobotoSerif-Medium': require('../../assets/fonts/RobotoSerif-Medium.ttf'),
        'Montserrat-Light': require('../../assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
        'Italianno': require('../../assets/fonts/Italianno-Regular.ttf'),
        'InriaSerif': require('../../assets/fonts/InriaSerif-Regular.ttf'),
        'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'Montaga': require('../../assets/fonts/Montaga-Regular.ttf'),
        'ABC': require('../../assets/fonts/RobotoSerif-Regular.ttf'),
        'Roboto': require('../../assets/fonts/Roboto-Regular.ttf')
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);
    
    return{onLayoutRootView, fontsLoaded, fontError}
}