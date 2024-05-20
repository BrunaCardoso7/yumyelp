import { TouchableOpacity, View, Text } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";

function ImageFile () {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
    return (
        <TouchableOpacity onPress={pickImage}>
            <View style={{
                width: 500,
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