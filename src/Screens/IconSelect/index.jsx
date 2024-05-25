import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView
  } from 'react-native';
  import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
  import { useNavigation } from '@react-navigation/native';
  
  
  const Icones = () =>{
     const navigation = useNavigation();
     const handlePress = () => {
       navigation.navigate('Conta');
    };
  
    return(
      <View style={styles.container}>
         <View style={styles.retornar} >
            <FontAwesome5 name="angle-double-left" size={44} color="white" onPress={handlePress} />
          </View>
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
      display: 'flex',
      alignItems: 'center',
      justifyContent:  'center',
    },
    gradeIcons:{
       flexDirection:'row'
    },
    conjunto:{
    //   alignItems:'center'
    },
    
    retornar:{
      marginTop:40,
      marginLeft:15,
      display: 'flex',
      justifyContent: 'flex-start',
      width:40,
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
  