import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
   
} from 'react-native'
import CardView from 'react-native-cardview'
import IconFeather from 'react-native-vector-icons/Feather'

export default function MainFilter() {
    return (
        <View>
            <Filter Request={require('D:/project/9.1.2021/quardB/assets/Pizza.jpg')} txt='Pizza' txt1='peri peri'/>
            <Filter  Request={require('D:/project/9.1.2021/quardB/assets/burger.jpg')} txt='Burger' txt1='Chicken T'/>
        </View>
    )
}


const Filter = ({Request,txt,txt1}) => {
    return (
        <CardView
            cornerRadius={10}
            style={styles.Filter}
        >
            <ImageBackground source={Request} style={{ height: 160, width: 390, }}>
                <View style={styles. subicon}>
                    <IconFeather name='bookmark' size={20} />
                </View>
            </ImageBackground>
            <Text style={{fontWeight:'bold',fontSize:20 ,marginLeft:10}}>
                {txt}
            </Text>
            <Text style={{fontWeight:'bold',fontSize:15 ,marginLeft:10, color:'#c1c4c7'}}>
            {txt1}
            </Text>
        </CardView>
    )
}

const styles = StyleSheet.create({
    Filter: {
        height: 220,
        width: 390,
        marginLeft: 10,
        marginTop:10
    },
    subicon: {
        backgroundColor: 'white',
        height: 30,
        width: 30,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:350,
        marginTop:10
    }
})