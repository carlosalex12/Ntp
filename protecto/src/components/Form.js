import React from 'react';
import {
    StyleSheet,
    TextInput,
    View
} from 'react-native'
import color from '../utils/colors';
export default function Form() {
    return (
        <View>
            <View>
                <TextInput placeholder="cantidad a pedir" />
                <TextInput placeholder="Porcentaje" />

            </View>

        </View>




    )
}