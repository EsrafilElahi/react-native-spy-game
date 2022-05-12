import React, { useState, useEffect } from "react";
import { I18nManager } from "react-native";
import { useFonts } from "expo-font";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from "./assets/Theme";

// data context providers
import LocationContextProvider from "./context/context/locationContext";
import ThingsContextProvider from "./context/context/thingsContext";
import VariousContextProvider from "./context/context/variousContext";
import MixContextProvider from "./context/context/mixContext";
import CategoryContextProvider from "./context/context/categoryContext";
import SettingsDataContextProvider from "./context/context/settingsDataContext";
import SpyListContextProvider from "./context/context/spyListContext";

// main stacks
import HomeScreen from "./screens/HomeScreen";
import StartScreen from "./screens/StartScreen";
import CardScreen from "./screens/CardScreen";
import TimerScreen from "./screens/TimerScreen";
import FinishScreen from "./screens/FinishScreen";
import ChangeCategoryScreen from "./screens/ChangeCategoryScreen";

// data stacks
import LocationScreen from "./screens/categories/LocationScreen";
import ThingScreen from "./screens/categories/ThingScreen";
import VariousWordScreen from "./screens/categories/VariousWordScreen";
import MixAllCategoryScreen from "./screens/categories/MixAllCategoryScreen";

const Stack = createNativeStackNavigator();
I18nManager.allowRTL(false);
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
    <LocationContextProvider>
      <ThingsContextProvider>
        <VariousContextProvider>
          <MixContextProvider>
            <CategoryContextProvider>
              <SettingsDataContextProvider>
                <SpyListContextProvider>
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
                </SpyListContextProvider>
              </SettingsDataContextProvider>
            </CategoryContextProvider>
          </MixContextProvider>
        </VariousContextProvider>
      </ThingsContextProvider>
    </LocationContextProvider>
  );
}
