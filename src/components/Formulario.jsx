import React, { useState, useEffect } from "react";
import {
  Modal,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  View,
  Pressable,
  Alert,
} from "react-native";

const Formulario = ({
  modalVisible,
  cerrarModal,
  desafio,
  setDesafio,
  desf,
  setDesf,

}) => {

  const [nombreDesafio, setNombreDesafio] = useState('');
  const [nombreCurso, setNombreCurso] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    if (Object.keys(desf).length > 0) {
      setNombreDesafio(desf.nombreDesafio);
      setNombreCurso(desf.nombreCurso);
    }
  }, [desf]);

  const handleDesafio = () => {
    //validar
    if ([nombreDesafio, nombreCurso].includes('')) {
      Alert.alert(
        'Upss', 
        'Te falto completar los datos'
        );
      return;
    }

    const nuevoDesafio = {
      nombreDesafio,
      nombreCurso,
    };

    //Reviso si un registro es nuevo o es una ediciion
    if (id) {
      //Editando
      nuevoDesafio.id = id;

      const desafioActualizado = desafio.map(desafioState =>
        desafioState.id === nuevoDesafio.id ? nuevoDesafio : desafioState
      );
        console.log(desafioActualizado);
      setDesafio(desafioActualizado);
      setDesf({});

    } else {
      //Nuevo registro
      nuevoDesafio.id = Date.now();
      setDesafio([...desafio, nuevoDesafio]);
    }

    // console.log(nuevoDesafio);
    cerrarModal();
    setId('');
    setNombreDesafio(''); //Para recetar el formulario y no tener duplicados, string vacio
    setNombreCurso('');
  };

  return (
    <Modal 
        animationType="slide" 
        visible={modalVisible}
    >
        <SafeAreaView style={styles.container}>

            <Text style={styles.titulo}>
            {desf.id ? "Editar" : "Nueva"} {""}
            <Text style={styles.tituloBold}>Desafío</Text>
            </Text>

            <Pressable
                style={styles.btnCancelar}
                onLongPress={() =>{ 
                    cerrarModal()
                    setDesf({})
                    setId('')
                    setNombreDesafio('')
                    setNombreCurso('')
                    }}
                >

                <Text style={styles.btnCancelarTexto}> X Cancelar</Text>
            </Pressable>

            <View style={styles.campo}>
                <Text style={styles.label}>Nombre del desafío</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre del desafío"
                        placeholderTextColor={"#666"}
                        value={nombreDesafio}
                        onChangeText={setNombreDesafio}
                    />
            </View>
            <View style={styles.campo}>
                <Text style={styles.label}>Nombre del curso</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre del curso"
                        placeholderTextColor={"#666"}
                        value={nombreCurso}
                        onChangeText={setNombreCurso}
                    />
            </View>

            <Pressable 
                style={styles.btn} 
                onPress={handleDesafio}
                >
            <Text 
                style={styles.textBtn}>
                    {desf.id ?'Editar':'Agregar'} Desafío </Text>
            </Pressable>

        </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  titulo: {
    marginTop: 30,
    fontSize: 30,
    color: "#DFFF00",
    fontWeight: "600",
    textAlign: "center",
  },
  tituloBold: {
    fontWeight: "900",
  },
  btnCancelar: {
    marginTop: 20,
    backgroundColor: "red",
    marginHorizontal: 40,
    padding: 10,
    borderRadius: 50,
  },
  btnCancelarTexto: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  campo: {
    marginTop: 8,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  label: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  input: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
  },
  btn: {
    marginTop: 30,
    padding: 10,
    marginHorizontal: 40,
    borderRadius: 50,
    backgroundColor: "#9800FF",
  },
  textBtn: {
    textAlign: "center",
    fontSize: 15,
    color: "white",
    fontWeight: "600",
    textTransform: "uppercase",
  },
});

export default Formulario;
