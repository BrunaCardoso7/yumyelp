import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Cardapio from "../Screens/Cardapio"
import { Ionicons } from "@expo/vector-icons"
import Inicio from "../Screens/Inicio"
import Register from "../Screens/Register"
import CardapioRegister from "../Screens/CardapioRegister/index "
import HomeTeste from "../Screens/Home"

const Tab = createBottomTabNavigator()

function TabNagation () {
 
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
          })}>
          <Tab.Screen 
          options={{
            headerTransparent: true,
            title: ''
          }}
          name="Inicio" 
          component={HomeTeste} 
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