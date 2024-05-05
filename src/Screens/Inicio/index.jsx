import { View, Text } from "react-native"
function Inicio ({navigation}) {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: '#1F1C1C',
        }}>
            <Text
                onPress={()=> navigation.navigate('Cardapio')}
            >
                Home
            </Text>
        </View>
    )
}
export default Inicio