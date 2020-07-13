import { StyleSheet, Dimensions } from "react-native"

const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    textMain: {
        color: "white",
        fontFamily: "Roboto",
    }, 
    story: {
        margin: 24
    }
})

export default styles