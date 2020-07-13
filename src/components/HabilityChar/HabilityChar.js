import React from 'react';
import { View, Text, Dimensions } from 'react-native';

import Abilities from "../../assets/icons/abilities.svg"

import styles from './styles';

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

const HabilityChar = () => {
    return (
        <View style={styles.allSection}>
            <Text
            style={[styles.textMain, styles.title]}> 
            Habilidades
            </Text>

            <View
            style={styles.abilities}>
            <Abilities
            width={screenWidth}
            height={(screenWidth - 48) / 1.9}
            style={styles.image} />
            </View>

        </View>
  )
}

export default HabilityChar;