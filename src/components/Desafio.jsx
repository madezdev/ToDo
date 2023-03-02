import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

export const Desafio = ({ 
  item,
  setDesf, 
  setModalVisible, 
  desafioEditar,
  desafioEliminar,
  setModalDesafio,
 }) => {
  
  
  
  const { nombreDesafio, nombreCurso, id } = item;

  return (

    <Pressable
      onLongPress={() =>{
        setModalDesafio(true)
        setDesf(item)
      }}
    >

      <View style={styles.contenedor}>
        <Text style={styles.label}>Desafío</Text>
        <Text style={styles.texto}> {nombreDesafio}</Text>
        <Text style={styles.texto}> {nombreCurso}</Text>

        <View style={styles.contenedorBtn}>
          <Pressable
            style={[styles.btn, styles.btnEditar]}
            onPress={() => {
              setModalVisible(true);
              desafioEditar(id);
            }}>
            <Text style={styles.btnTexto}>Editar</Text>
          </Pressable>

          <Pressable style={[styles.btn, styles.btnEliminar]}
          onLongPress={() => desafioEliminar(id)}
          >
            <Text style={styles.btnTexto}>Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>

  );
};

const styles = StyleSheet.create({
  contenedor: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#DFFF00",
    borderRadius: 8,
  },
  label: {
    color: "#374151",
    textTransform: "uppercase",
    fontWeight: "700",
    marginBottom: 10,
    marginLeft: 5,
  },
  texto: {
    color: "#6D28D9",
    fontSize: 20,
  },
  contenedorBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  btn: {
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  btnEditar: {
    backgroundColor: "#F59E0B",
  },
  btnEliminar: {
    backgroundColor: "#EF4444",
  },
  btnTexto: {
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 12,
    color: "#fff",
  },
});
