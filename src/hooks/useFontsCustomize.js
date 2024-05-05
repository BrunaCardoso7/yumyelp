import { useCallback, useEffect} from 'react'; 
import { useFonts } from 'expo-font';
export const UseFontsCostumize = () => {
    const [fontsLoaded, fontError] = useFonts({
        'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'), 
        'InriaSerif-Regular': require('../../assets/fonts/InriaSerif-Regular.ttf'),
        'InriaSerif-Bold': require('../../assets/fonts/InriaSerif-Bold.ttf'),
        'Italianno-Regular': require('../../assets/fonts/Italianno-Regular.ttf'),
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);
    
    return{onLayoutRootView, fontsLoaded, fontError}
}