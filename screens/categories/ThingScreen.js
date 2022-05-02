import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Text, Box } from "native-base";

import { useFonts } from "expo-font";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { en, fa } from "../i18n/locales";

i18n.fallbacks = true;
i18n.translations = { en, fa };
i18n.locale = "fa";

const customFonts = {
  farsan: require("../assets/fonts/farsan.ttf"),
  vahid: require("../assets/fonts/vahid.ttf"),
};

const ThingScreen = () => {
  const [isFontLoaded] = useFonts(customFonts);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <View>
      <Text>ThingScreen</Text>
    </View>
  );
};

export default ThingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
