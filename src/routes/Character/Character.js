import React from "react"
import { ScrollView, Text, View, ImageBackground } from "react-native"

import styles from "./styles"

import { AppBar } from "../../components/AppBar"
import { BackgroundChar } from "../../components/BackgroundChar"
import { TitleChar } from "../../components/TitleChar"
import { InfoChar } from "../../components/InfoChar"
import { HabilityChar } from "../../components/HabilityChar"
import { MoviesChar } from "../../components/MoviesChar"

const Character = ({ route, navigation }) => {
    const { data } = route.params

    return (
        <>
            <ScrollView style={{ backgroundColor: "black"}} stickyHeaderIndices={[1]}>
                
                <BackgroundChar data={data} />
                <AppBar
                screen={"Character"}
                navigation={navigation} />
                <TitleChar data={data} />
                <InfoChar data={data} />
                <Text style={[styles.story, styles.textMain]}>{data.story}</Text>
                <HabilityChar />
                <MoviesChar data={data} />
            </ScrollView>
        </>
    )
}

export default Character