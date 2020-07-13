import { StyleSheet, Dimensions } from "react-native"

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

const styles = StyleSheet.create ({
    allSection: {
        marginHorizontal: 24,
    },
    textMain: {
        color: "white",
        fontFamily: "Roboto",
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    },
    abilities: {
        marginVertical: 24,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: screenWidth - 24,
        height: (screenWidth - 48) / 1.9 
    }
})

export default styles