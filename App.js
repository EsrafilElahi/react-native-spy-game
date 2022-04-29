import React, { useState } from "react";
import { StyleSheet, View, I18nManager, Button } from "react-native";
import { useFonts } from "expo-font";
import { NativeBaseProvider, Text, Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from "./assets/Theme";

import HomeScreen from "./screens/HomeScreen";
import StartScreen from "./screens/StartScreen";
import CardScreen from "./screens/CardScreen";
import TimerScreen from "./screens/TimerScreen";
import FinishScreen from "./screens/FinishScreen";
import AboutScreen from "./screens/AboutScreen";

const Stack = createNativeStackNavigator();
I18nManager.allowRTL(true);
I18nManager.forceRTL(false);

const customFonts = {
  farsan: require("./assets/fonts/farsan.ttf"),
  vahid: require("./assets/fonts/vahid.ttf"),
};

export default function App() {
  const [isFontLoaded] = useFonts(customFonts);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Card" component={CardScreen} />
          <Stack.Screen name="Timer" component={TimerScreen} />
          <Stack.Screen name="Finish" component={FinishScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
