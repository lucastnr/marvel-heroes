import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    sectionText: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 12
    },
    primary: {
        color: "#F2264B",
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: "Roboto"
    },
    secundary: {
        color: "grey",
        fontSize: 16,
        fontFamily: "Roboto"
    },
    sectionImage: {
        marginRight: 24,
        marginLeft: 14,
        marginBottom: 14
    },
    image: {
        marginLeft: 12,
        width: 133,
        height: 219
    },
    imageTexts: {
        position: "absolute",
        bottom: 0,
        padding: 10
    },
    imageSecundary: {
        color: "white",
        fontSize: 14,
        padding: 0,
        fontFamily: "Roboto"
    },
    imageText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
        fontFamily: "Roboto"
    }
})

export default styles