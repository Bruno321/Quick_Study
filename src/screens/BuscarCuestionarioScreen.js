import React from 'react'
import { View , Text, StyleSheet} from 'react-native'
import BuscadorComponent from '../components/BuscadorComponent'

const BuscarCuestionarioScreen = () => {
    return (
        <View  style={styles.container}>
            <Text>Buscar cuestionario</Text>
            <BuscadorComponent />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#0F172A",
    },
  
    
})
export default BuscarCuestionarioScreen