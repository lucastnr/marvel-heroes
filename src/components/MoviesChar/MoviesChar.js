import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'

import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler'

const MoviesChar = ({ data }) => {
    return (
        <View style={styles.allSection}>
            <Text style={[styles.textMain, styles.title]}>Filmes</Text>
            <FlatList
                horizontal={true}
                data={data.movies}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <Image
                        style={styles.image}
                        source={item} />
                } />

        </View>
    )
}

export default MoviesChar;