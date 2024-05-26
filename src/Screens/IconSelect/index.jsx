import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Text,
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  import AntDesign from '@expo/vector-icons/AntDesign';

  
  
  const Icones = () =>{
     const navigation = useNavigation();
     const handlePress = () => {
       navigation.navigate('Conta');
    };
  
    return(
      <View style={styles.container}>
           <TouchableOpacity style={styles.retornar} onPress={handlePress}>
              <AntDesign name="doubleleft" size={38} color="white" />
              <Text style={{color:"#fff",fontSize:15,marginLeft:5}}>Voltar</Text>
            </TouchableOpacity>
      
          <ScrollView style={styles.conjunto}>
          <View style={styles.gradeIcons}>
                <TouchableOpacity style={styles.icon}>
                    <Image style={styles.images} source={require('../../../assets/images/imagesIcons/2703297-restaurant-food-and-cuisine-chef-avatar-profile-character-icon-cartoons-vector-illustration-graphic-design-gratis-vetor.jpg')}/>
                </TouchableOpacity>
  
                <TouchableOpacity style={styles.icon}>
                    <Image style={styles.images} source={require('../../../assets/images/imagesIcons/45d4072c4343223678fbbd4e8ddc5359d96397f6_00.jpg')}/>
                </TouchableOpacity>
  
          </View>
  
           <View style={styles.gradeIcons}>
              <TouchableOpacity style={styles.icon}>
                  <Image style={styles.images} source={require('../../../assets/images/imagesIcons/9468980bf4cb8102bbf1ceb674237794.jpg')}/>
              </TouchableOpacity>
  
              <TouchableOpacity style={styles.icon}>
                  <Image style={styles.images} source={require('../../../assets/images/imagesIcons/dgsgt03-7da011d4-e515-4664-ae67-6d4a498917d3.jpg')}/>
              </TouchableOpacity>
  
          </View>
  
           <View style={styles.gradeIcons}>
                <TouchableOpacity style={styles.icon}>
                    <Image style={styles.images} source={require('../../../assets/images/imagesIcons/FAd_szmWEAEB418.jpg')}/>
                </TouchableOpacity>
  
                <TouchableOpacity style={styles.icon}>
                    <Image style={styles.images} source={require('../../../assets/images/imagesIcons/gaguinho.webp')}/>
                </TouchableOpacity>
  
          </View>
  
           <View style={styles.gradeIcons}>
                <TouchableOpacity style={styles.icon}>
                    <Image style={styles.images} source={require('../../../assets/images/imagesIcons/e9252105003808546b2c38752b4c84be.jpg')}/>
                </TouchableOpacity>
  
                <TouchableOpacity style={styles.icon}>
                    <Image style={styles.images} source={require('../../../assets/images/imagesIcons/PUMBSITE-6020x315.jpg')}/>
                </TouchableOpacity>
  
          </View>
           <View style={styles.gradeIcons}>
                <TouchableOpacity style={styles.icon}>
                    <Image style={styles.images} source={require('../../../assets/images/imagesIcons/TIMAOSITE-650x650.jpg')}/>
                </TouchableOpacity>
  
                <TouchableOpacity style={styles.icon}>
                    <Image style={styles.images} source={require('../../../assets/images/imagesIcons/rato.png')}/>
                </TouchableOpacity>
  
  
          </View>
  
          </ScrollView>
      </View>
    )
  }
  export default Icones
  
  const styles =StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#303030',
      
    },
    gradeIcons:{
       flexDirection:'row'
    },
    conjunto:{
      width:'100%',
      marginHorizontal:'5%'
    },
    
    retornar:{
      marginTop:40,
      marginLeft:15,
      alignItems:'center',
      width:60,
      flexDirection:'row',
     },
  
    icon:{
      width:150,
      height:150,
      margin:18
    },
  
    images:{
      width:'100%',
      height:'100%',
      borderRadius:100,
      resizeMode:'cover',
    },
  
  
  
  })
  