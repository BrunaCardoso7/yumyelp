import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Cardapio from "../Screens/Cardapio"
import { Ionicons } from "@expo/vector-icons"
import Inicio from "../Screens/Inicio"
import { UseFontsCostumize } from "../hooks/useFontsCustomize"
import { useEffect } from "react"

const Tab = createBottomTabNavigator()

function TabNagation () {
  const {onLayoutRootView, fontsLoaded, fontError} = UseFontsCostumize()
  useEffect(() => {
      onLayoutRootView(); 
  }, [onLayoutRootView]);

  if (!fontsLoaded && !fontError) {
  return null;
  }
     return (
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({ focused, color, size}) =>{
              let iconName;

              if (route.name === 'Inicio') {
                iconName = 'home-outline' 

              }else if (route.name === 'Cardapio') {
                iconName = 'fast-food-outline' 
              }
              return <Ionicons name={iconName} size={size} color={color}/>
            },
            tabBarActiveTintColor: '#681A1A',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen 
          options={{
            headerTransparent: true,
            title: ''
          }}
          name="Inicio" 
          component={Inicio} 
        />
          <Tab.Screen
            options={{
              headerTransparent: true,
              title: ''
            }}
            name="Cardapio"  
            component={Cardapio} 
          />
        </Tab.Navigator>
     )
}

export default TabNagation