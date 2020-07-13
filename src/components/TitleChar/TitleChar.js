import React from "react"

import { View, Text } from "react-native"

import styles from "./styles"

const TitleChar = ({ data }) => {
    return (
        <>
            <View style={{ height: 250}} />
            <View style={styles.titleSection}>
                <Text style={[styles.description, styles.textMain]}>{data.description}</Text>
                <Text style={[styles.title, styles.textMain]}>{data.name}</Text>
            </View>
        </>
    )
}

export default TitleChar