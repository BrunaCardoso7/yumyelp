import * as React from 'react';
import Cardapio from './src/Screens/Cardapio';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

// const Tab = createBottomTabNavigator();

// function MyDrawer() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Cardapio" component={Cardapio} />
//       {/* <Tab.Screen name="Article" component={Article} /> */}
//     </Tab.Navigator>
//   );
// }
function Header ( ) {
  return (
    <View 
      style={{
        backgroundColor: '#681A1A',
        width: screenWidth,
        height: 100,
      }}
    >
      <Text>tedst</Text>
    </View>
  )
}

export default function App() {
  return (
    <View>
      <Header/>
      <Cardapio />
    </View>
  );
}
