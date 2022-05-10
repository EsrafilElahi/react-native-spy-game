import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Text, Box, Switch } from "native-base";
import { useFonts } from "expo-font";
import i18n from "i18n-js";
import { en, fa } from "../i18n/locales";

i18n.fallbacks = true;
i18n.translations = { en, fa };

const customFonts = {
  farsan: require("../assets/fonts/farsan.ttf"),
  vahid: require("../assets/fonts/vahid.ttf"),
};

const RenderItem = ({ item, language, isEnabled, id, changeSwitch }) => {
  const [isFontLoaded] = useFonts(customFonts);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <Box
      style={[
        styles.container,
        {
          flexDirection: language === "en-US" ? "row-reverse" : "row",
          paddingEnd: language === "en-US" ? 0 : 6,
          paddingStart: language === "en-US" ? 8 : 0,
        },
      ]}
    >
      <Box style={styles.switch}>
        <Switch
          colorScheme="teal"
          isChecked={isEnabled}
          onToggle={() => changeSwitch(id)}
        />
      </Box>
      <Box
        style={{
          marginTop: language === "en-US" ? 0 : 20,
          marginBottom: language === "en-US" ? 10 : 0,
        }}
      >
        <Text
          style={{
            fontFamily: language === "en-US" ? "farsan" : "vahid",
            fontSize: language === "en-US" ? 20 : 21,
            paddingTop: language === "en-US" ? 0 : 5,
            paddingBottom: 16,
          }}
        >
          {item}
        </Text>
      </Box>
    </Box>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: "black",
    marginTop: 10,
    width: Dimensions.get("screen").width,
  },
  switch: {},
});
