import { StyleSheet,Dimensions } from "react-native"
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    conteinerMain: {
        width: '100%',
        flex: 1,
    },
    imageStyle:{
        width: screenWidth,
        height: 230,
    },
    conteinerInfo:{
        backgroundColor: '#1F1C1C',
        height: '100%',
        padding: 14,
        gap:  28,
    },
    textTitle: {
      fontFamily: 'InriaSerif-Regular',
      color: '#ffffff',
      fontSize: 22,
    },
    textSubTitle: {
      fontFamily: 'Montserrat-Regular',
      color: '#ffffff',
      fontSize: 14,
    },
    textTiltePrimary: {
      fontFamily: 'InriaSerif-Bold',
      color: '#ffffff',
      fontSize: 16,
    },
    conteiner: {
      gap: 6,
    },
    conteinerProduct:{
      display: 'flex',
      margin: 10,
      gap: 6,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    moneyStyle: {
      color: '#00FF38',
    },
    products: {
      display: 'flex',
      flexDirection: 'row',
    },
    conteinerStar: {
      display: 'flex',
      flexDirection: 'row',
      gap: 6,
    },
    conteinerAva:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 12,
      padding: 14,
    },
    inputStyle: {
      height: 42,
      width: '100%',
      backgroundColor: 'white',
      padding: 8,
      borderRadius: 6,
    },
    bubbleComent: {
      backgroundColor: "#D9D9D9",
      width: '100%',
      height: 'fit-content',
      gap: 8,
      borderRadius: 14,
      padding: 10,
    },
    profileImage: {
      width: 40,
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      backgroundColor: '#767676',
    }
})
export default styles