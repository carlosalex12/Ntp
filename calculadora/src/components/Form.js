import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {
    StyleSheet,
    TextInput,
    View
} from 'react-native'
import color from '../utils/colors';
import colors from '../utils/colors';

export default function Form(props) {
const{setCapital,setInteres,setMeses}=props;
    console.log(props)
    return (
        <View style={styles.ViewForm}>
            <View style={styles.inputView}>
                <TextInput placeholder="valor de a" 
                keyboardType="numeric"
                style={styles.input}
                onChange={(e)=> setvariableA(e.nativeEvent.text)}
                />
                <TextInput placeholder="valor de b" 
                keyboardType="numeric"
                style={[styles.input,styles.inputPorcentaje]}
                onChange={(e)=> setvariableB(e.nativeEvent.text)}
                />
 <TextInput placeholder="valor de c" 
                keyboardType="numeric"
                style={[styles.input,styles.inputPorcentaje]}
                onChange={(e)=> setvariableC(e.nativeEvent.text)}
                />
            </View>
          
        </View>




    )
}
const styles= StylesSheet.create({
ViewForm:{
position:"adsolute",
bottom:0,
width:"85%",
paddingHorizontal:50,
backgroundColor:color.PRYMARY_COLOR_DARK,
borderRadius:30,
height:200,
justifyContent:'center'

},
inputView:{
flexDirection:'row'

},
input:{

    heiht: 50,
    backgroundColor:"#fff",
    borderWidth:1,
    borderColor:color.PRYMARY_COLOR_DARK,
    borderRadius:5,
    width:'60%',
    marginLeft:-5,
    marginRight:5,
    marginButtom:10,
    color:"#000",
    paddingHorizontal:20
},
inputPorcentaje:{
width:"40%",
marginLeft:5,

}

});
const piketSelectStyle=StyleSheet.create({
    inputIOS:{
        fontSize:16,
        paddingVertical:12,
        paddingHorizontal:10,
        borderWidth:1,
        borderColor:'grey',
        borderRadius:4,
        color:'black',
        paddingColor:"#fff",
        marginLeft:-5,
        marginRight:-5.
    },
    inputAndroid:{
        fontSize:16,
        paddingHorizontal:10,
        paddingVertical:8,
        borderWidth:0.5,
        borderColor:'grey',
        borderRadius:8,
        color:'black',
        paddingRight:30,
        backgroundColor:"#fff"
    }
    
    
    });