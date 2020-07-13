import { StyleSheet, Dimensions } from "react-native"

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    section: {
        flexDirection: "column",
        width: screenWidth,
        marginTop: 24,
        marginRight: 24,
        marginLeft: 24
    },
    grey: {
        color: "grey",
        fontFamily: "Roboto"
    },
    primary: {
        fontWeight: "bold",
        fontSize: 40,
        fontFamily: "Roboto"
    }
})

export default styles