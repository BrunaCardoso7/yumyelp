import {
    View,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList,
    Dimensions
} from 'react-native'
import {useEffect,useState,useRef} from 'react';
    
    
const imageSources = {
    image1: require('../../../../../assets/images/imagesRestaurantes/coco-bambu.jpg'),
    image2: require('../../../../../assets/images/imagesRestaurantes/prato.jpg'),
    image3: require('../../../../../assets/images/imagesRestaurantes/SantaGrelha.jpg'),
    image4: require('../../../../../assets/images/imagesRestaurantes/caption.jpg'),
    image5: require('../../../../../assets/images/imagesRestaurantes/ryori.jpg'),
    image6: require('../../../../../assets/images/imagesRestaurantes/sushi.jpg'),

};


const DATA = [
    {
    id:'01',
    images:{
        uri1: imageSources.image1,
        uri2: imageSources.image2,
    },
    title:'Coco Bambu',
    desc:'O Coco Bambu Teresina possui uma ampla estrutura com diversidade de ambientes para que o cliente possa escolher aquele que melhor o agrada.'
    },
    {
    id:'02',
    images:{
        uri1: imageSources.image3,
        uri2: imageSources.image4,
    },
    title:'Santa Grelha',
    desc:'O Santa Grelha oferece um cardápio especificado em grelhados premium, preparados com perfeição na sua sagrada churrasqueira a carvão.'
    },
    {
    id:'03',
    images:{
        uri1: imageSources.image5,
        uri2: imageSources.image6,
    },
    title:'Ryori',
    desc:'O Restaurante Ryori é conhecido por oferecer o melhor da gastronomia oriental, com uma cozinha moderna, sofisticada e criativa.'
    }
];

const List = () => {

    let screenWidth = Dimensions.get("window").width //obtem o tamanho da tela em que está sendo usado
    let [activeIndex,setActiveIndex] = useState(0);
    const flatListRef = useRef()
    
    //usado para mover o slide em intervalos de tempo
    //e p if é usado para fazer voltar ao primeiro indice
        useEffect (() => {
        let interval = setInterval(() => {
            if (activeIndex === DATA.length - 1) {
                flatListRef.current.scrollToIndex({ // faz com a lista va para o indice esperado
                    index: 0,
                    animation: true,
                });
            } else {
                flatListRef.current.scrollToIndex({
                    index: activeIndex + 1,
                    animation: true,
                });
            }
        }, 3000);

        return () => clearInterval(interval);
    })

    const getItemLayout = (data, index) => ({
        length: screenWidth,
        offset: screenWidth * index, 
        index: index,
    });

    const handScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index =Math.round(scrollPosition/screenWidth)
        setActiveIndex(index)
    }

    //Quando o slide for selecionado o indicador muda de cor
    const localCarroussel = () =>{
        return DATA.map( (dot , index) => {
            if(activeIndex === index){
            return(
                <View style={styles.indicadorS}>
                </View>
            )
            } else{
            return(
                <View key={index} style={styles.indicador}></View>
            )
            }
        
        });
    }

    return(
        <View>
        <FlatList
            horizontal={true}
            pagingEnabled={true}
            ref={flatListRef}
            getItemLayout={getItemLayout}
            onScroll={handScroll}
            keyExtractor={(item) => item.id}
            data={DATA}
            renderItem={({ item, index}) => <Slide item={item} />}
            
        />
            <View style={styles.indicadorMove}>{localCarroussel()}</View>
        </View>
    )
}
export default List

const Slide = ({item}) => {
    const { uri1, uri2 } = item.images;
    return(
        <View style={styles.info}>
            <Image style={styles.image1} source={uri1}/>
                <View style={styles.overlay}></View>
                <View style={styles.minibox}>
                <Image style={styles.image2} source={uri2}/>
                <View style={styles.descricao}>
                    <Text style={styles.titleInfo}>{item.title}</Text>
                    <Text style={styles.textdesc}>{item.desc}</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.redirect}>Saiba Mais</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}




const styles=StyleSheet.create({
    info:{
        flex:1,
            width: Dimensions.get("window").width,
            height:230,
        },
        overlay:{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
        },
        image1:{
            resizeMode:'cover',
            width:'100%',
            height:'100%',
        },
        indicador:{
            width:10,
            height:10,
            borderRadius:5,
            backgroundColor:'rgba(192,192,192,0.4)',
        },
        indicadorS:{
            width:12,
            height:12,
            borderRadius:7,
            backgroundColor:'rgba(255,0,0,0.4)',
        },
        indicadorMove:{
            gap:3,
            marginRight:10,
            bottom:20,
            flexDirection:'row',
            justifyContent:'flex-end',
        },
        minibox:{
            top:'15%',
            left:30,
            flexDirection:'row',
            position:'absolute',
        },
    
        image2:{
            width:122,
            height:146,
            borderRadius:15,
            marginTop:10,
            resizeMode:'cover',
        },
    
        descricao:{
            width:'66%',
            height:'100%',
            paddingLeft:10,
        },
        titleInfo:{
            fontSize:30,
            color:'#fff',
            fontFamily:'InriaSerif'
        },
        textdesc:{
            flexWrap:'wrap',
            color:'#fff',
            fontFamily:'Montserrat',
            fontSize: 12,
            textAlign: 'justify'
        },
        
        button:{
            width:142,
            height:33,
            marginLeft:30,
            marginTop:10,
            borderRadius:20,
            backgroundColor:'#7D2121',
            justifyContent:'center',
            alignItems:'center',
        
        },
        redirect:{
            color:'#fff'
        },
})