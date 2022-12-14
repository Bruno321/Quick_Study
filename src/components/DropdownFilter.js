import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";

const data = [
  { label: "Español", value: "espaniol" },
  { label: "Química", value: "quimica" },
  { label: "Matemáticas", value: "matematicas" },
  { label: "Historia", value: "historia" },
  { label: "Programación", value: "programacion" },
  { label: "Bases de Datos", value: "bases-de-datos" },
  {
    label: "Administración de Proyectos",
    value: "administracion-de-proyectos",
  },
  { label: "Contaduría", value: "contaduria" },
];

const DropdownFilter = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Seleccione una categoría:
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {/* {renderLabel()} */}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Seleccione una categoría" : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownFilter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4d617d",
    borderRadius: 8,
  },
  dropdown: {
    height: 0.07 * Dimensions.get("window").height,
    width: 0.9 * Dimensions.get("window").width,
    borderColor: "#000",
    color: "white",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    color: "#8D97A5",
    fontSize: 16,
  },
  selectedTextStyle: {
    color: "white",
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
