import React from 'react'
import { View , Text, StyleSheet} from 'react-native'
import {Searcher} from '../../components/Searcher'

export const SearchScreen = () => {
    return (
        <View  style={styles.container}>
            <Text>Buscar cuestionario</Text>
            <Searcher />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#0F172A",
    },
  
    
})