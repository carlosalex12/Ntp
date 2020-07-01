import React ,{useState}from 'react';
import { styleSheet, View, Text, StatusAreaView, StatusBar, SafeAreaView, YellowBox, Button } from 'react-native';
import color from './src/utils/colors'
import colors from './src/utils/colors';
import Form from './src/components/Form'
YellowBox.ignoreWarnings(["Pcker has been  extracted"])
export default function app() {
  //crear estado y como los vamos a actualizar 
  const [capital, setCapital]=useState(null);
  const [interes, setInteres]=useState(null);
  const [meses, setMeses]=useState(null);
  const onSubnit =()=>{
    console.log("capital->",capital);
    console.log("intereses->",interes)
    console.log("meses->",meses)
    
  }
  return (
    //renderizar para que nuestra apliacacion devuelva un solo valor con una etiqueta vacia
    <>
     
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.backgroud}/>
        <Text style={styles.tittleApp}>cotizador de prestamos </Text>
        <Form 
        setCapital={setCapital}
        setInteres={setInteres}
        setMeses={setMeses}
        
        />
      </SafeAreaView>

      <View>
        <Text>
          contenido
        </Text>
      </View>
      <View>
        <Button title="enviar" onPress={onSubmit}/>

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