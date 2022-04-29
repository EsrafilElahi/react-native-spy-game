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
import { en, fa } from "../i18n/languages";

i18n.fallbacks = true;
i18n.translations = { en, fa };
i18n.locale = "fa";

const customFonts = {
  farsan: require("../assets/fonts/farsan.ttf"),
  vahid: require("../assets/fonts/vahid.ttf"),
};

const AboutScreen = ({ navigation, route }) => {
  const { language } = route.params;
  const [isFontLoaded] = useFonts(customFonts);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Box style={styles.back_icon}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <AntDesign
            style={{
              textAlign: "center",
            }}
            name="left"
            size={15}
            color="white"
          />
        </Pressable>
      </Box>
      <Box style={{ marginTop: 50 }}>
        <Center>
          <Text
            style={{
              fontFamily: language == "en-US" ? "farsan" : "vahid",
              fontSize: 35,
              paddingTop: 30,
            }}
          >
            {i18n.t("author")}
          </Text>
        </Center>
      </Box>
      <Center style={{ marginTop: 30 }}>
        <Text style={{ fontFamily: "farsan", fontSize: 20 }}>
          esrafil.elahi@gmail.com
        </Text>
        <Text
          style={{
            marginVertical: 15,
            fontFamily: "farsan",
            fontSize: 20,
          }}
        >
          https://github.com/EsrafilElahi
        </Text>
        <Text style={{ fontFamily: "farsan", fontSize: 20 }}>
          https://www.linkedin.com/in/esrafil-elahi/
        </Text>
      </Center>
    </SafeAreaView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  back_icon: {
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: .4,
    width: 50,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 5,
    position: "absolute",
    zIndex: 2,
    left: 10,
    top: 20,
  },
});
