import React from "react"

import { View, Text, Image, ScrollView, ImageBackground } from "react-native"

import styles from "../styles"
import { FlatList } from "react-native-gesture-handler"

import sections from "../data"
import { CharImages } from "./CharImages"



const AllSection = ( { navigation } ) => {
    return (
        <>
            <FlatList
                scrollEnabled={false}
                data={sections}
                keyExtractor={(item) => item.name}
                renderItem={({item}) => 
                <View style={isLast(item.lastSection)}>
                <View style={styles.sectionText}>
                    <Text style={styles.primary}>{item.title}</Text>
                    <Text style={styles.secundary}>Ver tudo</Text>
                </View>

                <CharImages 
                data={item.allData}
                navigation={navigation}/>
            </View>
            }
            />

            
        </>
    )
}

const isLast = (lastSection) => {
    return lastSection? {marginBottom: 72} : {}
}

export default AllSection