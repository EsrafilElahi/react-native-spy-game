import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  BackHandler,
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
  Select,
  FlatList,
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
import { uuid } from "../components/Uuid";

i18n.fallbacks = true;
i18n.translations = { en, fa };

const customFonts = {
  farsan: require("../assets/fonts/farsan.ttf"),
  vahid: require("../assets/fonts/vahid.ttf"),
};

const Cards = ({ navigation, route }) => {
  const { language, category, players, spies, timer, randomItem } =
    route.params;
  const [isFontLoaded] = useFonts(customFonts);
  const playersArr = [...Array(players - spies).keys()].map(
    (item) => (item = randomItem)
  );
  const spiesArr = [...Array(spies).keys()].map(
    (item) => (item = i18n.t("spy"))
  );
  const mergeArr = [...playersArr, ...spiesArr];
  const randomRender = mergeArr.sort((a, b) => Math.random() - 0.5);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      {spies >= players - spies ? (
        <Center
          style={{
            marginTop: 40,
          }}
        >
          <Text
            style={{
              fontFamily: language === "en-US" ? "farsan" : "vahid",
              fontSize: language === "en-US" ? 21 : 20,
              paddingTop: 10,
            }}
          >
            {i18n.t("wtf")}
          </Text>
        </Center>
      ) : (
        <Box>
          <Center>Card Screen</Center>

          {/* <FlatList
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            data={randomRender.reverse()}
            keyExtractor={(item, index) => index}
          /> */}

          {randomRender.reverse().map((item, i) => {
            return (
              <Center
                style={{
                  backgroundColor: "red",
                  marginVertical: 5,
                  paddingVertical: 5,
                }}
                key={i}
              >
                {item}
              </Center>
            );
          })}
        </Box>
      )}
    </SafeAreaView>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
