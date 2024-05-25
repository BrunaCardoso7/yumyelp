import {
    StyleSheet,
    Text,
    View,
    SectionList,
    SafeAreaView,
    Image,
    FlatList
  } from 'react-native';
  import {useEffect} from 'react'; 
  import { UseFontsCostumize } from '../../../../hooks/useFontsCustomize';
  import { LinearGradient } from 'expo-linear-gradient';
  
  export const imageSources = {
    image1: require('../../../../../assets/images/imagesRestaurantes/rest2.jpg'),
    image2: require('../../../../../assets/images/imagesRestaurantes/rest3.jpg'),
  };
  
  const ListItem = ({ item }) => {
    
      const {onLayoutRootView, fontsLoaded, fontError} = UseFontsCostumize()
  
      useEffect(() => {
        onLayoutRootView(); 
      }, [onLayoutRootView]);
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
  
    return (
      <View onLayout={onLayoutRootView} style={styles.item}>
          <Image
            source={item.uri}
            style={styles.itemPhoto}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['transparent','rgba(0,0,0,0.6)']}
            style={styles.background}/>
            <Text style={styles.itemText}>{item.text}</Text>
        </View>
      
    );
  };
  
  export default () => {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <SectionList
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            sections={SECTIONS}
            renderSectionHeader={({ section }) => (
              <>
                <Text style={styles.sectionHeader}>{section.title}</Text>
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              </>
            )}
            renderItem={({ item, section }) => {
              return null;
            }}
          />
        </SafeAreaView>
      </View>
    );
  };
  
  const SECTIONS = [
    {
      title: 'Boas Avaliações',
      data: [
        {
          key: '1',
          text: 'Restaurante',
          uri: imageSources.image1,
        },
        {
          key: '2',
          text:'Bar do canario',
          uri: imageSources.image2,
        },
  
        {
          key: '3',
          text:'Restaurante oloko meu mano',
          uri: imageSources.image1,
        },
        {
          key: '4',
          uri: imageSources.image1,
        },
        {
          key: '5',
          uri: imageSources.image2,
        },
      ],
    },
    {
      title: 'Comidas Típicas',
      data: [
        {
          key: '1',
          uri: imageSources.image1,
        },
        {
          key: '2',
          uri: imageSources.image2,
        },
  
        {
          key: '3',
          uri: imageSources.image1,
        },
        {
          key: '4',
          uri: imageSources.image2,
        },
        {
          key: '5',
          uri: imageSources.image1,
        },
      ],
    },
    {
      title: 'Novidades na cidade',
      data: [
        {
          key: '1',
          uri: imageSources.image1,
        },
        {
          key: '2',
          uri: imageSources.image2,
        },
  
        {
          key: '3',
          uri: imageSources.image1,
        },
        {
          key: '4',
          uri: imageSources.image1,
        },
        {
          key: '5',
          uri: imageSources.image2,
        },
      ],
    },
  ];
  
  const styles = StyleSheet.create({
    sectionHeader: {
      fontSize: 22,
      color: '#fff',
      marginTop: 5,
      marginBottom: 5,
      fontFamily:'Montserrat',
    },
  
    item: {
      height:315,
      width:210,
      margin: 10, 
      alignItems:'center',
      justifyContent:'flex-end',
      flexDirection:'collumn'
    },
  
    itemPhoto: {
      width: '100%',
      height: '100%',
      borderRadius:7,
    },
  
    itemText: {
      color: '#fff',
      fontSize:30,
      position:'absolute',
      paddingBottom:'20%',
      textAlign:'center',
      fontFamily:'InriaSerif',
    },
  
    background:{
      ...StyleSheet.absoluteFillObject,
          borderRadius:7,
  
    },
  
  });