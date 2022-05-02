import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  Text,
  Box,
  Center,
  Container,
  Image,
  VStack,
  Button,
  Pressable,
  Heading,
} from "native-base";
import {
  EvilIcons,
  AntDesign,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
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

const Btn = (props) => {
  const { navigation, language, title, screenNavigate } = props;
  const [isFontLoaded] = useFonts(customFonts);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <TouchableOpacity style={{ width: "100%", marginTop: 30 }}>
      <Button
        onPress={() => navigation.navigate(screenNavigate, { language })}
        variant="outline"
      >
        <Text
          style={[
            styles.btn,
            { fontFamily: language == "en-US" ? "farsan" : "vahid" },
          ]}
        >
          {title}
        </Text>
      </Button>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  btn: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    paddingVertical: 3,
  },
});
