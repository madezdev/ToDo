import React from "react";

import { Text, SafeAreaView, View, Pressable, StyleSheet } from "react-native";

export const InformacionDesafio = ({ desf, setDesf, setModalDesafio }) => {
  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>
        Informacion {""}
        <Text style={styles.tituloBold}>Desafío</Text>
      </Text>

      <View>
        <Pressable
          style={styles.btnCerrar}
          onLongPress={() => {
            setModalDesafio(false);
            setDesf({});
          }}>
          <Text style={styles.btnCerrarTexto}>X Cerrar</Text>
        </Pressable>
      </View>

      <View style={styles.contenido}>
        <View style={styles.campo}>
          <Text style={styles.label}>Desafío:</Text>
          <Text style={styles.valor}>{desf.nombreDesafio}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Curso:</Text>
          <Text style={styles.valor}>{desf.nombreCurso}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#000",
    flex: 1,
  },
  titulo: {
    textAlign: "center",
    marginTop: 30,
    marginHorizontal: 16,
    fontSize: 30,
    fontWeight: "600",
    color: "#DFFF00",
  },
  tituloBold: {
    fontWeight: "900",
  },
  btnCerrar: {
    marginVertical: 30,
    backgroundColor: "#E06900",
    marginHorizontal: 30,
    padding: 10,
    borderRadius: 50,
  },
  btnCerrarTexto: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
    textTransform: "uppercase",
  },
  contenido: {
    backgroundColor: "#FFF",
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: "#DFFF00",
  },
  campo: {
    marginBottom: 10,
  },
  label: {
    textTransform: "uppercase",
    color: "#374151",
    fontWeight: "600",
    fontSize: 12,
  },
  valor: {
    fontWeight: "700",
    fontSize: 20,
    color: "#6D28D9",
  },
});
