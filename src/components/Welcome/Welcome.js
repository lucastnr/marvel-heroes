import React, { Fragment } from "react"

import { Text, View } from "react-native"

import styles from "./styles"

const Welcome = () => {
    return (
        <View style={styles.section}>
            <Text style={styles.grey}>Bem vindo ao Marvel Heroes</Text>
            <Text style={styles.primary}>Escolha o seu personagem</Text>
        </View>
    )
}

export default Welcome