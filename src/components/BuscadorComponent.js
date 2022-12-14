import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
// import { Entypo } from '@expo/vector-icons'; 
import IconEnt  from 'react-native-vector-icons/Ionicons'

const  BuscadorComponent = () => {
    return(
        <View style={styles.main}>
            <View style={styles.flexRow}>
                <View style={styles.lupa}>
                {/* <Entypo name="magnifying-glass" size={24} color="white" /> */}
                <IconEnt name="search" color={"FFFFFF"} size={28} />
                </View>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => console.log(text)}
                    numberOfLines={1}
                    placeholder={"Buscar"}
                    placeholderTextColor="#EEE" 
                    editable
                />
            </View>
            
        </View>

    )
}

export default BuscadorComponent;

const styles = StyleSheet.create({
main:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.1,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
},
flexRow: {
    flexDirection: 'row',
    backgroundColor: 'rgba(91,105,125,0.5)',
    height: 50,
    borderRadius: 15,
    overflow: 'hidden',
},
lupa:{
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
},
textInput:{
    width: Dimensions.get('window').width*0.8,
    height: 50,
    paddingHorizontal: 10,
    color: 'white',
}
});
	