//Tab-Sreen
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import Home from '../Screens/Home/index'
import Search from '../Screens/Search/index';
import User from '../Screens/Configs/index';
import Conta from '../Screens/ProfileAccount/index';
import Seguranca from '../Screens/ProfileSecurity/index'
import Notificacao from '../Screens/ProfileNotification/index'
import Icones from '../Screens/IconSelect/index'
import Perfil from '../Screens/OuthProfile'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarShowLabel:false,
        tabBarStyle:{
          backgroundColor:'#0E0E0E',
          borderTopWidth: 0,
          height:60
        }
      }}
      >
      <Tab.Screen 
       options={{
         headerShown:false,
         tabBarIcon:({color,size,focused}) => {
           if(focused){
             return <Ionicons name='home' size={size} color={'white'}/>
           }else{
             return <Ionicons name='home-outline' size={size} color={color}/>
           }
         }
       }}
       name="Home" 
       component={Home} 
       />

       <Tab.Screen 
       options={{
         headerShown:false,
         tabBarIcon:({color,size,focused}) => {
           if(focused){
             return <Ionicons name='search' size={size} color={'white'}/>
           }else{
             return <Ionicons name='search-outline' size={size} color={color}/>
           }
         }
       }}
        name="Search" 
        component={Search} 
      />
      <Tab.Screen 
      options={{
        tabBarIcon:({color,size,focused}) => {
           if(focused){
             return <Ionicons name='people' size={size} color={'white'}/>
           }else{
             return <Ionicons name='people-outline' size={size} color={color}/>
           }
         },
         headerShown:false,
       }}
      name="Perfil" 
      component={Perfil} />

      <Tab.Screen
        name='Conta'
        component={Conta}
        options={{
          tabBarButton: () => null ,
          headerShown:false,
          tabBarStyle:{
            display:'none'
          }
        }}
      />

       <Tab.Screen
        name='Seguranca'
        component={Seguranca}
        options={{
          tabBarButton: () => null ,
          headerShown:false,
          tabBarStyle:{
            display:'none'
          }
        }}
      />

       <Tab.Screen
      name='User'
      component={User}
               options={{
               tabBarButton: () => null ,
               headerShown:false,
               tabBarStyle:{
                 display:'none'
               }
                             }}
      />

        <Tab.Screen
          name='Notificacao'
          component={Notificacao}
          options={{
            tabBarButton: () => null ,
            headerShown:false,
            tabBarStyle:{
              display:'none'
            }
          }}
      />

      <Tab.Screen
        name='Icones'
        component={Icones}
        options={{
          tabBarButton: () => null ,
          headerShown:false,
          tabBarStyle:{
            display:'none'
          }
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs