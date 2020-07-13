import React from "react"
import { View } from "react-native"
import LinearGradient from 'react-native-linear-gradient'

import styles from "./styles"

import Hero from "../../assets/icons/hero.svg"
import Villain from "../../assets/icons/villain.svg"
import Antihero from "../../assets/icons/antihero.svg"
import Alien from "../../assets/icons/alien.svg"
import Human from "../../assets/icons/human.svg"

const Circles = () => {
    return (
        <View style={styles.section}>
            <LinearGradient
            colors={["#005BEA", "#00C6FB"]}
            style={styles.circle}>
                <Hero width={32} height={32}/>
            </LinearGradient>
            
            <LinearGradient
            colors={["#ED1D24", "#ED1F69"]}
            style={styles.circle}>
                <Villain width={32} height={32}/>
            </LinearGradient>

            <LinearGradient
            colors={["#B224EF", "#7579FF"]}
            style={styles.circle}>
                <Antihero width={32} height={32}/>
            </LinearGradient>

            <LinearGradient
            colors={["#0BA360", "#0BA360"]}
            style={styles.circle}>
                <Alien width={32} height={32}/>
            </LinearGradient>

            <LinearGradient
            colors={["#FF7EB3", "#FF758C"]}
            style={styles.circle}>
                <Human width={32} height={32}/>
            </LinearGradient>
        </View>
    )
}

export default Circles