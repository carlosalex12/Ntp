import React from 'react';
import{styleSheet, view, text, StatusAreaView, StatusBar, SafeAreaView} from'react-native';

export default function app(){
  return(
    <>
< StatusBar barStyle="light-content"/>
<SafeAreaView>
<text>cotizador de prestamos </text>
</SafeAreaView>

<view>
<text>
contenido
</text>
</view>
<view>
footer
</view>
</>
  )
}
const styles = styleSheet({
  safeArea:{
    
  }
})