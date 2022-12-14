import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Modal, Pressable, Text, View, Image } from 'react-native';
import Correct from "../assets/img/correct.png";
export default CorrectModal = () =>{
        const [modalVisible, setModalVisible] = useState(false);
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image style={styles.imgCorrect} source={Correct}
              />
              <Text style={styles.modalTitle}>¡RESPUESTA CORRECTA!</Text>
              <Text style={styles.modalSubtitle}>¡Sigue así, vas por buen camino!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>SALIR</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    width: 300,
    height: 300,
    backgroundColor: "#294772",
    borderRadius: 30,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  imgCorrect: {
    width: 50,
    height: 50,
    marginBottom: 20
  },
  button: {
    marginTop: 50,
    width: 160,
    heigth: 50,
    padding: 10,
    elevation: 2,
    backgroundColor: "#327DEE"
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalTitle: {
    fontSize: 20,
    textAlign: "center",
    color: "white"
  },
  modalSubtitle: {
    fontSize: 17,
    marginTop: 15,
    textAlign: "center",
    color: "white"
  }
});
