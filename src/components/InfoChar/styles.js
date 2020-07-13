import { StyleSheet, Dimensions } from "react-native"

const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    textMain: {
        color: "white",
        fontFamily: "Roboto",
    },
    infoSection: {
        height: 48,
        marginHorizontal: 24, 
        flexDirection: "row",
        justifyContent: "space-between"
    },
    eachInfo: {
        alignItems: "center",
        justifyContent: "space-between"
    }
})

export default styles