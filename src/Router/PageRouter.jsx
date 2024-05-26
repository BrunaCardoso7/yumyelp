import { createStackNavigator } from "@react-navigation/stack";
import Login from '../Screens/Login/index';
import Register from '../Screens/Register/index';
import Cardapio from '../Screens/Cardapio/index';
import ContinueWith from '../Screens/Continue/index';
import CardapioRegister from '../Screens/CardapioRegister/index ';
import MyTabs from ".";

const Stack = createStackNavigator()

function RouterPages () {
    return(
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Continue" component={ContinueWith}/>
            <Stack.Screen name="Cardapio" component={Cardapio}/>
            <Stack.Screen name="CardRegister" component={CardapioRegister}/>
            <Stack.Screen name="Main" component={MyTabs}/>
        </Stack.Navigator>
    )
}

export default RouterPages