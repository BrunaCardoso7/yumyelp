import { createStackNavigator } from "@react-navigation/stack";
import Login from '../Screens/Login/index';
import Register from '../Screens/Register/index';
import Cardapio from '../Screens/Cardapio/index';
import ContinueWith from '../Screens/Continue/index';
import CardapioRegister from '../Screens/CardapioRegister';
import MyTabs from ".";
import RestauranteStack from "./RestauranteRouter";

const Stack = createStackNavigator()

function RouterPages (token) {
    
    console.log(token)
    return(
        <Stack.Navigator initialRouteName={!token || token===null || token === undefined ? "Login" : "Main"} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Continue" component={ContinueWith}/>
            <Stack.Screen name="Cardapio" component={Cardapio}/>
            <Stack.Screen name="CardRegister" component={CardapioRegister} />
            <Stack.Screen name="Rest" component={RestauranteStack}/>
            <Stack.Screen name="Main" component={MyTabs}/>
        </Stack.Navigator>
    )
}

export default RouterPages