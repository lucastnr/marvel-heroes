import { StyleSheet, Dimensions } from "react-native"

const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    titleSection: {
        width: screenWidth/1.5,
        margin: 24
    },    
    textMain: {
        fontFamily: "Roboto",
        color: "white"
    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
        fontFamily: "Roboto"
    },
    description: {
        fontSize: 16
    }
})

export default styles