import React from 'react';
import {
    View, Text, Image, StyleSheet
} from 'react-native'

import {
    DrawerContentScrollView,
    DrawerItem
} from "@react-navigation/drawer"

import Separator from "./Separator"

import MarvelLogo from "../../assets/icons/marvel.svg"


import styles from "./styles"

const DrawContent = () => {
    return (
        <View style={styles.mainSection}>
            <View style={styles.leftView}>
                <View style={styles.topHead}>
                    <MarvelLogo
                        style={styles.logo}
                        width={71}
                        height={26} />
                    <Separator />
                </View>


            </View>

            <View style={styles.rightView} />
        </View>
    )
}

export default DrawContent