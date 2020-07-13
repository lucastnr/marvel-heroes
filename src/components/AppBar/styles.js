import { StyleSheet, Dimensions } from "react-native"

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    section: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 64,
        width: screenWidth,
        padding: 24
    },
    sectionChar: {
        backgroundColor: "rgba(0,0,0,0.7)",
        flexDirection: "row",
        justifyContent: "space-between",
    }
})

export default styles