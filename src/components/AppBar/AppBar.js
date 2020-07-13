import React, { Fragment } from "react"

import { View } from "react-native"
import Menu from "../../assets/icons/menu.svg"
import Back from "../../assets/icons/back.svg"
import MarvelLogo from "../../assets/icons/marvel.svg"
import MarvelWhiteLogo from "../../assets/icons/marvelw.svg"
import Search from "../../assets/icons/search.svg"

import styles from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler"



const AppBar = ({ screen, navigation }) => {

    if (screen == "Character")
        return (
            <View style={[styles.section, styles.sectionChar]}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.goBack()}>
                    <Back
                        width={24}
                        height={24} />

                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate("HomeScreen")}>
                    <MarvelWhiteLogo
                        width={71}
                        height={26} />
                </TouchableOpacity>
                <View style={{ width: 24, height: 24 }}></View>
            </View>

        )

    else return (
        <View style={styles.section}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.openDrawer()}>
                <Menu
                    width={24}
                    height={24} />
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.7}>
                <MarvelLogo
                    width={71}
                    height={26} />
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.7}>
                <Search />
            </TouchableOpacity>
        </View>
    )
}

export default AppBar