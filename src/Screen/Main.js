import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Image,
} from 'react-native'
import CardView from 'react-native-cardview'
import IconEntypo from 'react-native-vector-icons/Entypo'
import IconAnt from 'react-native-vector-icons/AntDesign'
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons'
import MainFilter from './MainFilter'
import Filter from './Filter'

export default function Main() {
    return (
        <ScrollView>
            <Header />
            <Search />
            <Filter/>
            <Offer />
            <RowSamllFiter />
            <Text style={{ fontWeight: 'bold', marginLeft: 14, fontSize: 20 }}>Eat what makes you happy</Text>
            <ColumnSubFilter />
            <Text style={{ fontWeight: 'bold', marginLeft: 14, fontSize: 20 }}>
                Latest offers
            </Text>
            <Latestoffer />
            <Text style={{ fontWeight: 'bold', marginLeft: 14, fontSize: 20 }}>
                1566 restaurants around you
            </Text>
            <MainFilter/>
        </ScrollView>
    )
}

const image = [
    require('D:/project/9.1.2021/quardB/assets/maxSafety.jpg'),
    require('D:/project/9.1.2021/quardB/assets/Leaf.png'),
    require('D:/project/9.1.2021/quardB/assets/Trending.png'),
    require('D:/project/9.1.2021/quardB/assets/pro.png')
]

const pic = [
    require('D:/project/9.1.2021/quardB/assets/Pizza.jpg'),
    require('D:/project/9.1.2021/quardB/assets/burger.jpg'),
    require('D:/project/9.1.2021/quardB/assets/Roll.jpg'),
    require('D:/project/9.1.2021/quardB/assets/momos.jpg'),
    require('D:/project/9.1.2021/quardB/assets/cake.jpg'),
    require('D:/project/9.1.2021/quardB/assets/chaat.jpg'),
    require('D:/project/9.1.2021/quardB/assets/chicken.jpg'),
    require('D:/project/9.1.2021/quardB/assets/samosa.jpg'),
    require('D:/project/9.1.2021/quardB/assets/Fries.jpg'),
    require('D:/project/9.1.2021/quardB/assets/Noodle.jpg'),
    require('D:/project/9.1.2021/quardB/assets/pannertikka.jpg'),
    require('D:/project/9.1.2021/quardB/assets/chaap.jpg'),
]
const Header = () => {
    return (
        <View style={styles.header}>
            <View>
                <IconEntypo name='location' size={20} style={{ margin: 10 }} />
            </View>
            <Text style={styles.headertxt}>Home-CapeTowns</Text>
            <IconMaterial name='qrcode-scan' size={20} style={{ margin: 10, marginLeft: 180 }} />
        </View>
    )
}

const Search = () => {
    return (
        <CardView
            style={styles.search}
            cornerRadius={25}
            cardElevation={5}
        >
            <IconAnt name='search1' size={30} color='#c1c4c7' style={{ margin: 10 }} />
            <Text style={styles.searchtxt}>Restaurant name,cuisine, or a dish...</Text>
        </CardView>
    )
}

const Offer = () => {
    return (
        <View >
            <ImageBackground
                source={require('D:/project/9.1.2021/quardB/assets/foods.jpg')}
                style={styles.backImage}
                imageStyle={{ borderRadius: 15 }}
            >
                <Text style={styles.offertxt}>
                    Dishes that you crave,
                </Text>
                <Text style={styles.offertxt2}>
                    offers that you'll love
                </Text>
                <Text style={styles.offertxt3}>
                    The best offfor you
                </Text>
                <View style={styles.Offerview}>
                    <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 10, marginTop: 8 }}>
                        UP TO 50% OFF
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const SmallFilter = ({ Request, txt1, txt2 }) => {
    return (
        <CardView
            style={styles.SmallFilter}
            cornerRadius={10}
            cardElevation={5}
        >
            <View style={{ height: 60, backgroundColor: '#fcfcfc' }}>
                <Image
                    source={Request}
                    style={{ height: 60, width: 60 }}
                />
            </View>
            <Text style={{ fontSize: 12 }}>{txt1}</Text>
            <Text style={{ fontSize: 11 }}>{txt2}</Text>
        </CardView>
    )
}

const RowSamllFiter = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: 10, marginRight: 10 }}>
            < SmallFilter Request={image[0]} txt1='MAX' txt2='Safety' />
            < SmallFilter Request={image[1]} txt1='Pure Veg' />
            < SmallFilter Request={image[2]} txt1='Trending' />
            < SmallFilter Request={image[3]} txt1='Pro' />
        </View>
    )
}

const SubFilter = ({ txt1, Request }) => {
    return (
        <CardView
            style={styles.SubFilter}
            cornerRadius={10}
            cardElevation={5}>
            <View >
                <Image
                    source={Request}
                    style={{ height: 90, width: 120 }}
                />
            </View>
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{txt1}</Text>
        </CardView>
    )
}

const RowSubFilter = ({ request, request2, request3, txt, txta, txtb }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: 10, marginRight: 10 }}>
            <SubFilter Request={request} txt1={txt} />
            <SubFilter Request={request2} txt1={txta} />
            <SubFilter Request={request3} txt1={txtb} />
        </View>
    )
}

const ColumnSubFilter = () => {
    return (
        <View>
            <RowSubFilter request={pic[0]} txt='Pizza' request2={pic[1]} txta='Burgers' request3={pic[2]} txtb='Rolls' />
            <RowSubFilter request={pic[3]} txt='Momoss' request2={pic[4]} txta='Cakes' request3={pic[5]} txtb='Chaats' />
            <RowSubFilter request={pic[6]} txt='Chickens' request2={pic[7]} txta='Samosas' request3={pic[8]} txtb='Friess' />
            <RowSubFilter request={pic[9]} txt='Noodles' request2={pic[10]} txta='Panners' request3={pic[11]} txtb='Chaaps' />
        </View>
    )
}

const Latestoffer = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: 10, marginRight: 10 }}>
            <CardView
                style={styles.SubFilter}
                cornerRadius={10}
                cardElevation={5}>
                <ImageBackground source={require('D:/project/9.1.2021/quardB/assets/mix2color.jpg')} style={{ height: 120, width: 120, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>ALL</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>OFFERSs</Text>
                </ImageBackground>
            </CardView>
            <CardView
                style={styles.SubFilter}
                cornerRadius={10}
                cardElevation={5}>
                <ImageBackground source={require('D:/project/9.1.2021/quardB/assets/mix3-color.jpg')} style={{ height: 120, width: 120, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>mins</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>40%s</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>OFFs</Text>
                </ImageBackground>
            </CardView>
            <CardView
                style={styles.SubFilter}
                cornerRadius={10}
                cardElevation={5}>
                <ImageBackground source={require('D:/project/9.1.2021/quardB/assets/mix4-color.jpg')} style={{ height: 120, width: 120, alignItems: 'center', justifyContent: 'center'  }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}>UPTO.</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 28 }}>₹1000.</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>OFFs</Text>
                </ImageBackground>
            </CardView>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
    },
    headertxt: {
        margin: 10,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    search: {
        borderWidth: 1,
        margin: 10,
        height: 50,
        flexDirection: 'row',
        //padding: 8
    },
    searchtxt: {
        color: '#c1c4c7',
        fontWeight: 'bold',
        fontSize: 18,
        margin: 10
    },
    backImage: {
        height: 200,
        width: 390,
        marginLeft: 10,
        marginTop:10
    },
    offertxt: {
        color: 'white',
        marginLeft: 20,
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 22
    },
    offertxt2: {
        color: 'white',
        marginLeft: 20,
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 22
    },
    offertxt3: {
        color: 'white',
        marginLeft: 20,
        marginTop: 5,
        fontSize: 15
    },
    Offerview: {
        borderWidth: 1,
        height: 40,
        marginTop: 10,
        width: 150,
        borderRadius: 8,
        marginLeft: 20,
        backgroundColor: 'black'
    },
    SmallFilter: {
        borderWidth: 1,
        margin: 10,
        height: 100,
        width: 90,
        alignItems: 'center'
    },
    SubFilter: {
        borderWidth: 1,
        margin: 10,
        height: 120,
        width: 120,
        alignItems: 'center'
    },

})