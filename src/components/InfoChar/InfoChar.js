import React from 'react'
import { View, Text } from 'react-native'

import Age from "../../assets/icons/age.svg"
import Weight from "../../assets/icons/weight.svg"
import Height from "../../assets/icons/height.svg"
import Universe from "../../assets/icons/universe.svg"

import styles from './styles'

const InfoChar = ({ data }) => {
    return (
        <View style={styles.infoSection}>

            <View style={styles.eachInfo}>
                <Age />
                <Text style={styles.textMain}>{data.age} anos</Text>
            </View>

            <View style={styles.eachInfo}>
                <Weight />
                <Text style={styles.textMain}>{data.weight}kg</Text>
            </View>

            <View style={styles.eachInfo}>
                <Height />
                <Text style={styles.textMain}>{data.height}m</Text>
            </View>

            <View style={styles.eachInfo}>
                <Universe />
                <Text style={styles.textMain}>{data.universe}</Text>
            </View>

        </View>

    )
}

export default InfoChar