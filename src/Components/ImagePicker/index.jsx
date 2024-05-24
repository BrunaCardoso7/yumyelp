import { TouchableOpacity, View, Text, Image } from "react-native";

function ImageFile ({imagem, pickImage}) {
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
                 {
                    imagem ? (
                        <Image 
                            source={{ uri: imagem }} 
                            style={{ width: '100%', height: '100%', borderRadius: 24 }}
                        />
                    ) : (
                        <Text>Adicione uma imagem</Text>
                    )
                }
            </View>
        </TouchableOpacity>
    )
}
export default ImageFile