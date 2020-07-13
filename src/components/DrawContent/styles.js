import { StyleSheet, Dimensions } from "react-native"

const screenHeight = Dimensions.get("window").height
const screenWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
    mainSection: {
        flexDirection: "row",
        margin: 0,
        justifyContent: "space-between"
    },
    leftView: {
        height: 1
    },
    rightView: {
        backgroundColor: "#AAAAAA",
        width: 3,
        marginRight: 0,
        height: screenHeight
    },
    topHead: {
        height: 64,
        width: screenWidth *2.02/3,
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        margin: 12
    }
})

export default styles