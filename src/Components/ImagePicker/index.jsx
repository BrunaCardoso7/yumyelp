import { TouchableOpacity, View, Text } from "react-native";

function ImageFile ({pickImage}) {
    return (
        <TouchableOpacity 
          style={{
            width: '90%',
            marginTop: 14,
          }}
          onPress={pickImage}
        >
            <View style={{
                width: '100%',
                height: 200,
                backgroundColor: 'white',
                borderRadius: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Adicione uma imagem</Text>
            </View>
        </TouchableOpacity>
    )
}
export default ImageFile