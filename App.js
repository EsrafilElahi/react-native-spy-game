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
import ChangeCategoryScreen from "./screens/ChangeCategoryScreen";

import LocationScreen from "./screens/categories/LocationScreen";
import ThingScreen from "./screens/categories/ThingScreen";
import VariousWordScreen from "./screens/categories/VariousWordScreen";
import MixAllCategoryScreen from "./screens/categories/MixAllCategoryScreen";

const Stack = createNativeStackNavigator();
I18nManager.allowRTL(true);
I18nManager.forceRTL(false);

const customFonts = {
  farsan: require("./assets/fonts/farsan.ttf"),
  vahid: require("./assets/fonts/vahid.ttf"),
};

export default function App() {
  const [isFontLoaded] = useFonts(customFonts);
  const [fuck, setFuck] = useState("fuck");

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
          <Stack.Screen
            name="ChangeCategory"
            component={ChangeCategoryScreen}
          />
          <Stack.Screen name="Card" component={CardScreen} />
          <Stack.Screen name="Timer" component={TimerScreen} />
          <Stack.Screen name="Finish" component={FinishScreen} />
          <Stack.Screen name="location" component={LocationScreen} />
          <Stack.Screen name="things" component={ThingScreen} />
          <Stack.Screen name="various" component={VariousWordScreen} />
          <Stack.Screen name="mix" component={MixAllCategoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
