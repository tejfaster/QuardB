import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'
import CardView from 'react-native-cardview'


export default function Filter() {
    
    return (
        < ScrollView  horizontal={true}>
           <TinyFilter txt='Filter'/>
           <TinyFilter txt='Book'/>
           <TinyFilter txt='safe'/>
           <TinyFilter txt='mark'/>
           <TinyFilter txt='Filter'/>
           <TinyFilter txt='Filter'/>
           <TinyFilter txt='Book'/>
           <TinyFilter txt='safe'/>
           <TinyFilter txt='mark'/>
           <TinyFilter txt='Filter'/>
        </ ScrollView>
    )
}

const TinyFilter = ({txt}) => {
    return (
        <CardView
            cornerRadius={10}
            style={styles.Filter}
        >
            <Text style={{ color:'#c1c4c7',alignSelf:'center'}}>{txt}</Text>
        </CardView>
    )
}

const styles = StyleSheet.create({
    Filter: {
        height: 30,
        width: 70,
        marginLeft: 10,
            marginTop:2
    },
})