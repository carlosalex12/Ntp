import React ,{useState} from 'react';

import { StyleSheet, View } from 'react-native';
import {DrawerContentScrollView} from "@react-navigation/drawer";
import {Drawer, Switch, TouchableRipple, Text} from "react-native-paper";
import Navigation from './Navigation';

export default function DrawerContent(props) {
    const {navigation}=props;
    const{active, setActive}=useState("home");
    //console.log(props);
const onChangeScreen=(screen)=>{
    //setActive(screen);
navigation.navigate(screen);


}

    return (
        <DrawerContentScrollView>
            <Drawer.Section>
                <Drawer.Item
                    label="inicio"
                    active={active ==="home"}
                    onPress={() => onChangeScreen('home')}
                />
                 <Drawer.Item
                    label="Peliculas Populares"
                    active={active ==="home"}
                    onPress={() => onChangeScreen("popular")}
                />
                 <Drawer.Item
                    label="Nuevas Peliculas"
                    active={active ==="home"}
                    onPress={() => onChangeScreen("news")}
                />
            </Drawer.Section>               
            
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({})