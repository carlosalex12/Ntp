import React from 'react';
import { styleSheet, View, Text, StatusAreaView, StatusBar, SafeAreaView } from 'react-native';
import color from './src/utils/colors'
import colors from './src/utils/colors';
import Form from './src/components/Form'
export default function app() {
  return (
    //renderizar para que nuestra apliacacion devuelva un solo valor con una etiqueta vacia
    <>
      < StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.tittleApp}>cotizador de prestamos </Text>
      <Form/>
      </SafeAreaView>

      <View>
        <Text>
          contenido
        </Text>
      </View>
      <View>
        <Text>
          footer
  </Text>

      </View>
    </>
  );
}
const styles = styleSheet({
  safeArea: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRighRadius: 30,
    alingnItems: "center"
  },
  tittleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#fff",
    marginTop: 15
  }
})