import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform} from "react-native";

function DimissKeyBoard ({ children }) {
    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{
                    flex: 1,
                }}
            >
            {children}
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default DimissKeyBoard