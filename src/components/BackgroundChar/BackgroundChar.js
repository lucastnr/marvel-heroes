import React from "react"

import { ImageBackground } from "react-native"
import LinearGradient from "react-native-linear-gradient"

import styles from "./styles"

const BackgroundChar = ({ data }) => {
    
    return (
        <ImageBackground
            source={data.image}
            style={styles.background} >
            <LinearGradient
                locations={[0.4, 0.8]}
                colors={["rgba(0,0,0,0)", "black"]}
                style={styles.gradient} />
        </ImageBackground>
    )
}

export default BackgroundChar