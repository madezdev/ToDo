import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Pressable, FlatList, Alert, Modal} from 'react-native';

import Formulario from './src/components/Formulario';
import { Desafio } from './src/components/Desafio';
import { InformacionDesafio } from './src/components/InformacionDesafio';

export default function App() {

  const [desafio, setDesafio] = useState([]);
  const [desf, setDesf] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDesafio, setModalDesafio] = useState(false);

  const desafioEditar = id => {
    const desafioEditar = desafio.filter(desf => desf.id === id);
    setDesf(desafioEditar[0]);
  }
 
  const desafioEliminar = id => {
      Alert.alert(
        '¿Desea eliminar este desafío?',
        'Un DESAFÍO eliminado no se puede recuperar',
        [
          {text: 'Cancelar'},
          {text: 'Si, Eliminar', onPress: () => {
            const desafioActualizado = desafio.filter( desafioState => desafioState.id !== id )
            setDesafio(desafioActualizado)
          }}
        ]
      )
  }

  const cerrarModal = () => {
    setModalVisible(false)
  }

  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Desafíos pendientes</Text>
      <Text style={styles.tituloBold}>CoderHouse</Text>
      
      <Pressable 
      style={styles.btn}
      onPress={ () => setModalVisible(!modalVisible) }
      >
        <Text style={styles.textBtn}>Nuevo Desafío</Text>
      </Pressable>

      { desafio.length === 0 
        ? <Text style={styles.noDesafio}>No hay desafíos cargados</Text> 
        : <FlatList
          style={styles.listado}
          data={desafio}
          keyExtractor={ item => item.id }
          
          renderItem={({ item }) => {
              
            return(
                <Desafio
                item={item}
                setModalVisible={setModalVisible}
                setDesf={setDesf}
                desafioEditar={desafioEditar}
                desafioEliminar={desafioEliminar}
                setModalDesafio={setModalDesafio}
                />
            )

          }}
        />}

    {modalVisible && (      
     <Formulario
        cerrarModal={cerrarModal}
        desafio={desafio}
        setDesafio={setDesafio}
        desf={desf}
        setDesf={setDesf}
     />
     )}

     <Modal 
      visible={modalDesafio}
      animationType='slide'
     
     >
      <InformacionDesafio 
          desf={desf}
          setDesf={setDesf}
          setModalDesafio={setModalDesafio}
        />
     </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    
    
  },
  titulo:{
    textAlign:'center',
    marginTop:30,
    marginHorizontal:16,
    fontSize: 30,
    fontWeight:'600',
    color: '#DFFF00',
  },
  tituloBold:{
    textAlign:'center',
    marginHorizontal:16,
    fontSize: 30,
    fontWeight:'900',
    color: '#DFFF00',
  },
  btn:{
    marginTop: 30,
    marginHorizontal:16,
    padding:10,
    paddingHorizontal: 30,
    borderRadius: 50,
    backgroundColor:'#9800FF',
  },
  textBtn:{
    textAlign:'center',
    fontSize: 16,
    color:'white',
    fontWeight:'600',
  },
  noDesafio:{
    textAlign:'center',
    marginTop:30,
    marginHorizontal:16,
    fontSize:24,
    color: '#DFFF00'
  },
  listado:{
    marginTop:30,
    marginHorizontal:16,
  },
});
