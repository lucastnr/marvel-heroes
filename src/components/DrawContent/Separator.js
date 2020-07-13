import React from "react"
import { StyleSheet } from "react-native"
import LinearGradient from 'react-native-linear-gradient';

const Separator = () => {
    return (
        <LinearGradient
            useAngle={true}
            angle={90}
            locations={[0.2, 0.5, 0.8]}
            colors={["white", "#AAAAAA", "white"]}
            style={styles.separator} />
    )
}

const styles = StyleSheet.create({
    separator: {
        width: 240,
        height: 2
    }
})

export default Separator