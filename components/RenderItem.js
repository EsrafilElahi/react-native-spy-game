import React, { useEffect, useState, useRef, useContext } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Text, Box, Switch } from "native-base";
import { useFonts } from "expo-font";
import i18n from "i18n-js";
import { en, fa } from "../i18n/locales";

import { LocationContext } from './../context/context/locationContext';
import { ThingsContext } from './../context/context/thingsContext';
import { VariousContext } from "../context/context/variousContext";
import { MixContext } from './../context/context/mixContext';
import { CategoryContext } from './../context/context/categoryContext';

i18n.fallbacks = true;
i18n.translations = { en, fa };

const customFonts = {
  farsan: require("../assets/fonts/farsan.ttf"),
  vahid: require("../assets/fonts/vahid.ttf"),
};

const RenderItem = ({ item, language, isEnabled, id }) => {
  const [isFontLoaded] = useFonts(customFonts);

  const { category, dispatch: categoryDispatch } = useContext(CategoryContext)
  const { location, dispatch: locationDispatch } = useContext(LocationContext)
  const { things, dispatch: thingsDispatch } = useContext(ThingsContext)
  const { various, dispatch: variousDispatch } = useContext(VariousContext)
  const { mix, dispatch: mixDispatch } = useContext(MixContext)

  const handleDispatch = () => {
    if (category.category === "location") {
      locationDispatch({ type: "CHANGE_ENABLE", payload: id })
    }
    if (category.category === "things") {
      thingsDispatch({ type: "CHANGE_ENABLE", payload: id })
    }
    if (category.category === "various") {
      variousDispatch({ type: "CHANGE_ENABLE", payload: id })
    }
    if (category.category === "mix") {
      mixDispatch({ type: "CHANGE_ENABLE", payload: id })
    }
  }

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
          onToggle={handleDispatch}
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
