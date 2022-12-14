import { StyleSheet, Text, View, Dimensions } from 'react-native';
import TouchableComponent from './TouchableComponent';

const  ModalComponent = ({props}) => {
	return(
        <View style={styles.main}>
            <View style={styles.alerta}>
                <View style={styles.Button1Right}>
                    <View style={styles.Button1Out}>
                        <TouchableComponent>
                            <View style={styles.Button1In}>
                                <Text style={styles.Button1Text}>X</Text>
                            </View>
                        </TouchableComponent>
                    </View>
                </View>
                <Text style={styles.AlertaText1}>Cuestionario listo</Text>
                <Text style={styles.AlertaText2}>Puedes compartir tu cuestionario para ayudar a más personas a estudiar o dejarlo en privado</Text>
                <View style={styles.Button2Out}>
                    <TouchableComponent>
                        <View style={styles.Button2In}>
                            <Text style={styles.Button2Text}>Compartir</Text>
                        </View>
                    </TouchableComponent>
                </View>

            </View>
        </View>
)}

export default ModalComponent;

const styles = StyleSheet.create({
main:{
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*1.1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
},
alerta: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: Dimensions.get('window').width*0.05,
    alignItems: 'center',
    backgroundColor: '#294772',
    width: Dimensions.get('window').width*0.9,
    height: Dimensions.get('window').width*0.9,
    borderRadius: 40,
},
Button1Right:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: Dimensions.get('window').width*0.8,
    marginBottom: -40,
    height: 45,
},
Button1Out: {
    borderRadius:100,
    width: 45,
    height: 45,
    overflow: 'hidden',
},
Button1In: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center'
},
Button1Text: {
    fontWeight: 'bold',
    color:'white'
},
AlertaText1: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '400',

},
AlertaText2: {
    width: Dimensions.get('window').width*0.55,
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
    textAlign: 'center',
},
Button2Out:{
    backgroundColor:'#327DEE',
    borderRadius:18,
    width: Dimensions.get('window').width*0.7,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 30,
},
Button2In:{
    width: Dimensions.get('window').width*0.7,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
},
Button2Text:{
    color:'yellow'
}
});
	