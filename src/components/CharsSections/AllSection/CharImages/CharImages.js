import React from "react"

import { View, FlatList, ImageBackground, Text } from "react-native"
import styles from "../../styles"
import { TouchableOpacity } from "react-native-gesture-handler"

const CharImages = ({ data, navigation }) => {
    return (
        <View
            showsHorizontalScrollIndicator={false}
            style={styles.sectionImage}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate("CharacterScreen", {data: item})
                        }>
                        <ImageBackground
                            source={item.image}
                            style={styles.image}
                            imageStyle={{ borderRadius: 16 }}>
                            <View style={styles.imageTexts}>
                                <Text style={styles.imageSecundary}>{item.description}</Text>
                                <Text style={styles.imageText}>{item.name}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                } />
        </View>
    )
}

export default CharImages