import React from "react"
import { View, ScrollView, Button, LogBox } from "react-native"

LogBox.ignoreLogs([
	'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

import { AppBar } from "../../components/AppBar"
import { Welcome } from "../../components/Welcome"
import { Circles } from "../../components/Circles"
import { AllSection } from '../../components/CharsSections/AllSection'

const Home = ({ navigation }) => {
    return (
    <View>
        <AppBar navigation={navigation} />
        <ScrollView>
        {/*<Button title={"Oi"} onPress={() => navigation.navigate('CharacterScreen')}/>*/}
            <Welcome />
            <Circles />
            <AllSection navigation={navigation}/>
        </ ScrollView>
    </View>
    )
}

export default Home