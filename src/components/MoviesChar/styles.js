import { StyleSheet, Dimensions } from "react-native"

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

const styles = StyleSheet.create ({
    allSection: {
        marginHorizontal: 24
    },
    textMain: {
        color: "white",
        fontFamily: "Roboto",
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    },
    image: {
        marginVertical: 12,
        marginHorizontal: 5,
        width: 133,
        height: 219,
        borderRadius: 16
    }
})

export default styles