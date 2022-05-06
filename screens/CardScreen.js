import React, { useEffect, useState, useRef, createRef } from "react";
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
import RenderCard from "./../components/RenderCard";

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

  const arrLength = randomRender.length;
  const [questionRef, setQuestionRef] = useState([]);
  const [spyList, setSpyList] = useState([]);

  // console.log("spyList :", spyList);

  useEffect(() => {
    // add or remove refs
    setQuestionRef((questionRef) =>
      Array(arrLength)
        .fill()
        .map((_, i) => questionRef[i] || createRef())
    );
  }, [arrLength]);

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
        <Box
          style={{
            flex: 1,
            flexGrow: 1,
          }}
        >
          <FlatList
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            data={randomRender.reverse()}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index, arr }) => (
              <RenderCard
                item={item}
                language={language}
                questionRef={questionRef[index]}
                index={index}
                lastIndex={randomRender.length - 1}
                timer={timer}
                spyList={spyList}
                setSpyList={setSpyList}
              />
            )}
          />
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
  },
});
