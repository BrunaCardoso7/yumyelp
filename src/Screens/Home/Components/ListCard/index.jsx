import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity  
} from 'react-native';
import { useCallback, useEffect, useState } from 'react'; 
import { UseFontsCostumize } from '../../../../hooks/useFontsCustomize';
import * as SplashScreen from 'expo-splash-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { getById, getRestaurantes } from '../../../../api'
import { useNavigation, useFocusEffect } from "@react-navigation/native";

const ListItem = ({ item }) => {
  const { onLayoutRootView, fontsLoaded, fontError } = UseFontsCostumize();
  const navigation = useNavigation()

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const hadleDataId = async() => {
    try {
      const id = item.id
      console.log(id)
      const response = await getById(id)

      console.log(response)
      navigation.navigate('Cardapio', {data: response})
      return response
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <TouchableOpacity onPress={hadleDataId} onLayout={onLayoutRootView} style={styles.item}>
      <Image
        source={{ uri: item.imagem }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.6)']}
        style={styles.background} />
      <Text style={styles.itemText}>{item.nome}</Text>
    </TouchableOpacity>
  );
};

export default () => {
  const [data, setData] = useState([]);
  const { onLayoutRootView, fontsLoaded, fontError } = UseFontsCostumize();


  async function getData() {
    try {
      const response = await getRestaurantes();
      const formattedData = formatData(response.restaurante);
      setData(formattedData);
    } catch (error) {
      console.error('Erro ao buscar restaurantes', error);
    }
  }

  function formatData(restaurantes) {
    const categories = {};

    restaurantes.forEach(restaurante => {
      if (!categories[restaurante.categoria]) {
        categories[restaurante.categoria] = [];
      }
      categories[restaurante.categoria].push(restaurante);
    });

    return Object.keys(categories).map(category => ({
      title: category,
      data: categories[category]
    }));
  }
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );
  console.log("dados fora do estado: ", data);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={data}
          keyExtractor={(item) => item.id}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              <FlatList
                horizontal
                data={section.data}
                renderItem={({ item }) => <ListItem item={item} />}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
              />
            </>
          )}
          renderItem={() => null}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 22,
    color: '#fff',
    marginTop: 5,
    marginBottom: 5,
    fontFamily: 'Montserrat',
  },

  item: {
    height: 315,
    width: 210,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },

  itemPhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 7,
  },

  itemText: {
    color: '#fff',
    fontSize: 30,
    position: 'absolute',
    paddingBottom: '20%',
    textAlign: 'center',
    fontFamily: 'InriaSerif',
  },

  background: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 7,
  },
});
