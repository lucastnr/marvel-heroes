import { StyleSheet, Dimensions } from "react-native"

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const circleSize = Math.round((screenWidth - 48) / 5 - 16)

const styles = StyleSheet.create({
    section: {
        flexDirection: "row",
        width: screenWidth,
        padding: 24,
        justifyContent: "space-between"
    },
    circle: {
        alignItems: "center",
        justifyContent: "center",
        width: circleSize,
        height: circleSize,
        borderRadius: 32,
        backgroundColor: "#CCCCDD"
    }
})

export default styles