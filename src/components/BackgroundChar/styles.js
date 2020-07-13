import { StyleSheet, Dimensions } from "react-native"

const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        resizeMode: "cover"
    }, 
    background: {
        width: screenWidth,
        height: screenWidth * 1.60,
        position: "absolute",
        resizeMode: "cover"
    }
})

export default styles