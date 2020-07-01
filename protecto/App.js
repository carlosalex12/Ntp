import React from 'react';
import { styleSheet, View, Text, StatusAreaView, StatusBar, SafeAreaView, YellowBox } from 'react-native';
import color from './src/utils/colors'
import colors from './src/utils/colors';
import Form from './src/components/Form'
YellowBox.ignoreWarnings(["Pcker has been  extracted"])
export default function app() {
  return (
    //renderizar para que nuestra apliacacion devuelva un solo valor con una etiqueta vacia
    <>
     
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.backgroud}/>
        <Text style={styles.tittleApp}>cotizador de prestamos </Text>
        <Form />
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
    //backgroundColor: colors.PRIMARY_COLOR,
    height:290,
    alingnItems: "center"
  },
  backgroud:{
backgroundColor:colores.PRIMARY_COLOR,
height:200,
width:'100%',
borderBottomLeftRadius: 30,
borderBottomRighRadius: 30,
position:"absolute",
zIndex:-1,



  },
  tittleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#fff",
    marginTop: 15
  }
})