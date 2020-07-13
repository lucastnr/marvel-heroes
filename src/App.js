import 'react-native-gesture-handler'

import React, { Fragment } from 'react'
import { Text, ScrollView } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from "./routes/Home"
import { Character } from "./routes/Character"

import { DrawContent } from "./components/DrawContent"

let Stack = createStackNavigator()
let Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
      initialRouteName={"HomeScreen"} 
      screenOptions={ { headerShown: false } }> */}
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        drawerContent={props => <DrawContent props={props}/>}>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="CharacterScreen" component={Character} />
      </Drawer.Navigator>

      {/* </Stack.Navigator> */}
    </NavigationContainer>
  )
}

export default App