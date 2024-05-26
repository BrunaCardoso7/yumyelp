import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Cardapio from '../Screens/Cardapio/index';
import CardapioRegister from '../Screens/CardapioRegister/index.jsx';
import MyTabs from ".";
import PratosView from "../Screens/Pratos";
import PratoRegister from "../Screens/PratosRegister"


const Stack = createStackNavigator();

function RestauranteStack() {
  return (
    <Stack.Navigator initialRouteName="PratosView" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cardapio" component={Cardapio} />
      <Stack.Screen name="CardRegister" component={CardapioRegister} />
      <Stack.Screen name="PratosView" component={PratosView} />
      <Stack.Screen name="PratoRegister" component={PratoRegister} />
      <Stack.Screen name="Main" component={MyTabs} />
    </Stack.Navigator>
  );
}

export default RestauranteStack;
